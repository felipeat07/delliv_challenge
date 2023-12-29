// app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { AuthModule } from './auth/auth.module'; // Importe o módulo Auth

@Module({
  imports: [UserModule, PedidosModule, AuthModule], // Adicione o AuthModule aos imports
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
