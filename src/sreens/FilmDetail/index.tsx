import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, Text } from "react-native";
import { useQuery } from "react-query";
import api from "../../services/api";

import { Container, List, ContainerList, Content } from "./styles";

import { Title } from "../../components/Card/styles";
import { CardHeroe } from "../../components/CardHeroeDetail";
import { theme } from "../../global/styles/themes";

interface ResponseHeroesApi {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface ResponseComics {
  name: string;
  resourceURI: string;
}

export function FilmDetail() {
  const route = useRoute();

  const [events, setEvents] = useState<ResponseComics[]>([]);

  const { id, name } = route.params as {
    id: string;
    name: string;
  };

  const { isLoading } = useQuery(`/characters/${id}/events`, async () => {
    const result = await api.get(`/characters/${id}/events`);

    setEvents(result.data.data.results[0]?.comics.items);
    return;
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Title>Herói {name}</Title>
        <Content>
          <ContainerList>
            {!isLoading && events.length > 1 ? (
              <List
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
                data={events}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                  <CardHeroe key={item.id} title={item.name} />
                )}
              />
            ) : (
              <ActivityIndicator size="large" color={theme.colors.heading} />
            )}
          </ContainerList>
        </Content>
      </Container>
    </SafeAreaView>
  );
}
