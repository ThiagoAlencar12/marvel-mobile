import React from "react";
import Icon from "react-native-vector-icons/Feather";

import { Container, HeaderContent, Title, TitleName } from "./styles";

export function Header() {
  return (
    <Container>
      <HeaderContent>
        <Icon name="film" size={23} color="#FFF" style={{ margin: 10 }} />
        <Title>
          Marvel
        </Title>
        <TitleName>
          Stream
        </TitleName>
      </HeaderContent>
    </Container>
  );
}
