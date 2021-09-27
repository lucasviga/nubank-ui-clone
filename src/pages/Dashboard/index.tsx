import React, {useRef, useState} from 'react';
import {Animated, PanResponder} from 'react-native';
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
  const [isVisible, setIsVisible] = useState(true);

  const handleChangeVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Container>
      <Header>
        <HeaderLinks>
          <UserIcon>
            <Icon name="user" color="#FFFFFF" size={20} />
          </UserIcon>

          <HeaderContentButton>
            <HeaderButton onPress={handleChangeVisibility}>
              {isVisible ? (
                <IconMaterial name="eye-outline" color="#FFFFFF" size={22} />
              ) : (
                <IconMaterial
                  name="eye-off-outline"
                  color="#FFFFFF"
                  size={22}
                />
              )}
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

      <Content isVisible={isVisible} />
    </Container>
  );
}
