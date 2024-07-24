import { Controller, Post, Get, Put, Param, Body } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async createClient(@Body() clientData: { name: string; email: string; callback: string, methodIds: number[] }) {
    return this.clientService.createClient(clientData, clientData.methodIds);
  }

  @Put(':id')
  async updateClient(@Param('id') id: number, @Body() updateData: { name?: string; email?: string; callback?: string }) {
    return this.clientService.updateClient(id, updateData);
  }

  @Get(':id')
  async getClientById(@Param('id') id: number) {
    return this.clientService.findClientById(id);
  }

  @Get('search/:name')
  async getClientByName(@Param('name') name: string) {
    return this.clientService.findClientByName(name);
  }

  @Get()
  async getAllClients() {
    return this.clientService.findAllClients();
  }
}
