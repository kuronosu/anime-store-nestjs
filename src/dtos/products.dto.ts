import { PartialType } from '@nestjs/mapped-types';
import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateProductDto {
  @IsString() @IsNotEmpty() readonly name: string;
  @IsString() @IsNotEmpty() readonly description: string;
  @IsInt() @IsNotEmpty() @IsPositive() readonly price: number;
  @IsInt() @IsNotEmpty() @IsPositive() readonly stock: number;
  @IsUrl() @IsNotEmpty() readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
