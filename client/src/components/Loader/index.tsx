import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Spinner, Overlay } from './style';

interface LoaderProps {
  text?: string;
  overlayColor?: string;
  spinnerColor?: string;
}

const Loader: React.FC<LoaderProps> = ({
                                         text = 'Загрузка...',
                                         overlayColor,
                                         spinnerColor
                                       }) => {

  return ReactDOM.createPortal(
    <Overlay $overlayColor={overlayColor}>
      <Container>
        <Spinner $spinnerColor={spinnerColor} />
        {text && <p>{text}</p>}
      </Container>
    </Overlay>,
    document.body
  );
};

export default Loader;
