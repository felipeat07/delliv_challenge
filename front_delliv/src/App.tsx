import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PedidosPage from './pages/PedidosPage';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <ProtectedRoute path="/pedidos" element={<PedidosPage />} />
      </Routes>
    </Router>
  );
};

export default App;
