import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async createClient(clientData: { name: string; email: string; callback: string }, methodIds: number[]) {
    // Verifica se todos os methodIds existem na tabela Method
    const methods = await this.prisma.method.findMany({
      where: { id: { in: methodIds } },
    });

    if (methods.length !== methodIds.length) {
      throw new NotFoundException('One or more methods not found');
    }

    return this.prisma.client.create({
      data: {
        name: clientData.name,
        email: clientData.email,
        callback: clientData.callback,
        methods: {
          create: methodIds.map(id => ({
            method: {
              connect: { id }
            }
          }))
        }
      }
    });
  }

  async updateClient(id: number, updateData: { name?: string; email?: string; callback?: string }) {
    return this.prisma.client.update({
      where: { id },
      data: updateData
    });
  }

  async findClientById(id: number) {
    return this.prisma.client.findUnique({
      where: { id },
      include: {
        methods: {
          include: {
            method: true
          }
        }
      }
    });
  }

  async findClientByName(name: string) {
    return this.prisma.client.findMany({
      where: { name },
      include: {
        methods: {
          include: {
            method: true
          }
        }
      }
    });
  }

  async findAllClients() {
    return this.prisma.client.findMany({
      include: {
        methods: {
          include: {
            method: true
          }
        }
      }
    });
  }
}
