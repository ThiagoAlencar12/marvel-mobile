import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, Text } from "react-native";

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
import { HeroesDTO } from "../../hooks/model";
import api from "../../services/api";
import { useFetchHeroes } from "../../hooks/useFetchMarvel";

export function Films() {
  const [heroeFilter, setHeroeFilter] = useState<string>("");
  const [filteredHeroe, setFilteredHeroe] = useState<HeroesDTO[]>([]);

  const { data, loading, error } = useFetchHeroes();
  //https://www.youtube.com/watch?v=c3Befjw4CG8
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

  // useEffect(() => {
  //   setLoading(true);
  //   async function handleGet() {
  //     const response = await api.get("/characters", {
  //       params: {
  //         limit: 20,
  //       },
  //     });
  //     setHeroeArray(response.data.data.results);
  //     setLoading(false);
  //   }
  //   handleGet();
  // }, []);

  useEffect(() => {
    async function handleFilter() {
      if (heroeFilter === "") {
        setFilteredHeroe(data);
      } else {
        setFilteredHeroe(
          data.filter(
            (item) =>
              item.name.toLowerCase().indexOf(heroeFilter.toLowerCase()) > -1
          )
        );
      }
    }
    handleFilter();
  }, [heroeFilter]);

  if (error) {
    return <Text>Errei</Text>;
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
          <CardsContent>
            <ContainerList>
              <List
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={filteredHeroe}
                keyExtractor={(item) => item.id?.toString()}
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
