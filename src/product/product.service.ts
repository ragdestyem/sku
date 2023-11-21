import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {

  constructor(private prisma: PrismaService) {}
  
  create(createProductDto: Product) {
    return this.prisma.product.create({data: createProductDto})
  }

  findAll(page:number = 1, pageSize:number = 10) {
    const skip:number = (page - 1) * pageSize;
    const take:number = pageSize;
    return this.prisma.product.findMany({ skip, take });
  }
  

  findOne(sku: string) {
    return this.prisma.product.findUnique({ where: { sku } });
  }

  update(sku: string, updateProductDto: Product) {
    return this.prisma.product.update({ where: { sku }, data: updateProductDto });
  }

  remove(sku: string) {
    return this.prisma.product.delete({ where: { sku } });
  }
}
