import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Title, AvatarHeroe, Content } from "./styles";

interface CardProps {
  title: string;
}

export function CardHeroe({ title }: CardProps) {
  return (
    <Container activeOpacity={0.7}>
      <Content>
        <Title>Heroi: {title}</Title>
      </Content>
    </Container>
  );
}
