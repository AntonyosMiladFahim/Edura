import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const IsAdmin = async (req, res, next) => {

  const userId = req.userId;
  
  try {
    const user =  await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.role !== "ADMIN") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Error checking enrollment" });
  }
};
