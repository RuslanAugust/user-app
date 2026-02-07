import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
`;

export const UserTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.th`
  background: #4682b4;
  color: white;
  padding: 15px;
  text-align: left;
  font-weight: bold;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: #e8e8e8;
  }
  
  &:hover {
    background: #ddd;
  }
`;

export const TableCell = styled.td`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  color: #333;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
`;

export const Loading = styled.div`
  text-align: center;
  padding: 50px;
  color: #666;
  font-size: 18px;
`;

export const Error = styled.div`
  color: #d32f2f;
  background: #ffebee;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 14px;
  text-align: center;
`;
