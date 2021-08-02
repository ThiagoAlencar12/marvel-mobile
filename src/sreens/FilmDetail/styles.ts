import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Title = styled.Text`
  color: #495BCC;
  font-size: 22px;
  font-weight: 700;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const CardsContent = styled.View`  
  flex: 1;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #0A1033;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const List = styled(FlatList)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const ContainerList = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 50%;
  flex: 1;
`;
