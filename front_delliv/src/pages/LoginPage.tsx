import React, { useState } from 'react';
import { Form, Input, Button, Typography, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure } from '../redux/authSlice';
import api from '../api';
import { RootState } from '../redux/rootReducer';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const LoginPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);

  const navigate = useNavigate();

  const handleLogin = async (values: any) => {
    setLoading(true);
    dispatch(loginRequest());

    try {
      const response = await api.post('/auth/login', {
        email: values.email,
        password: values.password,
      });

      console.log('Response Data:', response.data);

      const { access_token } = response.data;
      
      dispatch(loginSuccess(access_token));

      // Verifique se o login foi bem-sucedido antes de navegar
      if (access_token) {
        // Após o login bem-sucedido, redirecione para a rota /pedidos
        navigate('/pedidos');
      } else {
        // Se o token de acesso não estiver presente, trate como erro de autenticação
        const errorMessage = 'Erro ao autenticar. Verifique suas credenciais.';
        dispatch(loginFailure(errorMessage));
      }
    } catch (err) {
      const errorMessage = 'Erro ao autenticar. Verifique suas credenciais.';
      dispatch(loginFailure(errorMessage));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Title level={2}>Delliv Login</Title>
      {error && <Alert message={error} type="error" showIcon />}
      <Form
        form={form}
        onFinish={handleLogin}
        layout="vertical"
        className="login-form"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Por favor, insira seu email!',
            },
          ]}
        >
          <Input style={{ width: '200px' }} type="email" />
        </Form.Item>

        <Form.Item
          label="Senha"
          name="password"
          rules={[
            {
              required: true,
              message: 'Por favor, insira sua senha!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;

