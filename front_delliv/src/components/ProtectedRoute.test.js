import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProtectedRoute from './ProtectedRoute';

// Mock de um componente que representa a página autenticada
const AuthenticatedPage = () => <div data-testid="authenticated-page">Autenticado</div>;

// Mock de uma função que verifica se o usuário está autenticado
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('ProtectedRoute', () => {
  const mockStore = configureStore();

  it('deve renderizar o componente autenticado quando o usuário está autenticado', () => {
    // Define o estado inicial do Redux com autenticação verdadeira
    const store = mockStore({
      auth: { isAuthenticated: true },
    });

    // Renderiza o componente ProtectedRoute dentro do MemoryRouter
    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/protected']}>
          <Routes>
            <ProtectedRoute path="/protected" element={<AuthenticatedPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    // Verifica se o componente autenticado foi renderizado
    expect(getByTestId('authenticated-page')).toBeInTheDocument();
  });

  it('deve redirecionar para a página de login quando o usuário não está autenticado', () => {
    // Define o estado inicial do Redux com autenticação falsa
    const store = mockStore({
      auth: { isAuthenticated: false },
    });

    // Renderiza o componente ProtectedRoute dentro do MemoryRouter
    const { queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/protected']}>
          <Routes>
            <ProtectedRoute path="/protected" element={<AuthenticatedPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    // Verifica se o componente autenticado não foi renderizado
    expect(queryByTestId('authenticated-page')).toBeNull();
    // Verifica se foi redirecionado para a página de login ("/")
    expect(window.location.pathname).toBe('/');
  });
});
