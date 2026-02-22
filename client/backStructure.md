# Backend Architecture for Edura Platform

## Database Models (MongoDB Schemas)

### 1. User Model
```javascript
{
  _id: ObjectId,
  email: String (unique),
  password: String (hashed),
  role: String (enum: ['student', 'instructor', 'parent', 'admin']),
  firstName: String,
  lastName: String,
  username: String (unique),
  avatar: String (URL),
  phone: String,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### 2. Student Model
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: 'User'),
  bio: String,
  dob: Date,
  age: Number,
  gender: String,
  address: {
    line1: String,
    city: String,
    state: String,
    zip: String,
    country: String
  },
  enrolledCourses: [{
    courseId: ObjectId (ref: 'Course'),
    progressPercent: Number,
    enrolledDate: Date,
    completedLectures: [ObjectId]
  }],
  grades: Map, // courseId -> grade
  quizResults: Map, // courseId -> score
  attendancePercent: Number,
  emergencyContact: {
    name: String,
    relation: String,
    phone: String
  },
  interests: [String],
  social: Object,
  parentId: ObjectId (ref: 'Parent')
}
```

### 3. Instructor Model
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: 'User'),
  title: String,
  bio: String,
  department: String,
  office: { building: String, room: String },
  qualifications: [String],
  coursesTaught: [ObjectId] (ref: 'Course'),
  rating: Number,
  hourlyRate: Number,
  availability: Map, // day -> time
  officeHoursLink: String,
  social: Object
}
```

### 4. Parent Model
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: 'User'),
  children: [{
    childId: ObjectId (ref: 'Student'),
    relation: String
  }],
  address: Object
}
```

### 5. Grade Model
```javascript
{
  _id: ObjectId,
  name: String (e.g., "Primary 1"),
  description: String,
  imageUrl: String,
  order: Number,
  isActive: Boolean
}
```

### 6. Course Model
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  instructorId: ObjectId (ref: 'Instructor'),
  gradeId: ObjectId (ref: 'Grade'),
  price: Number,
  category: String,
  tags: [String],
  imageUrl: String,
  publishedDate: Date,
  isPublished: Boolean,
  enrolledStudents: [ObjectId] (ref: 'Student'),
  lectures: [ObjectId] (ref: 'Lecture')
}
```

### 7. Lecture Model
```javascript
{
  _id: ObjectId,
  courseId: ObjectId (ref: 'Course'),
  name: String,
  summary: String,
  durationMins: Number,
  order: Number,
  sections: [{
    id: String,
    title: String,
    durationMins: Number,
    videos: [{
      id: String,
      title: String,
      src: String (video URL),
      durationMins: Number
    }]
  }],
  enrolledStudentsCount: Number,
  earnings: Number
}
```

---

## API Endpoints Structure

### Authentication Routes (`/api/auth`)
- `POST /register` - Register new user
- `POST /login` - Login user
- `POST /logout` - Logout user
- `GET /me` - Get current user
- `POST /forgot-password` - Request password reset
- `POST /reset-password` - Reset password

### Student Routes (`/api/students`)
- `GET /` - Get all students (instructor only)
- `GET /:id` - Get student by ID
- `PUT /:id` - Update student profile
- `GET /:id/courses` - Get enrolled courses
- `POST /:id/enroll/:courseId` - Enroll in course
- `GET /:id/progress/:courseId` - Get course progress
- `PUT /:id/progress/:courseId` - Update course progress
- `GET /:id/grades` - Get student grades
- `POST /:id/upload-avatar` - Upload profile picture

### Instructor Routes (`/api/instructors`)
- `GET /` - Get all instructors
- `GET /:id` - Get instructor by ID
- `PUT /:id` - Update instructor profile
- `GET /:id/dashboard` - Get dashboard stats
- `GET /:id/students` - Get enrolled students

### Parent Routes (`/api/parents`)
- `GET /:id` - Get parent details
- `GET /:id/children` - Get children data
- `GET /:id/child/:childId/progress` - Get child progress

### Grade Routes (`/api/grades`)
- `GET /` - Get all grades
- `GET /:id` - Get grade by ID
- `POST /` - Create grade (instructor only)
- `PUT /:id` - Update grade
- `DELETE /:id` - Delete grade
- `POST /:id/upload-image` - Upload grade image

### Course Routes (`/api/courses`)
- `GET /` - Get all courses (with filters)
- `GET /grade/:gradeId` - Get courses by grade
- `GET /:id` - Get course by ID
- `POST /` - Create course (instructor only)
- `PUT /:id` - Update course
- `DELETE /:id` - Delete course
- `POST /:id/upload-image` - Upload course image
- `GET /:id/students` - Get enrolled students
- `POST /:id/publish` - Publish/unpublish course

### Lecture Routes (`/api/lectures`)
- `GET /course/:courseId` - Get lectures by course
- `GET /:id` - Get lecture by ID
- `POST /` - Create lecture (instructor only)
- `PUT /:id` - Update lecture
- `DELETE /:id` - Delete lecture
- `POST /:id/sections` - Add section to lecture
- `PUT /:id/sections/:sectionId` - Update section
- `DELETE /:id/sections/:sectionId` - Delete section

### Upload Routes (`/api/upload`)
- `POST /video` - Upload video file
- `POST /image` - Upload image file

---

## Backend File Structure

```
backend/
├── server.js                 # Entry point
├── .env                      # Environment variables
├── package.json
├── config/
│   ├── db.js                # MongoDB connection
│   ├── cloudinary.js        # File upload config
│   └── jwt.js               # JWT configuration
├── models/
│   ├── User.js
│   ├── Student.js
│   ├── Instructor.js
│   ├── Parent.js
│   ├── Grade.js
│   ├── Course.js
│   ├── Lecture.js
|   └── asistant.js
├── controllers/
│   ├── authController.js
│   ├── studentController.js
│   ├── instructorController.js
│   ├── parentController.js
│   ├── gradeController.js
│   ├── courseController.js
│   ├── lectureController.js
│   └── uploadController.js
├── routes/
│   ├── authRoutes.js
│   ├── studentRoutes.js
│   ├── instructorRoutes.js
│   ├── parentRoutes.js
│   ├── gradeRoutes.js
│   ├── courseRoutes.js
│   ├── lectureRoutes.js
│   └── uploadRoutes.js
├── middleware/
│   ├── auth.js              # JWT authentication
│   ├── roleCheck.js         # Role-based access
│   ├── errorHandler.js      # Error handling
│   ├── upload.js            # Multer file upload
│   └── validation.js        # Request validation
└── utils/
    ├── generateToken.js     # JWT token generation
    ├── sendEmail.js         # Email service
    └── helpers.js           # Helper functions
