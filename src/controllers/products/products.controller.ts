import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('/')
  @HttpCode(HttpStatus.ACCEPTED)
  find(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit}, offset=> ${offset} and brand=> ${brand}`;
  }

  @Get('/:id')
  findOne(@Param('id') id: string): string {
    return `product ${id}`;
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
