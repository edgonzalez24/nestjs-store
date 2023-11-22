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
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { CreateCustomerDto, UpdateCustomerDto } from 'src/dtos/customers.dtos';
import { CustomersService } from 'src/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private CustomerService: CustomersService) {}

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateCustomerDto) {
    return this.CustomerService.create(payload);
  }

  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  find() {
    return this.CustomerService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.CustomerService.findOne(id);
  }

  @Put('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCustomerDto,
  ) {
    return this.CustomerService.update(id, payload);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.CustomerService.remove(id);
  }
}
