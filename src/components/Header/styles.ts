import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
  background: #991F36;
  height: 10%;
  width: 100%;

  border-radius: 5px;

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
  color: #F4F5F6;
  margin-left: 3px;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #DEDEE3;
`;

export const TitleName = styled.Text`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  color: #E51C44;
  margin-left: 3px;
`;