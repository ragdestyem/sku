import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/service';
import { Sku } from '@prisma/client';

@Injectable()
export class ProductService {

  constructor(private prisma: PrismaService) {}
  
  create(createProductDto: Sku) {
    return this.prisma.sku.create({data: createProductDto})
  }

  findAll() {
    return this.prisma.sku.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
