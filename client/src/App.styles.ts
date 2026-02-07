import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #f0f0f0;
`;

export const Nav = styled.nav`
  background: #333;
  padding: 5px;
  display: flex;
  gap: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    a {
        color: white;
        text-decoration: none;
        padding: 10px 20px;
        border-radius: 4px;
    }
`;

export const Main = styled.main`
  padding: 20px;
`;
