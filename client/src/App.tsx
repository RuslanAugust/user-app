import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import {useUnit} from 'effector-react';
import { $token } from './store/auth';
import RegisterForm from './components/Auth/RegisterForm';
import LoginForm from './components/Auth/LoginForm';
import {Container, Nav, Main} from './App.styles';
import Profile from './components/Profile';
import UserList from './components/Users';

const App: React.FC = () => {
  const token = useUnit($token);
  const isAuthenticated = !!token;

  return (
    <Router>
      <Container>
        <Nav>
          {!isAuthenticated ? (
            <>
              <Link to="/register">Регистрация</Link>
              <Link to="/login">Вход</Link>
            </>
          ) : (
            <>
              <Link to="/profile">Профиль</Link>
              <Link to="/users">Пользователи</Link>
            </>
          )}
        </Nav>

        <Main>
          <Routes>
            <Route path="/" element={
              isAuthenticated ?
                <Navigate to="/profile" replace /> :
                <Navigate to="/login" replace />
            } />
            <Route path="/register" element={
              !isAuthenticated ?
                <RegisterForm /> :
                <Navigate to="/profile" replace />
            } />
            <Route path="/login" element={
              !isAuthenticated ?
                <LoginForm /> :
                <Navigate to="/profile" replace />
            } />
            <Route path="/profile" element={
              isAuthenticated ?
                <Profile /> :
                <Navigate to="/login" replace />
            } />
            <Route path="/users" element={
              isAuthenticated ?
                <UserList /> :
                <Navigate to="/login" replace />
            } />
          </Routes>
        </Main>
      </Container>
    </Router>
  );
};

export default App;
