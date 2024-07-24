import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateUser(user: any): Promise<any> {
    // Neste exemplo simples, retornamos o próprio usuário
    return user;
  }
}
