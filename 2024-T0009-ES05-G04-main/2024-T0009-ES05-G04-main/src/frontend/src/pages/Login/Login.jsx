import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';
import logoImage from '../../assets/logo-gf.png';
import { LoginContainer, StyledImage, StyledForm } from './styles';

export const Login = () => {
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState('');

  const { login: contextLogin } = useAuth();

  const onFinish = async (data) => {
    try {
      const response = await login(data.username, data.password);
      const { userId, roleId } = response;
      contextLogin(userId, roleId);
      setLoginError('');
      if (roleId === 1) {
        return navigate('/turmas');
      }
    } catch (error) {
      setLoginError('Falha no login. Verifique suas credenciais.');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <LoginContainer>
      <StyledImage src={logoImage} alt="Logo" />
      <StyledForm onFinish={onFinish} onFinishFailed={onFinishFailed} layout="vertical">
        <Form.Item
          label='Usuário:'
          name="username"
          rules={[
            {
              validator:(_, value) =>{
                if(!value){
                  return Promise.reject('Insira seu nome de usuário.');
                }
                return Promise.resolve();
              }

            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Senha:"
          name="password"
          rules={[
            {
              validator:(_, value) =>{
                if(!value){
                  return Promise.reject('Insira sua senha.');
                }
                return Promise.resolve();
              }
              
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {loginError && (
          <p style={{ color: 'red', textAlign: 'center' }}>{loginError}</p>
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Fazer login
          </Button>
        </Form.Item>
      </StyledForm>
    </LoginContainer>
  );
};
