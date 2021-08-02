import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Title, AvatarHeroe, Description, Content } from "./styles";

interface CardProps {
  title: string;
  avatar: string;
  description?: string;
  id_film?: string;
}

export function Card({ title, avatar, id_film, description }: CardProps) {
  const navigation = useNavigation();

  return (
    <Container
      activeOpacity={0.7}
      onPress={() => navigation.navigate("FilmDetail", { id: id_film })}
    >
      <AvatarHeroe source={{ uri: avatar }}></AvatarHeroe>
      <Content>
        <Title>Heroi: {title}</Title>
        <Description>Descrição: {description ? description : "Sem descrição"}</Description>
      </Content>
    </Container>
  );
}
