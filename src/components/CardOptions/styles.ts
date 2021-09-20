import styled from 'styled-components/native';

export const Container = styled.View`
  background: #ffffff;
`;

export const CardItem = styled.TouchableOpacity`
  padding: 24px 25px;
`;

export const Row = styled.View`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #181818;
  font-size: 20px;
  font-weight: 600;
  font-family: 'GraphikMedium';
`;

export const Price = styled.Text`
  color: #181818;
  font-size: 25px;
  font-weight: 700;
  margin: 6px 0;
  font-family: 'GraphikMedium';
`;

export const Description = styled.Text`
  color: #727683;
  font-size: 14px;
  font-weight: 500;
  font-family: 'GraphikMedium';
  line-height: 20px;
`;
