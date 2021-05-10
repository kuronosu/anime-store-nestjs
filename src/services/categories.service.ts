import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/categories.dto';
import Category from 'src/entities/category.entity';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Category[] = [
    {
      id: this.counterId,
      name: 'Mangas',
    },
  ];

  findAll = () => this.categories;

  findOne = (id: number) => this.categories.find((it) => it.id === id);

  create(payload: CreateCategoryDto) {
    const category = {
      id: ++this.counterId,
      ...payload,
    };
    this.categories.push(category);
    return category;
  }

  update(id: number, payload: UpdateCategoryDto) {
    const category = this.findOne(id);
    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    const index = this.categories.findIndex((item) => item.id === id);
    this.categories[index] = {
      ...category,
      ...payload,
    };
    return this.categories[index];
  }

  remove(id: number) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    this.categories.splice(index, 1);
    return { success: true };
  }
}
