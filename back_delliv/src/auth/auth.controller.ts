import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Request() req: any) {
    const userId = '123'; // Substitua pelo ID do usuário autenticado
    const token = await this.authService.generateToken(userId);
    return { access_token: token };
  }

  @UseGuards(JwtAuthGuard)
  @Post('protected')
  getProtectedRoute() {
    return 'Rota protegida!';
  }
}
