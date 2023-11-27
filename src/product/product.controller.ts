import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile, HttpException, HttpStatus } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: 'criar sku' })
  @ApiResponse({ 
    status: 200,
    description: 'Requisição bem-sucedida',
    type:CreateProductDto
  })
  create(@Body() createProductDto: Product) {
    return this.productService.create(createProductDto);
  }

  @ApiResponse({ 
    status: 200,
    description: 'Requisição bem-sucedida',
    type:[CreateProductDto]
  })
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @ApiResponse({ 
    status: 200,
    description: 'Requisição bem-sucedida',
    type:CreateProductDto
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: Product) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    const buffer = file.buffer; // Acessando o buffer do arquivo
    const dados = await this.productService.uploadEmMassa(buffer);

    if(dados.length === 0){
      return 'Arquivo correto'
    } else{
      throw new HttpException(dados, HttpStatus.BAD_REQUEST);
    }

    // Faça o que desejar com o buffer aqui

  }
}
