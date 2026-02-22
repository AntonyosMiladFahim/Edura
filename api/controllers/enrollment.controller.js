import prisma from '../lib/prisma.js';

// Get all enrollments for a student
export const getStudentEnrollments = async (req, res) => {
  const { studentId } = req.params;

  try {
    const enrollments = await prisma.enrollment.findMany({
      where: { studentId },
      include: {
        course: {
          select: {
            id: true,
            title: true,
            description: true,
            level: true,
            price: true,
            category: true,
            tags: true,
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
          }
        }
      },
      orderBy: { enrolledDate: 'desc' }
    });
    res.status(200).json(enrollments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch enrollments" });
  }
};

// Get all students enrolled in a course
export const getCourseEnrollments = async (req, res) => {
  const { courseId } = req.params;

  try {
    const enrollments = await prisma.enrollment.findMany({
      where: { courseId },
      include: {
        student: {
          select: {
            id: true,
            username: true,
            fullName: true,
            email: true,
            avatar: true,
            firstName: true,
            lastName: true
          }
        }
      },
      orderBy: { enrolledDate: 'desc' }
    });
    res.status(200).json(enrollments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch course enrollments" });
  }
};

// Enroll a student in a course
export const enrollStudent = async (req, res) => {
  const { studentId, courseId } = req.body;

  // Verify the user is enrolling themselves or is an admin
  if (req.userId !== studentId) {
    const user = await prisma.user.findUnique({
      where: { id: req.userId }
    });
    if (!user || user.role !== "ADMIN") {
      return res.status(403).json({ message: "Unauthorized" });
    }
  }

  try {
    // Check if already enrolled
    const existing = await prisma.enrollment.findUnique({
      where: {
        studentId_courseId: { studentId, courseId }
      }
    });

    if (existing) {
      return res.status(400).json({ message: "Already enrolled in this course" });
    }

    const enrollment = await prisma.enrollment.create({
      data: {
        studentId,
        courseId,
        progressPercent: 0
      },
      include: {
        course: {
          select: {
            id: true,
            title: true,
            description: true
          }
        }
      }
    });

    res.status(201).json(enrollment);
  } catch (err) {
    res.status(500).json({ error: "Could not enroll student" });
  }
};

// Update enrollment progress
export const updateEnrollmentProgress = async (req, res) => {
  const { id } = req.params;
  const { progressPercent } = req.body;

  try {
    const updatedEnrollment = await prisma.enrollment.update({
      where: { id },
      data: { progressPercent }
    });
    res.status(200).json(updatedEnrollment);
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
};

// Unenroll a student from a course
export const unenrollStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const enrollment = await prisma.enrollment.findUnique({
      where: { id }
    });

    if (!enrollment) {
      return res.status(404).json({ message: "Enrollment not found" });
    }

    // Verify authorization
    if (req.userId !== enrollment.studentId) {
      const user = await prisma.user.findUnique({
        where: { id: req.userId }
      });
      if (!user || user.role !== "ADMIN") {
        return res.status(403).json({ message: "Unauthorized" });
      }
    }

    await prisma.enrollment.delete({ where: { id } });
    res.status(200).json({ message: "Unenrolled successfully" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
};
