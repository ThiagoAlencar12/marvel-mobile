import { FlatList } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { theme } from "../../global/styles/themes";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
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
  color: #7a7a80;
  font-size: 13px;
  line-height: 14px;
`;

export const ContainerList = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 50%;
  margin: 0 auto;
  padding: 0 15px;
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

export const InputFilter = styled.TextInput.attrs({
  placeholderTextColor: "#85d7ff",
  placeholder: "Digite o nome do heroi...",
})`
  border: 2px solid #85d7ff;
  padding: 14px 16px;
  color: #85d7ff;
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