```

---

## Key Functions by Controller

### authController.js
- `register()` - Create new user account
- `login()` - Authenticate user
- `logout()` - End session
- `getCurrentUser()` - Get logged-in user
- `forgotPassword()` - Send reset email
- `resetPassword()` - Update password

### studentController.js
- `getAllStudents()` - List all students
- `getStudentById()` - Get student details
- `updateStudent()` - Update profile
- `enrollInCourse()` - Enroll student in course
- `updateProgress()` - Update course progress
- `getStudentGrades()` - Fetch grades
- `uploadAvatar()` - Upload profile picture

### instructorController.js
- `getDashboard()` - Get stats (earnings, students, courses)
- `getEnrolledStudents()` - List students
- `updateInstructor()` - Update profile
- `getInstructorCourses()` - List instructor's courses

### gradeController.js
- `getAllGrades()` - List all grades
- `createGrade()` - Add new grade
- `updateGrade()` - Modify grade
- `deleteGrade()` - Remove grade
- `uploadGradeImage()` - Upload grade image

### courseController.js
- `getAllCourses()` - List courses with filters
- `getCoursesByGrade()` - Filter by grade
- `getCourseById()` - Get single course
- `createCourse()` - Add new course
- `updateCourse()` - Modify course
- `deleteCourse()` - Remove course
- `publishCourse()` - Publish/unpublish
- `getEnrolledStudents()` - List enrolled students

### lectureController.js
- `getLecturesByCourse()` - Get course lectures
- `getLectureById()` - Get lecture details
- `createLecture()` - Add lecture
- `updateLecture()` - Modify lecture
- `deleteLecture()` - Remove lecture
- `addSection()` - Add section to lecture
- `updateSection()` - Modify section

### parentController.js
- `getParentById()` - Get parent details
- `getChildren()` - Get children list
- `getChildProgress()` - Get child progress

### uploadController.js
- `uploadImage()` - Handle image uploads
- `uploadVideo()` - Handle video uploads
- `deleteFile()` - Remove uploaded file

---

## Required NPM Packages

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.6.0",
    "dotenv": "^16.3.1",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.2",
    "cors": "^2.8.5",
    "express-validator": "^7.0.1",
    "multer": "^1.4.5-lts.1",
    "cloudinary": "^1.41.0",
    "nodemailer": "^6.9.7",
    "cookie-parser": "^1.4.6",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

---

## Environment Variables (.env)

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/edura
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
CLIENT_URL=http://localhost:5173
```

---

## Implementation Notes

1. **Authentication**: Use JWT tokens stored in HTTP-only cookies for security
2. **File Uploads**: Use Cloudinary for storing images and videos
3. **Validation**: Validate all inputs using express-validator
4. **Error Handling**: Implement centralized error handling middleware
5. **CORS**: Configure CORS to allow requests from your React frontend
6. **Rate Limiting**: Consider adding rate limiting for API endpoints
7. **Pagination**: Implement pagination for list endpoints
8. **Search & Filter**: Add search and filter capabilities for courses and students

This comprehensive backend structure will support all the features in your Edura frontend and provide a scalable foundation for the platform.
