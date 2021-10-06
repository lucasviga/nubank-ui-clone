import React from 'react';

import {Account} from '../../components/Account';
import {FindOutMore} from '../../components/FindOutMore';
import {Header} from '../../components/Header';
import {ServicesAccount} from '../../components/ServicesAccount';

import {Container, Content} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header />

      <Content>
        <Account />

        <ServicesAccount />

        <FindOutMore />
      </Content>
    </Container>
  );
}
