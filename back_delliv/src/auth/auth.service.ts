// auth.service.ts

import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async generateToken(userId: string): Promise<string> {
    const payload = { sub: userId };
    return this.jwtService.sign(payload);
  }

  async validateToken(token: string): Promise<any> {
    try {
      const payload = this.jwtService.verify(token);
      this.logger.log(`Validating token with payload: ${JSON.stringify(payload)}`);

      const user = await this.userService.findById(payload.sub.toString());
      this.logger.log(`User found in database: ${JSON.stringify(user)}`);

      if (!user) {
        return null; // Usuário não encontrado no banco de dados
      }

      return user;
    } catch (error) {
      this.logger.error(`Error validating token: ${error.message}`);
      return null; // Token inválido ou expirado
    }
  }
}
