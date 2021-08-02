import { FlatList } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #0A1033;
  align-items: center;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const ProfilePhoto = styled.Image`
  height: 30px;
  width: 30px;

  margin-left: 10px;
`;

export const Footer = styled.View`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const FooterText = styled.Text`
  color: #7A7A80;
  font-size: 13px;
  line-height: 14px;
`;

export const CardsContent = styled.View`  
  flex: 1;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

export const ContainerList = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 50%;
  flex: 1;
`;

export const List = styled(FlatList)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const CardGroup = styled.View`
  flex-direction: row;
`;

export const InputFilter = styled.TextInput`
  border: 2px solid #c93030;
  padding: 5px;
  color: #C53030;
  border-radius: 10px;
  width: 85%;
`;

export const Filter = styled.View`
  width: 100%;
  margin: 20px auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
