import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProductModule, CategoryModule,ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'src/public'),
    serveRoot:"/static" // Caminho para o diretório dos arquivos estáticos/ Rota base para servir os arquivos estáticos (opcional)
  }), UserModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
