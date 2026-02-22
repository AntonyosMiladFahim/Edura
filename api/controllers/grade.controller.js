import prisma from '../lib/prisma.js';

// Get all grades
export const getAllGrades = async (req, res) => {
  try {
    const grades = await prisma.grade.findMany({
      orderBy: { order: 'asc' },
      include: {
        _count: { select: { courses: true } }
      }
    });
    res.status(200).json(grades);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch grades" });
  }
};

// Get single grade with courses
export const getGradeById = async (req, res) => {
  const { id } = req.params;
  try {
    const grade = await prisma.grade.findUnique({
      where: { id },
      include: {
        courses: {
          select: {
            id: true,
            title: true,
            description: true,
            level: true,
            price: true,
            category: true,
            tags: true,
            _count: { select: { enrollments: true } }
          }
        }
      }
    });
    if (!grade) return res.status(404).json({ message: "Grade not found" });
    res.status(200).json(grade);
  } catch (err) {
    res.status(500).json({ error: "Error fetching grade details" });
  }
};

// Create new grade (Admin only)
export const createGrade = async (req, res) => {
  const { name, description, order } = req.body;

  const user = await prisma.user.findUnique({
    where: { id: req.userId },
  });

  if (!user || user.role !== "ADMIN") {
    return res.status(403).json({ message: "Admin access required" });
  }

  try {
    const newGrade = await prisma.grade.create({
      data: { name, description, order }
    });
    res.status(201).json(newGrade);
  } catch (err) {
    res.status(500).json({ error: "Could not create grade" });
  }
};

// Update grade (Admin only)
export const updateGrade = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  const user = await prisma.user.findUnique({
    where: { id: req.userId },
  });

  if (!user || user.role !== "ADMIN") {
    return res.status(403).json({ message: "Admin access required" });
  }

  try {
    const updatedGrade = await prisma.grade.update({
      where: { id },
      data: updateData
    });
    res.status(200).json(updatedGrade);
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
};

// Delete grade (Admin only)
export const deleteGrade = async (req, res) => {
  const { id } = req.params;

  const user = await prisma.user.findUnique({
    where: { id: req.userId },
  });

  if (!user || user.role !== "ADMIN") {
    return res.status(403).json({ message: "Admin access required" });
  }

  try {
    await prisma.grade.delete({ where: { id } });
    res.status(200).json({ message: "Grade deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
};
