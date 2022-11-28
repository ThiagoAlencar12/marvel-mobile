import styled from "styled-components/native";

export const Container = styled.View`
  height: 10%;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export const HeaderProfile = styled.View`
  flex-direction: column;
  align-items: flex-end;
`;

export const Title = styled.Text`
  font-size: 25px;
  text-align: center;
  font-weight: 600;
  color: #f4f5f6;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  line-height: 25px;
  text-align: center;
`;

export const TitleName = styled.Text`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  color: #85d7ff;
  margin-left: 3px;
`;
