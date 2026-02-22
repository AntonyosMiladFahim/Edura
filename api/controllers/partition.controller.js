import prisma from '../lib/prisma.js';

// Get partition by ID with lectures
export const getPartitionById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const partition = await prisma.partition.findUnique({
      where: { id },
      include: {
        lectures: {
          select: {
            id: true,
            title: true,
            name: true,
            summary: true,
            durationMins: true,
            students: true,
            earnings: true
          }
        },
        course: {
          select: {
            id: true,
            title: true
          }
        }
      }
    });

    if (!partition) {
      return res.status(404).json({ message: "Partition not found" });
    }

    res.status(200).json(partition);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch partition" });
  }
};

// Create a new partition
export const createPartition = async (req, res) => {
  const { title, order, courseId } = req.body;

  const user = await prisma.user.findUnique({
    where: { id: req.userId },
  });

  if (!user || (user.role !== "TEACHER" && user.role !== "ADMIN")) {
    return res.status(403).json({ message: "Insufficient permissions" });
  }

  try {
    const newPartition = await prisma.partition.create({
      data: {
        title,
        order,
        courseId
      }
    });
    res.status(201).json(newPartition);
  } catch (err) {
    res.status(500).json({ error: "Could not create partition" });
  }
};

// Update partition
export const updatePartition = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  const user = await prisma.user.findUnique({
    where: { id: req.userId },
  });

  if (!user || (user.role !== "TEACHER" && user.role !== "ADMIN")) {
    return res.status(403).json({ message: "Insufficient permissions" });
  }

  try {
    const updatedPartition = await prisma.partition.update({
      where: { id },
      data: updateData
    });
    res.status(200).json(updatedPartition);
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
};

// Delete partition (cascades to lectures)
export const deletePartition = async (req, res) => {
  const { id } = req.params;

  const user = await prisma.user.findUnique({
    where: { id: req.userId },
  });

  if (!user || (user.role !== "TEACHER" && user.role !== "ADMIN")) {
    return res.status(403).json({ message: "Insufficient permissions" });
  }

  try {
    await prisma.partition.delete({ where: { id } });
    res.status(200).json({ message: "Partition deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
};
