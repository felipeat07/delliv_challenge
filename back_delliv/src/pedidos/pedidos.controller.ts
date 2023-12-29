import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { PedidosService } from './pedidos.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: PedidosService) {}

  @Get()
  getAllOrders() {
    return this.ordersService.obterPedidos();
  }

  @Post()
  createOrder(@Body() orderData: { nomeCliente: string; enderecoEntrega: string; statusPedido: string }) {
    const { nomeCliente, enderecoEntrega, statusPedido } = orderData;
    return this.ordersService.criarPedido(nomeCliente, enderecoEntrega, statusPedido);
  }

  @Put(':id/status')
  updateOrderStatus(@Param('id') orderId: string, @Body('status') newStatus: string) {
    return this.ordersService.atualizarStatusPedido(+orderId, newStatus); // Converta o 'orderId' para número aqui
  }
}
