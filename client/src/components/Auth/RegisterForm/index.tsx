import React, {useEffect, useState} from 'react';
import { useUnit } from 'effector-react';
import { registerFx, $user } from '../../../store/auth';
import { Container, Form, Input, Button, Title, Error } from './style';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Loader';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    age: '',
  });
  const [error, setError] = useState('');
  const loading = useUnit(registerFx.pending);
  const user = useUnit($user);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await registerFx({
        ...formData,
        age: formData.age ? parseInt(formData.age) : undefined,
      });
    } catch (err: any) {
      setError(err.response?.data?.error || 'Ошибка решистрации');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {

  }, [user]);

  return (
    <Container>
      {loading && <Loader />}
      <Title>Регистрация</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="Логин"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="firstName"
          placeholder="Фамилия"
          value={formData.firstName}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="lastName"
          placeholder="Имя"
          value={formData.lastName}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="age"
          placeholder="Возраст"
          value={formData.age}
          onChange={handleChange}
        />
        {error && <Error>{error}</Error>}
        <Button type="submit" disabled={loading}>
          {loading ? 'Решистрация...' : 'Зарегистрироваться'}
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterForm;
