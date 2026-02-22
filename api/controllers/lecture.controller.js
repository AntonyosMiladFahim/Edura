import prisma from '../lib/prisma.js';

// Get lecture details with sections and videos
export const getLectureById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const lecture = await prisma.lecture.findUnique({
      where: { id },
      include: {
        sections: {
          orderBy: { order: 'asc' },
          include: {
            videos: {
              orderBy: { order: 'asc' }
            }
          }
        },
        quiz: {
          include: {
            questions: {
              include: {
                options: true
              }
            }
          }
        },
        partition: {
          select: {
            id: true,
            title: true,
            courseId: true
          }
        }
      }
    });

    if (!lecture) {
      return res.status(404).json({ message: "Lecture not found" });
    }

    res.status(200).json(lecture);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch lecture" });
  }
};

// Create a new lecture
export const createLecture = async (req, res) => {
  const { title, name, content, summary, videoUrl, maxVideoViews, maxQuizAttempts, partitionId, durationMins } = req.body;

  const user = await prisma.user.findUnique({
    where: { id: req.userId },
  });

  if (!user || (user.role !== "TEACHER" && user.role !== "ADMIN")) {
    return res.status(403).json({ message: "Insufficient permissions" });
  }

  try {
    const newLecture = await prisma.lecture.create({
      data: {
        title,
        name,
        content,
        summary,
        videoUrl,
        maxVideoViews: maxVideoViews || 1,
        maxQuizAttempts: maxQuizAttempts || 1,
        durationMins: durationMins || 0,
        partitionId
      }
    });
    res.status(201).json(newLecture);
  } catch (err) {
    res.status(500).json({ error: "Could not create lecture" });
  }
};

// Update lecture
export const updateLecture = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  const user = await prisma.user.findUnique({
    where: { id: req.userId },
  });

  if (!user || (user.role !== "TEACHER" && user.role !== "ADMIN")) {
    return res.status(403).json({ message: "Insufficient permissions" });
  }

  try {
    const updatedLecture = await prisma.lecture.update({
      where: { id },
      data: updateData
    });
    res.status(200).json(updatedLecture);
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
};

// Delete lecture
export const deleteLecture = async (req, res) => {
  const { id } = req.params;

  const user = await prisma.user.findUnique({
    where: { id: req.userId },
  });

  if (!user || (user.role !== "TEACHER" && user.role !== "ADMIN")) {
    return res.status(403).json({ message: "Insufficient permissions" });
  }

  try {
    await prisma.lecture.delete({ where: { id } });
    res.status(200).json({ message: "Lecture deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
};

// Get or create lecture access code for a student
export const getLectureAccessCode = async (req, res) => {
  const { lectureId } = req.params;
  const studentId = req.userId;

  try {
    // Check if code already exists
    let accessCode = await prisma.lectureAccess.findUnique({
      where: {
        studentId_lectureId: { studentId, lectureId }
      }
    });

    if (!accessCode) {
      // Generate a unique code
      const code = Math.random().toString(36).substring(2, 10).toUpperCase();
      
      accessCode = await prisma.lectureAccess.create({
        data: {
          code,
          studentId,
          lectureId
        }
      });
    }

    res.status(200).json(accessCode);
  } catch (err) {
    res.status(500).json({ error: "Failed to get access code" });
  }
};

// Track lecture progress for a user
export const updateLectureProgress = async (req, res) => {
  const { lectureId } = req.params;
  const { videoViews, isCompleted } = req.body;
  const userId = req.userId;

  try {
    const progress = await prisma.progress.upsert({
      where: {
        userId_lectureId: { userId, lectureId }
      },
      update: {
        videoViews: videoViews !== undefined ? videoViews : undefined,
        isCompleted: isCompleted !== undefined ? isCompleted : undefined
      },
      create: {
        userId,
        lectureId,
        videoViews: videoViews || 0,
        isCompleted: isCompleted || false
      }
    });

    res.status(200).json(progress);
  } catch (err) {
    res.status(500).json({ error: "Failed to update progress" });
  }
};

// Get user's progress for a lecture
export const getLectureProgress = async (req, res) => {
  const { lectureId } = req.params;
  const userId = req.userId;

  try {
    const progress = await prisma.progress.findUnique({
      where: {
        userId_lectureId: { userId, lectureId }
      }
    });

    if (!progress) {
      return res.status(200).json({ videoViews: 0, isCompleted: false });
    }

    res.status(200).json(progress);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch progress" });
  }
};
