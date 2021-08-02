import React, { useCallback, useEffect, useState } from "react";
import { Button, SafeAreaView } from "react-native";

import {
  Container,
  CardsContent,
  ContainerList,
  CardGroup,
  Filter,
  InputFilter,
  List,
  Content,
} from "./styles";
import api from "../../services/api";

import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

interface ResponseHeroesApi {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export function Films() {
  const [heroes, setHeroes] = useState<ResponseHeroesApi[]>([]);

  const [heroeFilter, setHeroeFilter] = useState<string>('');

  useEffect(() => {
    async function handleGetHeroes() {
      const response = await api.get("/characters", {
        params: {
          limit: 10,
        },
      });
    setHeroes(response.data.data.results);
    } 
    handleGetHeroes();
  }, []);

  useEffect(() => {
    if (heroeFilter === '') {
      setHeroes(heroes);
    } else {
      setHeroes(
        heroes.filter(
          (item) =>
            item.name.toLowerCase().indexOf(heroeFilter.toLowerCase()) > -1
        )
      );
    }
  }, [heroeFilter]);

  const handleMoreHeroes = useCallback( async () => {
    try {
      const offset = heroes.length + 10;
      
      const response = await api.get("/characters", {
        params: {
          offset
        }
      });

      setHeroes([...heroes, ...response.data.data.results]);
    } catch(err) {
      console.log(err);
    }
  }, [heroes])


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
                data={ heroes }
                keyExtractor={(item) => item.id?.toString()}
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
            </ContainerList>
          </CardsContent>
        </Content>
        <Button title="Carregar mais" onPress={handleMoreHeroes} />
      </Container>
    </SafeAreaView>
  );
}
