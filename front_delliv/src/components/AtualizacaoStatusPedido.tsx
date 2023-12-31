import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, Select } from 'antd';
import { updateStatus } from '../redux/pedidoSlice';
import api from '../api';

interface AtualizacaoStatusPedidoProps {
  pedidoId: number;
}

const { Option } = Select;

const AtualizacaoStatusPedido: React.FC<AtualizacaoStatusPedidoProps> = ({ pedidoId }) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [novoStatus, setNovoStatus] = useState('');

  const showModal = () => {
    setModalVisible(true);
  };

  const handleOk = async () => {
    try {
      await api.put(`/orders/${pedidoId}/status`, { novoStatus });
      
      dispatch(updateStatus({ pedidoId, novoStatus }));

      
      setModalVisible(false);
    } catch (error) {
      console.error('Erro ao atualizar status do pedido:', error);
    }
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Atualizar Status
      </Button>
      <Modal
        title="Atualizar Status do Pedido"
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Selecione o novo status:</p>
        <Select style={{ width: '100%' }} onChange={(value) => setNovoStatus(value)}>
          <Option value="Em andamento">Em andamento</Option>
          <Option value="Pendente">Pendente</Option>
        </Select>
      </Modal>
    </div>
  );
};

export default AtualizacaoStatusPedido;
