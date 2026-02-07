import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Overlay = styled.div<{ $overlayColor?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ $overlayColor }) => $overlayColor || 'rgba(0, 0, 0, 0.5)'};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(2px);
`;

export const Container = styled.div`
  background: #fff;
  padding: 30px 40px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  
  p {
    margin: 0;
    color: #333;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Spinner = styled.div<{ $spinnerColor?: string }>`
  width: 40px;
  height: 40px;
  border: 4px solid ${({ $spinnerColor }) => $spinnerColor || '#f3f3f3'};
  border-top: 4px solid ${({ $spinnerColor }) => $spinnerColor || '#4682b4'};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
