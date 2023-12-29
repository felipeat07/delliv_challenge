import { Module } from '@nestjs/common';
import { OrdersController } from './pedidos.controller';
import { PedidosService } from './pedidos.service';

@Module({
  controllers: [OrdersController],
  providers: [PedidosService],
})
export class PedidosModule {}
