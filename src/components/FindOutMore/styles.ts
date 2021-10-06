import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const CardItem = styled(RectButton)`
  padding: 24px 20px;
`;

export const MoreOptionsContainer = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})``;

export const MoreOptionsText = styled.Text`
  color: #000;
  font-size: 14px;
  font-family: 'GraphikRegular';
  line-height: 20px;
`;

export const DescubraMaisTitle = styled.Text`
  color: #000;
  font-size: 17px;
  font-weight: 600;
  font-family: 'GraphikMedium';
`;

export const CardDescubraMais = styled.View`
  background: #f0f1f5;
  padding: 25px;
  width: 275px;
  border-radius: 15px;
  margin-top: 25px;
  margin-right: 15px;
  height: 195px;
`;

export const ButtonDescubraMais = styled.TouchableOpacity`
  background: #820ad1;
  border-radius: 100px;
  padding: 10px 15px;

  align-items: center;
  justify-content: center;

  position: absolute;
  margin: 10px 0;
  bottom: 15px;
  left: 25px;
`;

export const ButtonDescubraMaisText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-family: 'GraphikMedium';
`;

export const Title = styled.Text`
  color: #000;
  font-size: 19px;
  font-weight: 600;
  font-family: 'GraphikMedium';
`;
