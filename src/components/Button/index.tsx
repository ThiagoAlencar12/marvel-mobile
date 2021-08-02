import React from 'react';
import { Container, Title } from "./styles";

type ButtonProps = {
  title: string;
  color: string;
  handle?: () => void;
}

export function Button({ title, color, handle }: ButtonProps) {
  return (
    <Container onPress={handle} style={{ backgroundColor: color }}>
      <Title>{title}</Title>
    </Container>
  );
}