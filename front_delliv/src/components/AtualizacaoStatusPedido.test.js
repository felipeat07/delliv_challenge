import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AtualizacaoStatusPedido from './Caminho/Para/Seu/Componente';

describe('AtualizacaoStatusPedido', () => {
  it('deve renderizar o componente corretamente', () => {
    const { getByText } = render(<AtualizacaoStatusPedido pedidoId={1} />);
    
    expect(getByText('Atualizar Status')).toBeInTheDocument();
  });

  it('deve abrir o modal ao clicar no botão "Atualizar Status"', () => {
    const { getByText, getByRole } = render(<AtualizacaoStatusPedido pedidoId={1} />);
    
    fireEvent.click(getByText('Atualizar Status'));

    expect(getByRole('dialog')).toBeInTheDocument();
  });

  it('deve atualizar o estado "novoStatus" ao selecionar um novo status', async () => {
    const { getByText, getByLabelText } = render(<AtualizacaoStatusPedido pedidoId={1} />);
    
    fireEvent.click(getByText('Atualizar Status'));

    const select = getByLabelText('Selecione o novo status:');
    fireEvent.change(select, { target: { value: 'Em andamento' } });

    expect(select.value).toBe('Em andamento');
  });

  it('deve chamar a função de atualização ao clicar em "OK"', async () => {
    const { getByText, getByLabelText } = render(<AtualizacaoStatusPedido pedidoId={1} />);
    
    fireEvent.click(getByText('Atualizar Status'));

    const select = getByLabelText('Selecione o novo status:');
    fireEvent.change(select, { target: { value: 'Em andamento' } });

    fireEvent.click(getByText('OK'));

  });
});
