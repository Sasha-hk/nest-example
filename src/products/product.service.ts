import { CreateProductDto } from './dto/create-product.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [];

  getAll() {
    return this.products;
  }

  getByID(id: number) {
    return this.products.find((p) => p?.id === id);
  }

  create(productDto: CreateProductDto) {
    return this.products.push({ ...productDto, id: new Date().toString });
  }
}
