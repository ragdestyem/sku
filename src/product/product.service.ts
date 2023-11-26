import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/service';
import { xlsxParaJson } from './services/jsonToExcel';
import { Product } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';
import { validarTipo } from './services/verificarTipo';

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

  async uploadEmMassa(data:Buffer) {
    const dados = await xlsxParaJson(data)
    const arrayVazio = []

    dados.forEach(async (produto: CreateProductDto) => {
      const verificar = validarTipo(produto)
      if(verificar.length === 0){
        console.log("Produto Correto")
      } else{
        arrayVazio.push({erro:verificar.join(', '), item: produto})
      }

    })
    if(arrayVazio.length > 0){
      return arrayVazio
    }

    if(arrayVazio.length === 0){
      await this.prisma.product.createMany({data: dados})
      return arrayVazio
    }
  }
}
