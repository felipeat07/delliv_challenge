import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller('app')
export class AppController {
  @Get('protected')
  @UseGuards(JwtAuthGuard)
  getProtectedRoute() {
    return 'Rota protegida!';
  }
}
