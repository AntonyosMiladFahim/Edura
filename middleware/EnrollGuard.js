import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const isEnrolled = async (req, res, next) => {
  const { courseId } = req.params;
  const userId = req.userId;

  try {
    const enrollment = await prisma.enrollment.findUnique({
      where: {
        studentId_courseId: {
          studentId: userId,
          courseId: courseId,
        },
      },
    });

    if (!enrollment && req.userRole !== "TEACHER" && req.userRole !== "ADMIN") {
      return res.status(403).json({ message: "You are not enrolled in this course" });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Error checking enrollment" });
  }
};
