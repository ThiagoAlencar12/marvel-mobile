import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  min-width: 90%;
  max-width: 95%;
  padding: 15px 0;

  flex-direction: row;

  justify-content: space-around;
  align-items: center;

  margin: 10px 8px;
  border: 2px solid #c93030;

  border-radius: 10px;
`

export const Title = styled.Text`
  font-size: 16px;
  margin: 10px 0;
  color: #495BCC;
  font-weight: 700;
  text-align: center;
`;

export const Description = styled.Text`
  text-align: center;
  line-height: 13px;
  font-size: 12px;
  color: #495BCC;
  font-weight: 700;

`;

export const DescriptionBox = styled.View`
  width: 80%;
`;

export const AvatarHeroe = styled.Image`
  border-radius: 60px;
  padding: 10px;
  width: 66px;
  height: 68px;
`;

export const Content = styled.View`
  width: 50%;
`;
