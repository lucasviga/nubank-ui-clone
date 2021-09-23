import React from 'react';
import {Container, ButtonText} from './styles';

interface ButtonProps {
  children: React.ReactNode;
}

export function Button({children}: ButtonProps) {
  return (
    <Container>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
}
