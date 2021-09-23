import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Header = styled.View`
  height: 135px;
  background-color: #820ad1;
  padding: 18px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderLinks = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserIcon = styled.TouchableOpacity`
  background: #9b3bda;
  width: 50px;
  height: 50px;
  border-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContentButton = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderButton = styled.TouchableOpacity`
  margin-left: 30px;
`;

export const Username = styled.Text`
  color: #ffffff;
  font-weight: 500;
  font-size: 18px;
  font-family: 'GraphikMedium';
`;
