import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { MethodService } from './method.service';

@Controller('method')
export class MethodController {
  constructor(private readonly methodService: MethodService) {}

  @Post()
  async createMethod(@Body('name') name: string) {
    return this.methodService.createMethod(name);
  }

  @Get()
  async findAllMethods() {
    return this.methodService.findAllMethods();
  }

  @Get(':id')
  async findMethodById(@Param('id') id: string) { // id como string para corresponder ao tipo de parâmetro URL
    return this.methodService.findMethodById(Number(id)); // converte para número
  }
}
