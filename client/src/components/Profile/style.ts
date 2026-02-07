import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
`;

export const ProfileCard = styled.div`
  background: #f5f5f5;
  border-radius: 8px;
  padding: 30px;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ddd;
`;

export const AvatarUpload = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.span`
  font-weight: bold;
  color: #4682b4;
  min-width: 100px;
`;

export const Value = styled.span`
  color: #333;
  flex: 1;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  flex: 1;
  
  &:focus {
    outline: none;
    border-color: #888;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background: #4682b4;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background: #5b7c9d;
  }
  
  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const Error = styled.div`
  color: #d32f2f;
  background: #ffebee;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  margin-top: 20px;
`;
