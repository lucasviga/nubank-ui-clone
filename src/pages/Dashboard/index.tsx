import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {Content} from '../../components/AccountContent';

import {
  Container,
  Header,
  Username,
  HeaderLinks,
  UserIcon,
  HeaderContentButton,
  HeaderButton,
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <HeaderLinks>
          <UserIcon>
            <Icon name="user" color="#FFFFFF" size={20} />
          </UserIcon>

          <HeaderContentButton>
            <HeaderButton>
              <IconMaterial name="eye-outline" color="#FFFFFF" size={22} />
            </HeaderButton>

            <HeaderButton>
              <Icon name="questioncircleo" color="#FFFFFF" size={20} />
            </HeaderButton>

            <HeaderButton>
              <IconMaterial
                name="email-plus-outline"
                color="#FFFFFF"
                size={22}
              />
            </HeaderButton>
          </HeaderContentButton>
        </HeaderLinks>

        <Username>Olá, Lucas</Username>
      </Header>

      <Content />
    </Container>
  );
}
