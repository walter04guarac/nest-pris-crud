import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedMovies() {
  await prisma.movies.deleteMany({});
  const movie1 = await prisma.movies.create({
    data: {
      name: 'dead pool 1',
      description: 'bloody with a touch of dark humor',
      gender: 'R rating',
      aLiked: true,
    }
  });

  const movie2 = await prisma.movies.create({
    data: {
      name: 'piraña 3d',
      description: 'piranas mutantes asesinas',
      gender: 'R rating - horror',
      aLiked: false,
    }
  });

  const movie3 = await prisma.movies.create({
    data: {
      name: 'pirat of caribean',
      description: 'El ejercito britanico busca acabar con el linaje pirata para siempre',
      gender: 'R rating - aventura',
      aLiked: true,
    }
  });

  console.log({ movie1, movie2, movie3 });
}

seedMovies()
  .catch((e: any) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
