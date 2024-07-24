import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class MethodService {
  constructor(private prisma: PrismaService) {}

  async createMethod(name: string) {
    return this.prisma.method.create({
      data: { name },
    });
  }

  async findAllMethods() {
    return this.prisma.method.findMany();
  }

  async findMethodById(id: number) {
    return this.prisma.method.findUnique({
      where: { id },
    });
  }
}
