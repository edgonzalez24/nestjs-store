import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('/:category/products/:product')
  @HttpCode(HttpStatus.ACCEPTED)
  findOne(
    @Param('category') category: string,
    @Param('product') product: string,
  ): string {
    return `Product ${product} and category ${category}`;
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: any) {
    return {
      message: 'created',
      data: payload,
    };
  }

  @Put('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(@Param('id') id: string, @Body() payload: any) {
    return {
      message: 'Updated',
      id,
      payload,
    };
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  delete(@Param('id') id: string) {
    return {
      message: 'Deleted',
      id,
    };
  }
}
