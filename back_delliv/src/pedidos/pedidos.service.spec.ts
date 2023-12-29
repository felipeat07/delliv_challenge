import { Test, TestingModule } from '@nestjs/testing';
import { PedidosService } from './pedidos.service';

describe('PedidosService', () => {
  let service: PedidosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedidosService],
    }).compile();

    service = module.get<PedidosService>(PedidosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an order', async () => {
    // Aguarde a resolução da Promise retornada por criarPedido
    const order = await service.criarPedido('John Doe', '123 Main St', 'Pending');
    expect(order).toBeDefined();
    expect(order.nomeCliente).toBe('John Doe');
    expect(order.statusPedido).toBe('Pending');
  });

  it('should return all orders', async () => {
    const orders = await service.obterPedidos();
    expect(orders).toBeDefined();
  });

  it('should update order status', async () => {
    const orderId = 1;
    const newStatus = 'Completed';
    // Aguarde a resolução da Promise retornada por atualizarStatusPedido
    const updatedOrder = await service.atualizarStatusPedido(orderId, newStatus);
    expect(updatedOrder).toBeDefined();
    expect(updatedOrder.statusPedido).toBe(newStatus);
  });
});
