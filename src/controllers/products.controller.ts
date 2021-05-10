import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAll(@Query() queryParams) {
    // const { limit = 100, offset = 0, brand } = queryParams;
    return this.productsService.findAll();
  }

  @Get('filter')
  getFilter() {
    return { message: 'I am a filter' };
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return { id, message: 'Delete action' };
  }
}
