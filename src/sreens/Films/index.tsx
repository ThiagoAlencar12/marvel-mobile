import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Button, SafeAreaView, Text } from "react-native";

import {
  Container,
  CardsContent,
  ContainerList,
  Filter,
  InputFilter,
  List,
  Content,
} from "./styles";

import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { useFetchHeroes } from "../../hooks/useFetchMarvel";
import { HeroesDTO } from "../../hooks/model";

export function Films() {
  const { data, error, loading, nextPage } = useFetchHeroes();

  const [heroeFilter, setHeroeFilter] = useState<string>("");

  if (error) {
    return <Text> Ocorreu um erro ao buscar os heroes </Text>;
  }

  const Heroe = ({ heroe }: { heroe: HeroesDTO }) => {
    return (
      <Card
        key={heroe.id}
        avatar={`${heroe.thumbnail?.path}.${heroe.thumbnail?.extension}`}
        title={heroe.name}
        id_film={heroe.id}
        description={heroe.description}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Container>
        <Filter>
          <InputFilter
            placeholderTextColor="#C53030"
            placeholder="Digite o nome do heroi..."
            value={heroeFilter}
            onChangeText={(text) => setHeroeFilter(text)}
          />
        </Filter>
        <Content>
          <CardsContent>
            <ContainerList>
              <List
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={(item) => item.id?.toString()}
                onEndReached={nextPage}
                onEndReachedThreshold={0.1}
                ListFooterComponent={
                  loading ? <ActivityIndicator size="large" /> : null
                }
                renderItem={({ item }) => <Heroe heroe={item} />}
              />
            </ContainerList>
          </CardsContent>
        </Content>
      </Container>
    </SafeAreaView>
  );
}
