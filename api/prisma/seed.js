// Seed script to populate initial data
import prisma from '../lib/prisma.js';

async function seedGrades() {
  console.log('Seeding grades...');
  
  const grades = [
    { name: 'Primary 1', description: 'First year of primary school', order: 1 },
    { name: 'Primary 2', description: 'Second year of primary school', order: 2 },
    { name: 'Primary 3', description: 'Third year of primary school', order: 3 },
    { name: 'Primary 4', description: 'Fourth year of primary school', order: 4 },
    { name: 'Primary 5', description: 'Fifth year of primary school', order: 5 },
    { name: 'Primary 6', description: 'Sixth year of primary school', order: 6 },
    { name: 'Secondary 1', description: 'First year of secondary school', order: 7 },
    { name: 'Secondary 2', description: 'Second year of secondary school', order: 8 },
    { name: 'Secondary 3', description: 'Third year of secondary school', order: 9 },
    { name: 'Secondary 4', description: 'Fourth year of secondary school', order: 10 },
  ];

  for (const grade of grades) {
    await prisma.grade.upsert({
      where: { name: grade.name },
      update: grade,
      create: grade
    });
  }

  console.log('Grades seeded successfully!');
}

async function main() {
  try {
    await seedGrades();
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
