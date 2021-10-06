import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const CardItem = styled(RectButton)`
  padding: 24px 20px;
`;

export const Row = styled.View`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.Text`
  color: #000;
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

export const HideInformation = styled.View`
  height: 30px;
  width: 250px;
  background: #f0f1f5;
  margin: 10px 0;
  border-radius: 5px;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 19px;
  font-weight: 600;
  font-family: 'GraphikMedium';
`;
