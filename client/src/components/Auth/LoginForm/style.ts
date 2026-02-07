import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #888;
  }
`;

export const Button = styled.button`
  padding: 12px;
  background: #4682b4;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background: #5b7c9d;
  }
  
  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;

export const Error = styled.div`
  color: #d32f2f;
  background: #ffebee;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
`;
