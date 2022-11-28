import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, Text, FlatList } from "react-native";
import { useQuery } from "react-query";

import {
  Container,
  ContainerList,
  Filter,
  InputFilter,
  List,
  Content,
} from "./styles";

import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { HeroesDTO } from "../../models/model";
import api from "../../services/api";
import { theme } from "../../global/styles/themes";

export function Films() {
  const [heroeFilter, setHeroeFilter] = useState<string>("");
  const [heroes, setHeroes] = useState<HeroesDTO[]>([]);

  const {
    data: heroeResult,
    isLoading,
    isError,
  } = useQuery("/characters", async () => {
    const result = await api.get("/characters", {
      params: {
        limit: 20,
      },
    });
    setHeroes(result.data.data.results);
    return result.data.data.results;
  });

  useEffect(() => {
    async function handleFilter() {
      if (heroeFilter === "") {
        setHeroes(heroeResult);
      } else {
        setHeroes(
          heroeResult.filter(
            (item: HeroesDTO) =>
              item.name.toLowerCase().indexOf(heroeFilter.toLowerCase()) > -1
          )
        );
      }
    }
    handleFilter();
  }, [heroeFilter]);

  if (isError) {
    return <Text>Erro ao carregar os dados</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Container>
        <Filter>
          <InputFilter
            value={heroeFilter}
            onChangeText={(text) => setHeroeFilter(text)}
          />
        </Filter>
        <Content>
          <ContainerList>
            {isLoading ? (
              <ActivityIndicator size="large" color={theme.colors.heading} />
            ) : (
              <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={heroes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <Card
                    key={item.id}
                    avatar={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
                    title={item.name}
                    id_film={item.id}
                    description={item.description}
                  />
                )}
              />
            )}
          </ContainerList>
        </Content>
      </Container>
    </SafeAreaView>
  );
}
