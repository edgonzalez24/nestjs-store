import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

import { BrandsService } from 'src/services/brands/brands.service';
import { CreateBrandDto, UpdateBrandDto } from 'src/dtos/brands.dtos';

@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  findAll() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  get(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateBrandDto) {
    return this.brandsService.create(payload);
  }

  @Put(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBrandDto,
  ) {
    return this.brandsService.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.remove(id);
  }
}
