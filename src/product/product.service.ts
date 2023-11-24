import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {

  constructor(private prisma: PrismaService) {}
  
  create(createProductDto: Product) {
    return this.prisma.product.create({data: createProductDto})
  }

  findAll() {
    return this.prisma.product.findMany();

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
