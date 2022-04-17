import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductService } from './product.service';

@Module({
  providers: [ProductService],
  controllers: [ProductsController],
})
export class ProductsModule {}
