import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  min-width: 180px;
  max-width: 180px; 

  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: 10px 8px;
  border: 2px solid #c93030;

  border-radius: 10px;
`

export const Title = styled.Text`
  color: #495BCC;
  text-align: center;
`;

export const AvatarHeroe = styled.Image`
  border-radius: 60px;
  padding: 10px;
  width: 66px;
  height: 68px;
`;

export const Content = styled.View`
  padding: 10px;
  align-items: center;
  justify-content: center;
`;
