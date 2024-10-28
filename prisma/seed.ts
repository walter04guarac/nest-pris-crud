import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();

async function broo() {
    const movie1=await prisma.movies.create({
        data:{
            name:'dead pool 1',
            description:'bloody with a touch of dark humor',
            gender:'R rating',
            aLiked:true
        }
    });
    const movie2 = await prisma.movies.create({
        data:{
            name:'piraña 3d',
            description:'piranas mutantes asesinas',
            gender:'R rating - horror',
            aLiked:true
        }
    })
  console.log({movie1,movie2});
}

broo()
  .catch((e: any)=>{
    console.error(e);
    process.exit(1);
  })
  .finally(async()=>{

    await prisma.$disconnect();
  });

