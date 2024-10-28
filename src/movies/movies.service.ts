import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MoviesService {
  constructor(private Prisma:PrismaService){}
  create(createMovieDto: CreateMovieDto) {
    return this.Prisma.movies.create({
      data: createMovieDto,
    })
  }

  findAllLiked() {
    return this.Prisma.movies.findMany({
      where: {aLiked: true },
    })
  }

  findAllNoLiked() {
    return this.Prisma.movies.findMany({
      where: {aLiked: false },
    })
  }

  findOne(id: number) {
    return this.Prisma.movies.findUnique({
      where :{id},
    })
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return this.Prisma.movies.update({
      where:{id},
      data: updateMovieDto,
    })
  }

  remove(id: number) {
    return this.Prisma.movies.delete({
      where:{id},
    });
  }
}
