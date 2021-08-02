import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";

import { Header } from "../../components/Header";
import api from "../../services/api";

import { Container, List, ContainerList, Content } from "./styles";

import { Title } from "../../components/Card/styles";
import { CardHeroe } from "../../components/CardHeroeDetail";

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

  const [heroeById, setHeroeById] = useState<ResponseHeroesApi[]>([]);
  const [events, setEvents] = useState<ResponseComics[]>([]);

  //@ts-ignore
  const { id } = route.params;

  useEffect(() => {
    async function handleGetHeroeById() {
      const response = await api.get(`/characters/${id}`);

      setHeroeById(response.data.data.results);
    }
    handleGetHeroeById();
  }, [id]);

  useEffect(() => {
    async function handleGetHeroeById() {
      const response = await api.get(`/characters/${id}/events`);

      setEvents(response.data.data.results[0]?.comics.items);
    }
    handleGetHeroeById();
  }, [id]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Container>
        <Title style={{ color: "#495BCC" }}>Heroe: {heroeById[0]?.name}</Title>
        <Title style={{ color: "#495BCC" }}>
          Descrição:{" "}
          {heroeById[0]?.description
            ? heroeById[0]?.description
            : "Sem descrição"}
        </Title>
        <Content>
          <ContainerList>
            {events ? (
              <List
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              numColumns={2}
              data={events}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <CardHeroe
                  key={item.id}
                  title={item.name}
                />
              )}
            />
            ): (
              <Text
                style={{ fontSize: 20, color: '#495BCC' }}
              > Sem Eventos </Text>
            )}
          </ContainerList>
        </Content>
      </Container>
    </SafeAreaView>
  );
}
