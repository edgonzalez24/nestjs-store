// Data Transfers Objects

import { IsString, IsNumber, IsUrl, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly description: string;
  @IsString()
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
