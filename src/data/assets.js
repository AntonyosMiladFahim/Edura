const assets = {
  students: [
    {
      id: "stu_001",
      firstName: "Aisha",
      lastName: "Khan",
      fullName: "Aisha Khan",
      username: "aisha.k",
      email: "aisha.khan@example.com",
      avatar: "/assets/avatars/student1.jpg",
      bio: "Third-year computer science student interested in web development and data visualization.",
      dob: "2003-04-12",
      age: 22,
      gender: "female",
      address: {
        line1: "12 Rosewood Ave",
        city: "Springfield",
        state: "IL",
        zip: "62704",
        country: "USA",
      },
      phone: "+1-217-555-0134",
      enrolledCourses: [
        {
          courseId: "cs101",
          title: "Intro to Programming",
          progressPercent: 92,
          enrolledDate: "2024-08-20",
        },
        {
          courseId: "web201",
          title: "Frontend Development",
          progressPercent: 78,
          enrolledDate: "2025-01-10",
        },
      ],
      grades: { cs101: "A-", web201: "B+" },
      quizResults: { cs101: 88, web201: 74 },
      attendancePercent: 96,
      emergencyContact: {
        name: "Fatima Khan",
        relation: "Mother",
        phone: "+1-217-555-0199",
      },
      interests: ["React", "D3.js", "UI/UX"],
      social: {
        linkedin: "https://linkedin.com/in/aishak",
        github: "https://github.com/aishak",
      },
      notes: "Prefers project-based learning; often leads study groups.",
    },
    {
      id: "stu_002",
      firstName: "Liam",
      lastName: "Garcia",
      fullName: "Liam Garcia",
      username: "liamg",
      email: "liam.garcia@example.com",
      avatar: "/assets/avatars/student2.jpg",
      bio: "Part-time student and teaching assistant for basic math labs. Interested in algorithms.",
      dob: "2001-11-02",
      age: 24,
      gender: "male",
      address: {
        line1: "204 Elm St",
        city: "Riverside",
        state: "CA",
        zip: "92501",
        country: "USA",
      },
      phone: "+1-951-555-0102",
      enrolledCourses: [
        {
          courseId: "algo301",
          title: "Algorithms",
          progressPercent: 60,
          enrolledDate: "2025-02-01",
        },
        {
          courseId: "math110",
          title: "Calculus I",
          progressPercent: 100,
          enrolledDate: "2023-09-01",
        },
      ],
      grades: { algo301: "B", math110: "A" },
      quizResults: { algo301: 82, math110: 95 },
      attendancePercent: 88,
      emergencyContact: {
        name: "Rosa Garcia",
        relation: "Mother",
        phone: "+1-951-555-0120",
      },
      interests: ["Competitive programming", "Problem solving"],
      social: {
        linkedin: "https://linkedin.com/in/liamgarcia",
        github: "https://github.com/liamg",
      },
      notes: "Works evenings; great peer tutor for discrete math topics.",
    },
    {
      id: "stu_003",
      firstName: "Noah",
      lastName: "Patel",
      fullName: "Noah Patel",
      username: "noahp",
      email: "noah.patel@example.com",
      avatar: "/assets/avatars/student3.jpg",
      bio: "Graduate student focusing on machine learning and ethical AI.",
      dob: "2000-06-25",
      age: 25,
      gender: "male",
      address: {
        line1: "78 Cedar Ln",
        city: "Austin",
        state: "TX",
        zip: "73301",
        country: "USA",
      },
      phone: "+1-512-555-0177",
      enrolledCourses: [
        {
          courseId: "ml502",
          title: "Advanced Machine Learning",
          progressPercent: 45,
          enrolledDate: "2025-01-05",
        },
        {
          courseId: "ethics101",
          title: "AI Ethics",
          progressPercent: 70,
          enrolledDate: "2024-09-10",
        },
      ],
      grades: { ml502: "In Progress", ethics101: "A" },
      quizResults: { ml502: 87, ethics101: 88 },
      attendancePercent: 99,
      emergencyContact: {
        name: "Sunita Patel",
        relation: "Mother",
        phone: "+1-512-555-0140",
      },
      interests: ["Neural nets", "Fairness in ML", "Model interpretability"],
      social: {
        linkedin: "https://linkedin.com/in/noahpatel",
        github: "https://github.com/noahp",
      },
      notes: "Published 2 papers; prefers small-group seminars.",
    },
    {
      id: "stu_004",
      firstName: "Maya",
      lastName: "Okafor",
      fullName: "Maya Okafor",
      username: "maya.o",
      email: "maya.okafor@example.com",
      avatar: "/assets/avatars/student4.jpg",
      bio: "High-school aged, enrolled in accelerated tracks; strong in humanities and digital art.",
      dob: "2006-02-15",
      age: 19,
      gender: "female",
      address: {
        line1: "9 Maple Cres",
        city: "Denver",
        state: "CO",
        zip: "80202",
        country: "USA",
      },
      phone: "+1-303-555-0166",
      enrolledCourses: [
        {
          courseId: "art210",
          title: "Digital Art & Design",
          progressPercent: 83,
          enrolledDate: "2024-10-01",
        },
        {
          courseId: "lit101",
          title: "World Literature",
          progressPercent: 95,
          enrolledDate: "2024-08-20",
        },
      ],
      grades: { art210: "A", lit101: "A-" },
      quizResults: { art210: 90, lit101: 92 },
      attendancePercent: 100,
      emergencyContact: {
        name: "Chinedu Okafor",
        relation: "Father",
        phone: "+1-303-555-0190",
      },
      interests: ["Illustration", "Storytelling", "Photo editing"],
      social: { instagram: "https://instagram.com/maya.okafor" },
      notes: "Requires occasional schedule flexibility for exhibition events.",
    },
  ],

  instructors: [
    {
      id: "ins_001",
      firstName: "Dr. Emily",
      lastName: "Chen",
      fullName: "Dr. Emily Chen",
      title: "Associate Professor",
      username: "emily.chen",
      email: "emily.chen@edura.edu",
      avatar: "/assets/avatars/instructor1.jpg",
      bio: "Researcher in human-computer interaction with 10+ years teaching experience.",
      department: "Computer Science",
      office: { building: "Science Hall", room: "402" },
      phone: "+1-217-555-0201",
      qualifications: [
        "PhD Human-Computer Interaction, MIT",
        "MSc Computer Science, Stanford",
      ],
      coursesTaught: [
        { courseId: "hci410", title: "Human-Computer Interaction" },
        { courseId: "ux301", title: "User Experience Design" },
      ],
      rating: 4.8,
      hourlyRate: 85,
      availability: {
        monday: "10:00-12:00",
        wednesday: "14:00-16:00",
        friday: "09:00-11:00",
      },
      officeHoursLink: "https://cal.example.com/emilychen",
      social: {
        linkedin: "https://linkedin.com/in/emilychen",
        researchGate: "https://researchgate.net/profile/Emily_Chen",
      },
      notes:
        "Accepts thesis supervisees; prefers email contact for appointment setup.",
    },
    {
      id: "ins_002",
      firstName: "Carlos",
      lastName: "Marin",
      fullName: "Carlos Marin",
      title: "Senior Lecturer",
      username: "carlos.m",
      email: "carlos.marin@edura.edu",
      avatar: "/assets/avatars/instructor2.jpg",
      bio: "Software engineer turned educator; focuses on backend systems and cloud architecture.",
      department: "Software Engineering",
      office: { building: "Tech Center", room: "118" },
      phone: "+1-415-555-0182",
      qualifications: ["MSc Distributed Systems, UC Berkeley"],
      coursesTaught: [
        { courseId: "cloud401", title: "Cloud Systems" },
        { courseId: "db220", title: "Databases" },
      ],
      rating: 4.5,
      hourlyRate: 70,
      availability: { tuesday: "15:00-17:00", thursday: "10:00-12:00" },
      social: { github: "https://github.com/carlosmarin" },
      notes:
        "Hosts optional weekly coding clinics; provides recorded lectures.",
    },
  ],

  assistants: [
    {
      id: "ast_001",
      firstName: "Sofia",
      lastName: "Ramos",
      fullName: "Sofia Ramos",
      username: "sofia.r",
      email: "sofia.ramos@edura.edu",
      avatar: "/assets/avatars/assistant1.jpg",
      role: "Teaching Assistant",
      assignedToInstructorId: "ins_001",
      responsibilities: [
        "Grade assignments",
        "Run lab sessions",
        "Hold weekly office hours",
      ],
      schedule: { monday: "16:00-18:00", thursday: "13:00-15:00" },
      bio: "MSc student with a focus on usability testing; experienced in mentoring undergraduates.",
      phone: "+1-217-555-0266",
      notes: "Primary TA for HCI cohort; coordinates lab equipment bookings.",
    },
    {
      id: "ast_002",
      firstName: "Ethan",
      lastName: "Brooks",
      fullName: "Ethan Brooks",
      username: "ethan.b",
      email: "ethan.brooks@edura.edu",
      avatar: "/assets/avatars/assistant2.jpg",
      role: "Course Assistant",
      assignedToInstructorId: "ins_002",
      responsibilities: [
        "Autograde scripts",
        "Manage discussion boards",
        "Hold debugging sessions",
      ],
      schedule: { wednesday: "18:00-20:00", saturday: "10:00-12:00" },
      bio: "Experienced backend developer helping students with systems programming topics.",
      phone: "+1-415-555-0299",
      notes: "Maintains course CI/CD pipelines; preferred contact via Slack.",
    },
  ],

  parents: [
    {
      id: "par_001",
      firstName: "Fatima",
      lastName: "Khan",
      fullName: "Fatima Khan",
      username: "fatima.k",
      email: "fatima.khan@example.com",
      avatar: "/assets/avatars/parent1.jpg",
      phone: "+1-217-555-0199",
      address: {
        line1: "12 Rosewood Ave",
        city: "Springfield",
        state: "IL",
        zip: "62704",
        country: "USA",
      },
      children: [{ childId: "stu_001", relation: "Mother" }],
      notes:
        "Wants weekly progress summary emails; primary emergency contact for Aisha.",
    },
    {
      id: "par_002",
      firstName: "Rosa",
      lastName: "Garcia",
      fullName: "Rosa Garcia",
      username: "rosa.g",
      email: "rosa.garcia@example.com",
      avatar: "/assets/avatars/parent2.jpg",
      phone: "+1-951-555-0120",
      address: {
        line1: "204 Elm St",
        city: "Riverside",
        state: "CA",
        zip: "92501",
        country: "USA",
      },
      children: [{ childId: "stu_002", relation: "Mother" }],
      notes: "Prefers SMS for urgent messages; guardian of Liam.",
    },
  ],

  courses: [
    {
      id: "cs101",
      title: "Intro to Programming",
      description:
        "Foundations of programming using Python. Variables, control flow, functions, and basic data structures.",
      instructorId: "ins_002",
      gradeId: "4",
      lectures: [
        {
          id: "lec_cs101_01",
          name: "Getting Started with Python",
          students: 120,
          durationMins: 45,
          earnings: 1200,
          summary: "Setup, interpreter, and your first programs.",
          sections: [
            { id: "cs101_01_01", title: "Install & Setup", durationMins: 8 },
            {
              id: "cs101_01_02",
              title: "Hello World & REPL",
              durationMins: 12,
            },
            { id: "cs101_01_03", title: "First Script", durationMins: 25 },
          ],
        },
        {
          id: "lec_cs101_02",
          name: "Control Flow & Loops",
          students: 115,
          durationMins: 50,
          earnings: 1150,
          summary: "If statements, for/while loops and practical patterns.",
          sections: [
            { id: "cs101_02_01", title: "If / Else", durationMins: 18 },
            { id: "cs101_02_02", title: "For Loops", durationMins: 16 },
            { id: "cs101_02_03", title: "While Loops", durationMins: 16 },
          ],
        },
        {
          id: "lec_cs101_03",
          name: "Functions & Modules",
          students: 110,
          durationMins: 55,
          earnings: 1100,
          summary:
            "Defining functions, scope, and organizing code into modules.",
          sections: [
            {
              id: "cs101_03_01",
              title: "Defining Functions",
              durationMins: 25,
            },
            { id: "cs101_03_02", title: "Modules & Imports", durationMins: 20 },
          ],
        },
      ],
      price: 49.99,
      category: "Computer Science",
      tags: ["python", "beginner", "programming"],
      publishedDate: "2024-06-10",
    },
    {
      id: "web201",
      title: "Frontend Development",
      description:
        "HTML, CSS and modern JavaScript for building responsive user interfaces.",
      instructorId: "ins_002",
      gradeId: "4",
      lectures: [
        {
          id: "lec_web201_01",
          name: "HTML Essentials",
          students: 90,
          durationMins: 40,
          earnings: 900,
          summary: "Semantic elements, accessibility and structure.",
          sections: [
            {
              id: "web201_01_01",
              title: "Semantic Tags",
              durationMins: 12,
              videos: [
                {
                  id: "web201_01_01_v1",
                  title: "Semantic Tags — Part 1",
                  src: "/assets/videos/web201_01_01_part1.mp4",
                  durationMins: 12,
                },
                {
                  id: "web201_01_01_v2",
                  title: "Semantic Tags — Part 2",
                  src: "/assets/videos/web201_01_01_part2.mp4",
                  durationMins: 12,
                },
              ],
            },
            {
              id: "web201_01_02",
              title: "Forms & Inputs",
              durationMins: 18,
              videos: [
                {
                  id: "web201_01_02_v1",
                  title: "Forms & Inputs — Part 1",
                  src: "/assets/videos/web201_01_02_part1.mp4",
                  durationMins: 18,
                },
              ],
            },
          ],
        },
        {
          id: "lec_web201_02",
          name: "CSS Layouts",
          students: 85,
          durationMins: 50,
          earnings: 850,
          summary: "Flexbox and Grid for modern layouts.",
          sections: [
            {
              id: "web201_02_01",
              title: "Flexbox",
              durationMins: 20,
              videos: [
                {
                  id: "web201_02_01_v1",
                  title: "Flexbox — Part 1",
                  src: "/assets/videos/web201_02_01_part1.mp4",
                  durationMins: 20,
                },
              ],
            },
            {
              id: "web201_02_02",
              title: "Grid",
              durationMins: 25,
              videos: [
                {
                  id: "web201_02_02_v1",
                  title: "Grid — Part 1",
                  src: "/assets/videos/web201_02_02_part1.mp4",
                  durationMins: 25,
                },
              ],
            },
          ],
        },
        {
          id: "lec_web201_03",
          name: "Intro to React",
          students: 80,
          durationMins: 60,
          earnings: 800,
          summary: "Components, props, state, and hooks overview.",
          sections: [
            {
              id: "web201_03_01",
              title: "Components & Props",
              durationMins: 30,
              videos: [
                {
                  id: "web201_03_01_v1",
                  title: "Components & Props — Part 1",
                  src: "/assets/videos/web201_03_01_part1.mp4",
                  durationMins: 30,
                },
              ],
            },
            {
              id: "web201_03_02",
              title: "State & Hooks",
              durationMins: 25,
              videos: [
                {
                  id: "web201_03_02_v1",
                  title: "State & Hooks — Part 1",
                  src: "/assets/videos/web201_03_02_part1.mp4",
                  durationMins: 25,
                },
              ],
            },
          ],
        },
      ],
      price: 69.99,
      category: "Web Development",
      tags: ["html", "css", "react"],
      publishedDate: "2024-09-01",
    },
    {
      id: "ml502",
      title: "Advanced Machine Learning",
      description:
        "Deep learning architectures, optimization techniques, and model evaluation.",
      instructorId: "ins_001",
      gradeId: "2",
      lectures: [
        {
          id: "lec_ml502_01",
          name: "Neural Network Basics",
          students: 40,
          durationMins: 75,
          earnings: 2000,
          summary: "Perceptrons, MLPs and training basics.",
          sections: [
            {
              id: "ml502_01_01",
              title: "Perceptron & MLP",
              durationMins: 30,
              videos: [
                {
                  id: "ml502_01_01_v1",
                  title: "Perceptron & MLP — Part 1",
                  src: "/assets/videos/ml502_01_01_part1.mp4",
                  durationMins: 30,
                },
              ],
            },
            {
              id: "ml502_01_02",
              title: "Activation Functions",
              durationMins: 20,
              videos: [
                {
                  id: "ml502_01_02_v1",
                  title: "Activation Functions — Part 1",
                  src: "/assets/videos/ml502_01_02_part1.mp4",
                  durationMins: 20,
                },
              ],
            },
          ],
        },
        {
          id: "lec_ml502_02",
          name: "Convolutional Networks",
          students: 38,
          durationMins: 80,
          earnings: 1900,
          summary: "Convolutions, pooling and image architectures.",
          sections: [
            {
              id: "ml502_02_01",
              title: "Conv Layers",
              durationMins: 35,
              videos: [
                {
                  id: "ml502_02_01_v1",
                  title: "Conv Layers — Part 1",
                  src: "/assets/videos/ml502_02_01_part1.mp4",
                  durationMins: 35,
                },
              ],
            },
            {
              id: "ml502_02_02",
              title: "Pooling",
              durationMins: 30,
              videos: [
                {
                  id: "ml502_02_02_v1",
                  title: "Pooling — Part 1",
                  src: "/assets/videos/ml502_02_02_part1.mp4",
                  durationMins: 30,
                },
              ],
            },
          ],
        },
      ],
      price: 199.0,
      category: "Machine Learning",
      tags: ["ml", "deep-learning"],
      publishedDate: "2025-01-05",
    },
    {
      id: "art210",
      title: "Digital Art & Design",
      description: "Digital illustration techniques and portfolio building.",
      instructorId: "ins_002",
      gradeId: "1",
      lectures: [
        {
          id: "lec_art210_01",
          name: "Digital Tools Overview",
          students: 60,
          durationMins: 50,
          earnings: 600,
          summary: "Photoshop and Procreate basics.",
          sections: [
            {
              id: "art210_01_01",
              title: "Using Photoshop",
              durationMins: 20,
              videos: [
                {
                  id: "art210_01_01_v1",
                  title: "Using Photoshop — Part 1",
                  src: "/assets/videos/art210_01_01_part1.mp4",
                  durationMins: 20,
                },
              ],
            },
            {
              id: "art210_01_02",
              title: "Using Procreate",
              durationMins: 20,
              videos: [
                {
                  id: "art210_01_02_v1",
                  title: "Using Procreate — Part 1",
                  src: "/assets/videos/art210_01_02_part1.mp4",
                  durationMins: 20,
                },
              ],
            },
          ],
        },
        {
          id: "lec_art210_02",
          name: "Composition & Color",
          students: 58,
          durationMins: 60,
          earnings: 580,
          summary: "Color theory, composition, and layouts.",
          sections: [
            {
              id: "art210_02_01",
              title: "Color Theory",
              durationMins: 30,
              videos: [
                {
                  id: "art210_02_01_v1",
                  title: "Color Theory — Part 1",
                  src: "/assets/videos/art210_02_01_part1.mp4",
                  durationMins: 30,
                },
              ],
            },
            {
              id: "art210_02_02",
              title: "Composition",
              durationMins: 25,
              videos: [
                {
                  id: "art210_02_02_v1",
                  title: "Composition — Part 1",
                  src: "/assets/videos/art210_02_02_part1.mp4",
                  durationMins: 25,
                },
              ],
            },
          ],
        },
      ],
      price: 39.99,
      category: "Arts",
      tags: ["digital-art", "illustration"],
      publishedDate: "2024-10-01",
    },

    // Additional courses for more variety and grade mapping
    {
      id: "math110",
      title: "Calculus I",
      description: "Limits, derivatives, and the foundation of calculus.",
      instructorId: "ins_002",
      gradeId: "3",
      lectures: [
        {
          id: "lec_math110_01",
          name: "Limits & Continuity",
          students: 140,
          durationMins: 50,
          earnings: 800,
          sections: [
            {
              id: "math110_01_01",
              title: "Understanding Limits",
              durationMins: 25,
              videos: [
                {
                  id: "math110_01_01_v1",
                  title: "Understanding Limits — Part 1",
                  src: "/assets/videos/math110_01_01_part1.mp4",
                  durationMins: 25,
                },
              ],
            },
            {
              id: "math110_01_02",
              title: "Continuity",
              durationMins: 20,
              videos: [
                {
                  id: "math110_01_02_v1",
                  title: "Continuity — Part 1",
                  src: "/assets/videos/math110_01_02_part1.mp4",
                  durationMins: 20,
                },
              ],
            },
          ],
        },
        {
          id: "lec_math110_02",
          name: "Derivatives",
          students: 130,
          durationMins: 60,
          earnings: 900,
          sections: [
            {
              id: "math110_02_01",
              title: "Definition & Rules",
              durationMins: 30,
              videos: [
                {
                  id: "math110_02_01_v1",
                  title: "Definition & Rules — Part 1",
                  src: "/assets/videos/math110_02_01_part1.mp4",
                  durationMins: 30,
                },
              ],
            },
            {
              id: "math110_02_02",
              title: "Applications",
              durationMins: 25,
              videos: [
                {
                  id: "math110_02_02_v1",
                  title: "Applications — Part 1",
                  src: "/assets/videos/math110_02_02_part1.mp4",
                  durationMins: 25,
                },
              ],
            },
          ],
        },
      ],
      price: 59.99,
      category: "Mathematics",
      tags: ["calculus", "math"],
      publishedDate: "2023-09-01",
    },
    {
      id: "algo301",
      title: "Algorithms",
      description: "Core algorithms, data structures, and complexity analysis.",
      instructorId: "ins_001",
      gradeId: "4",
      lectures: [
        {
          id: "lec_algo301_01",
          name: "Sorting & Searching",
          students: 110,
          durationMins: 70,
          earnings: 1100,
          sections: [
            {
              id: "algo301_01_01",
              title: "QuickSort & MergeSort",
              durationMins: 35,
              videos: [
                {
                  id: "algo301_01_01_v1",
                  title: "QuickSort & MergeSort — Part 1",
                  src: "/assets/videos/algo301_01_01_part1.mp4",
                  durationMins: 35,
                },
              ],
            },
            {
              id: "algo301_01_02",
              title: "Binary Search",
              durationMins: 20,
              videos: [
                {
                  id: "algo301_01_02_v1",
                  title: "Binary Search — Part 1",
                  src: "/assets/videos/algo301_01_02_part1.mp4",
                  durationMins: 20,
                },
              ],
            },
          ],
        },
        {
          id: "lec_algo301_02",
          name: "Graphs & Trees",
          students: 100,
          durationMins: 80,
          earnings: 1200,
          sections: [
            {
              id: "algo301_02_01",
              title: "DFS & BFS",
              durationMins: 30,
              videos: [
                {
                  id: "algo301_02_01_v1",
                  title: "DFS & BFS — Part 1",
                  src: "/assets/videos/algo301_02_01_part1.mp4",
                  durationMins: 30,
                },
              ],
            },
            {
              id: "algo301_02_02",
              title: "Shortest Paths",
              durationMins: 30,
              videos: [
                {
                  id: "algo301_02_02_v1",
                  title: "Shortest Paths — Part 1",
                  src: "/assets/videos/algo301_02_02_part1.mp4",
                  durationMins: 30,
                },
              ],
            },
          ],
        },
      ],
      price: 79.99,
      category: "Computer Science",
      tags: ["algorithms", "data-structures"],
      publishedDate: "2024-11-01",
    },
    {
      id: "ethics101",
      title: "AI Ethics",
      description:
        "Principles and case studies about ethical AI design and deployment.",
      instructorId: "ins_001",
      gradeId: "2",
      lectures: [
        {
          id: "lec_ethics101_01",
          name: "History & Principles",
          students: 85,
          durationMins: 45,
          earnings: 400,
          sections: [
            {
              id: "ethics101_01_01",
              title: "Historical Context",
              durationMins: 20,
              videos: [
                {
                  id: "ethics101_01_01_v1",
                  title: "Historical Context — Part 1",
                  src: "/assets/videos/ethics101_01_01_part1.mp4",
                  durationMins: 20,
                },
              ],
            },
            {
              id: "ethics101_01_02",
              title: "Fairness & Bias",
              durationMins: 25,
              videos: [
                {
                  id: "ethics101_01_02_v1",
                  title: "Fairness & Bias — Part 1",
                  src: "/assets/videos/ethics101_01_02_part1.mp4",
                  durationMins: 25,
                },
              ],
            },
          ],
        },
        {
          id: "lec_ethics101_02",
          name: "Regulation & Case Studies",
          students: 78,
          durationMins: 55,
          earnings: 420,
          sections: [
            {
              id: "ethics101_02_01",
              title: "Privacy",
              durationMins: 25,
              videos: [
                {
                  id: "ethics101_02_01_v1",
                  title: "Privacy — Part 1",
                  src: "/assets/videos/ethics101_02_01_part1.mp4",
                  durationMins: 25,
                },
              ],
            },
            {
              id: "ethics101_02_02",
              title: "Accountability",
              durationMins: 25,
              videos: [
                {
                  id: "ethics101_02_02_v1",
                  title: "Accountability — Part 1",
                  src: "/assets/videos/ethics101_02_02_part1.mp4",
                  durationMins: 25,
                },
              ],
            },
          ],
        },
      ],
      price: 29.99,
      category: "Ethics",
      tags: ["ethics", "ai"],
      publishedDate: "2024-09-10",
    },
    {
      id: "hci410",
      title: "Human-Computer Interaction",
      description: "Designing usable interfaces with research-backed methods.",
      instructorId: "ins_001",
      gradeId: "3",
      lectures: [
        {
          id: "lec_hci410_01",
          name: "Design Principles",
          students: 72,
          durationMins: 60,
          earnings: 600,
          sections: [
            {
              id: "hci410_01_01",
              title: "Affordances & Feedback",
              durationMins: 25,
              videos: [
                {
                  id: "hci410_01_01_v1",
                  title: "Affordances & Feedback — Part 1",
                  src: "/assets/videos/hci410_01_01_part1.mp4",
                  durationMins: 25,
                },
              ],
            },
            {
              id: "hci410_01_02",
              title: "User Research",
              durationMins: 30,
              videos: [
                {
                  id: "hci410_01_02_v1",
                  title: "User Research — Part 1",
                  src: "/assets/videos/hci410_01_02_part1.mp4",
                  durationMins: 30,
                },
              ],
            },
          ],
        },
      ],
      price: 89.0,
      category: "Design",
      tags: ["hci", "ux"],
      publishedDate: "2024-03-15",
    },
    {
      id: "cloud401",
      title: "Cloud Systems",
      description: "Cloud architecture, services and deployment patterns.",
      instructorId: "ins_002",
      gradeId: "4",
      lectures: [
        {
          id: "lec_cloud401_01",
          name: "Cloud Fundamentals",
          students: 95,
          durationMins: 70,
          earnings: 950,
          sections: [
            {
              id: "cloud401_01_01",
              title: "IaaS, PaaS, SaaS",
              durationMins: 25,
              videos: [
                {
                  id: "cloud401_01_01_v1",
                  title: "IaaS, PaaS, SaaS — Part 1",
                  src: "/assets/videos/cloud401_01_01_part1.mp4",
                  durationMins: 25,
                },
              ],
            },
            {
              id: "cloud401_01_02",
              title: "Networking & Security",
              durationMins: 30,
              videos: [
                {
                  id: "cloud401_01_02_v1",
                  title: "Networking & Security — Part 1",
                  src: "/assets/videos/cloud401_01_02_part1.mp4",
                  durationMins: 30,
                },
              ],
            },
          ],
        },
      ],
      price: 129.99,
      category: "Cloud",
      tags: ["cloud", "devops"],
      publishedDate: "2024-12-01",
    },
  ],
};

export default assets;
