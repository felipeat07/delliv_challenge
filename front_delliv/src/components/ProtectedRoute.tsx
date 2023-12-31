import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';

interface ProtectedRouteProps {
  path: string;
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ path, element }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return (
      <Routes>
        <Route path={path} element={element} />
      </Routes>
    );
  } else {
    // Se não estiver autenticado, redirecione para a página de login
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
