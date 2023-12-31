import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Pedido {
  id: number;
  cliente: string;
  endereco: string;
  status: string;
}

interface PedidoState extends Array<Pedido> {}

const pedidoSlice = createSlice({
  name: 'pedidos',
  initialState: [] as PedidoState,
  reducers: {
    setPedidos: (state, action: PayloadAction<Pedido[]>) => {
      return action.payload;
    },
    updateStatus: (state, action: PayloadAction<{ pedidoId: number; novoStatus: string }>) => {
      const { pedidoId, novoStatus } = action.payload;
      const pedido = state.find((p) => p.id === pedidoId);
      if (pedido) {
        pedido.status = novoStatus;
      }
    },
  },
});

export const { setPedidos, updateStatus } = pedidoSlice.actions;
export default pedidoSlice.reducer;
