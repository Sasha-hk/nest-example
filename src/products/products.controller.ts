import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import {
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Body,
  Patch,
  HttpCode,
  HttpStatus,
  Header,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductService) {}

  @Get()
  getAll(): string {
    this.productsService.getAll();
    return 'getALL';
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    this.productsService.getByID(Number(id));
    return 'id: ' + id;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-control', 'none')
  create(@Body() createProductDto: CreateProductDto): string {
    this.productsService.create(createProductDto);
    return 'title: ' + createProductDto.title;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return 'remove ' + id;
  }

  @Patch(':id')
  update(
    @Body() updateProductDto: CreateProductDto,
    @Param('id') id: string,
  ): string {
    return 'title: ' + updateProductDto.title + id;
  }
}
