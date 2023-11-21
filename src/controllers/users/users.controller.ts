import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: any) {
    return {
      message: 'created',
      data: payload,
    };
  }

  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  find(): string {
    return 'all users';
  }

  findOne() {}

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