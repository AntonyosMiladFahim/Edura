import prisma from '../lib/prisma.js';

// 1. VIEW COURSE (Public/Student View - Minimal details)
export const getAllCourses = async (req, res) => {
  try {
    const courses = await prisma.course.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        level: true,
        price: true,
        category: true,
        tags: true,
        publishedDate: true,
        creator: {
          select: {
            id: true,
            username: true,
            fullName: true,
            avatar: true,
            rating: true
          }
        },
        grade: {
          select: {
            id: true,
            name: true
          }
        },
        _count: { select: { enrollments: true } }
      }
    });
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch courses" });
  }
};

// 2. VIEW FULL COURSE (Teacher/Enrolled Student View - Nested)
export const getCourseDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await prisma.course.findUnique({
      where: { id },
      include: {
        creator: {
          select: {
            id: true,
            username: true,
            fullName: true,
            avatar: true,
            bio: true,
            rating: true,
            title: true
          }
        },
        grade: {
          select: {
            id: true,
            name: true,
            description: true
          }
        },
        partitions: {
          title, description, level, price, category, tags, gradeId, publishedDate } = req.body;

  const user = await prisma.user.findUnique({
    where: { id: req.userId },
  });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const userRole = user.role;
  
  if (userRole !== "TEACHER" && userRole !== "ADMIN") {
    return res.status(403).json({ message: "Insufficient permissions to add course" });
  }

  try {
    const newCourse = await prisma.course.create({
      data: {
        title,
        description,
        level,
        price,
        category,
        tags: tags || [],
        gradeId,
        publishedDate: publishedDate ? new Date(publishedDate) : new Date(),
        creatorId: req.userId 
      },
      include: {
        creator: {
          select: {
            id: true,
            username: true,
            fullName: true,
            avatar: true
          }
        },
        grade: {
          select: {
            id: true,
            name: true
          }
        }
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ error: "Error fetching course details" });
  }
};

// 3. ADD COURSE (Teacher/Assistant Only)
export const addCourse = async (req, res) => {
  const {userId, title, description, level } = req.body;

  const user =  await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const userRole = user.role;
  
  if (userRole !== "TEACHER" && userRole !== "ADMIN") {
    return res.status(403).json({ message: "Insufficient permissions to add course" });
  }


  try {
    const newCourse = await prisma.course.create({
      data: {
        title,
        description,
        level,
        creatorId: req.userId 
      }
    });
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(500).json({ error: "Could not create course" });
  }
};

// 4. UPDATE COURSE
export const updateCourse = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  const userId = req.userId;
    const user =  await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const userRole = user.role;
  if (userRole !== "TEACHER" && userRole !== "ADMIN") {
    return res.status(403).json({ message: "Insufficient permissions to update course" });
  }

  try {
    const updatedCourse = await prisma.course.update({
      where: { id },
      data: updateData
    });
    res.status(200).json(updatedCourse);
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
};

// 5. DELETE COURSE (Cascades to partitions/lectures/quizzes in our schema)
export const deleteCourse = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;

  const user =  await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const userRole = user.role;

  if (userRole !== "TEACHER" && userRole !== "ADMIN") {
    return res.status(403).json({ message: "Insufficient permissions to delete course" });
  }
  try {
    await prisma.course.delete({ where: { id } });
    res.status(200).json({ message: "Course and all related content deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
};