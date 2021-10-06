import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const CardConta = styled.View`
  padding: 24px 20px;
`;

export const ContaFeatures = styled.View`
  flex-direction: row;
  margin: 25px 0;
`;

export const ContaFeaturesItem = styled.View`
  height: 100%;
  width: 85px;
  flex-direction: column;
  align-items: center;
`;

export const IconBackground = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #f0f1f5;
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;

export const ContaFeaturesTitle = styled.Text`
  font-family: 'GraphikMedium';
  text-align: center;
  margin-top: 8px;
`;

export const MyCreditsCards = styled(RectButton)`
  background: #f0f1f5;
  border-radius: 15px;
  margin-bottom: 25px;
  padding: 18px;

  flex-direction: row;
  align-items: flex-start;
`;

export const MyCreditsCardsText = styled.Text`
  font-family: 'GraphikMedium';
  margin-left: 15px;
  font-size: 14px;
`;

export const MoreOptionsContainer = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})``;

export const MoreOptionsContent = styled(RectButton)`
  background: #f0f1f5;
  padding: 25px;
  width: 275px;
  border-radius: 15px;
  margin-right: 15px;
  height: auto;
`;

export const MoreOptionsText = styled.Text`
  color: #000;
  font-size: 14px;
  font-family: 'GraphikRegular';
  line-height: 20px;
`;

export const HighligthPurple = styled.Text`
  color: #820ad1;
  font-size: 14px;
  font-family: 'GraphikRegular';
  line-height: 20px;
`;

export const Row = styled.View`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContaDescription = styled.Text`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  font-family: 'GraphikMedium';
  line-height: 20px;
  margin-bottom: 25px;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 19px;
  font-weight: 600;
  font-family: 'GraphikMedium';
`;
