import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

  @Get(':categorieId/products/:productId')
  getCategory(
    @Param('id') categorieId: string,
    @Param('productId') productId: string,
  ) {
    return { categorieId, productId };
  }
}
