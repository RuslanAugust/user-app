import React, {useEffect, useState} from 'react';
import { useUnit } from 'effector-react';
import { loginFx, $user } from '../../../store/auth';
import { Container, Form, Input, Button, Title, Error } from './style';
import {useNavigate} from 'react-router-dom';
import Loader from '../../Loader';

const LoginForm: React.FC = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const loading = useUnit(loginFx.pending);
  const user = useUnit($user);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await loginFx(credentials);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Ошибка входа');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {

  }, [user]);

  return (
    <Container>
      {loading && <Loader />}
      <Title>Аунтификация пользователя</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        {error && <Error>{error}</Error>}
        <Button type="submit" disabled={loading}>
          {loading ? 'Авторизация...' : 'Вход'}
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
