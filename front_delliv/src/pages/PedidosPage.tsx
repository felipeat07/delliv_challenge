// PedidosPage.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Space } from 'antd';
import api from '../api'; // Substitua pelo caminho correto

import { setPedidos, Pedido } from '../redux/pedidoSlice';
import AtualizacaoStatusPedido from '../components/AtualizacaoStatusPedido';

const PedidosPage: React.FC = () => {
  const dispatch = useDispatch();
  const pedidos = useSelector((state: { pedidos: Pedido[] }) => state.pedidos);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await api.get('/orders');
        const pedidosObtidos: Pedido[] = response.data;
        dispatch(setPedidos(pedidosObtidos));
      } catch (error) {
        console.error('Erro ao obter pedidos:', error);
      }
    };

    fetchPedidos();
  }, [dispatch]);

  const columns = [
    { title: 'Cliente', dataIndex: 'nomeCliente', key: 'nomeCliente' },
    { title: 'Endereço', dataIndex: 'enderecoEntrega', key: 'enderecoEntrega' },
    { title: 'Status', dataIndex: 'statusPedido', key: 'statusPedido' },
    {
      title: 'Ações',
      key: 'acoes',
      render: (pedido: Pedido) => (
        <Space size="middle">
          <AtualizacaoStatusPedido pedidoId={pedido.id} />
        </Space>
      ),
    },
  ];

  return (
    <div style={{margin: '40px'}}>
      <h1>Pedidos</h1>
      <Table dataSource={pedidos} columns={columns} />
    </div>
  );
};

export default PedidosPage;
