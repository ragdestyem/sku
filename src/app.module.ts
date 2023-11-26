import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [ProductModule, CategoryModule,ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'src/public'),
    serveRoot:"/static" // Caminho para o diretório dos arquivos estáticos/ Rota base para servir os arquivos estáticos (opcional)
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
