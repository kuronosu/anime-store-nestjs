import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(@Query() queryParams) {
    const { limit = 100, offset = 0, brand } = queryParams;
    return { limit, offset, brand };
  }

  @Get('filter')
  getFilter() {
    return { message: 'I am a filter' };
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return { product: id };
  }

  @Post()
  create(@Body() payload: any) {
    return { message: 'Create action', payload };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return { id, message: 'Update action', payload };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return { id, message: 'Delete action' };
  }
}
