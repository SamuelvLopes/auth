import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async createClient(clientData: { name: string; email: string; callback: string }, methodIds: number[]) {
    return this.prisma.client.create({
      data: {
        name: clientData.name,      // Assegura que o campo 'name' está presente
        email: clientData.email,    // Assegura que o campo 'email' está presente
        callback: clientData.callback, // Assegura que o campo 'callback' está presente
        methods: {
          create: methodIds.map(id => ({
            method: {
              connect: { id: id }
            }
          }))
        }
      }
    });
  }
}
