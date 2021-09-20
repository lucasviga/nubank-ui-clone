import React from 'react';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {CardOptions} from './components/CardOptions';

import {
  Container,
  Header,
  Username,
  HeaderLinks,
  UserIcon,
  HeaderContentButton,
  HeaderButton,
} from './styles';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#820AD1" barStyle="light-content" />

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

        <CardOptions />
      </Container>
    </>
  );
};

export default App;
