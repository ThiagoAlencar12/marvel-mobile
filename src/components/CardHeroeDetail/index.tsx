import React from "react";

import { Container, Title, Content } from "./styles";
interface CardProps {
  title: string;
}

export function CardHeroe({ title }: CardProps) {
  return (
    <Container>
      <Content>
        <Title>Heroi: {title}</Title>
      </Content>
    </Container>
  );
}
