import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/service';
import { Category } from '@prisma/client';

@Injectable()
export class CategoryService {

  constructor(private prisma: PrismaService) {}

  create(createCategoryDto: Category) {
    return this.prisma.category.create({data: createCategoryDto})
  }

  findAll() {
    return this.prisma.category.findMany();
  }

  findOne(id: number) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  update(id: number, updateCategoryDto: Category) {
    return this.prisma.category.update({ where: { id }, data: updateCategoryDto });
  }

  remove(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }
}
