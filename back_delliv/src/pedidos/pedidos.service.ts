import { Injectable, NotFoundException } from '@nestjs/common';
import { prisma } from '../../prisma/prisma.service';

@Injectable()
export class PedidosService {
  async criarPedido(nomeCliente: string, enderecoEntrega: string, statusPedido: string) {
    return prisma.pedido.create({
      data: {
        nomeCliente,
        enderecoEntrega,
        statusPedido,
      },
    });
  }

  async obterPedidos() {
    return prisma.pedido.findMany();
  }

  async atualizarStatusPedido(id: number, novoStatus: string) {
    // Verificar se o pedido existe
    const pedido = await prisma.pedido.findUnique({ where: { id } });

    if (!pedido) {
      throw new NotFoundException('Pedido não encontrado');
    }

    // Atualizar o status do pedido
    const pedidoAtualizado = await prisma.pedido.update({
      where: { id },
      data: { statusPedido: novoStatus },
    });

    return pedidoAtualizado;
  }
}
