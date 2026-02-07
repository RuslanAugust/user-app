import React, { useEffect, useState } from 'react';
import { userAPI } from '../../api';
import {
  Container,
  Title,
  UserTable,
  TableHeader,
  TableRow,
  TableCell,
  Avatar,
  Loading,
  Error,
} from './style';

interface User {
  _id: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  avatar?: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await userAPI.getAllUsers();
      setUsers(data);
      setError('');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Ошибка получения пользователей');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading>Получение пользователей...</Loading>;
  }

  return (
    <Container>
      <Title>Пользователи</Title>
      {error && <Error>{error}</Error>}
      <UserTable>
        <thead>
          <TableRow>
            <TableHeader>Аватар</TableHeader>
            <TableHeader>Логин</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Имя</TableHeader>
            <TableHeader>Возраст</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>
                <Avatar
                  src={user.avatar ? `http://localhost:3001${user.avatar}` : ''}
                />
              </TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {user.firstName || user.lastName
                  ? `${user.firstName || ''} ${user.lastName || ''}`.trim()
                  : 'Нет имени'}
              </TableCell>
              <TableCell>{user.age || 'Возраст неизвестен'}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </UserTable>
    </Container>
  );
};

export default UserList;
