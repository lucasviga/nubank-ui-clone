import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAccountInfo} from '../../contexts/AccountInfo';

import {
  Container,
  Username,
  HeaderLinks,
  UserIcon,
  HeaderContentButton,
  HeaderButton,
} from './styles';

export function Header() {
  const {isVisible, onChangeVisibility} = useAccountInfo();

  return (
    <Container>
      <HeaderLinks>
        <UserIcon>
          <Icon name="user" color="#FFFFFF" size={20} />
        </UserIcon>

        <HeaderContentButton>
          <HeaderButton onPress={onChangeVisibility}>
            {isVisible ? (
              <IconMaterial name="eye-outline" color="#FFFFFF" size={22} />
            ) : (
              <IconMaterial name="eye-off-outline" color="#FFFFFF" size={22} />
            )}
          </HeaderButton>

          <HeaderButton>
            <Icon name="questioncircleo" color="#FFFFFF" size={20} />
          </HeaderButton>

          <HeaderButton>
            <IconMaterial name="email-plus-outline" color="#FFFFFF" size={22} />
          </HeaderButton>
        </HeaderContentButton>
      </HeaderLinks>

      <Username>Olá, Lucas</Username>
    </Container>
  );
}
