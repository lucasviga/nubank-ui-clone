import React from 'react';
import {StyleSheet} from 'react-native';

import {CardItem, Container, Description, Row, Title, Price} from './styles';

import Icon from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

export function CardOptions() {
  return (
    <Container>
      <CardItem style={styles.cardBorder}>
        <Icon name="creditcard" color="#181818" size={20} />
        <Row>
          <Title>Cartão de crédito</Title>
          <IconMaterial name="keyboard-arrow-right" color="#727683" size={25} />
        </Row>

        <Description>Fatura atual</Description>
        <Price>R$ 212,00</Price>
        <Description>Limite disponível de R$ 1.000,00</Description>
      </CardItem>

      <CardItem style={styles.cardBorder}>
        <IconMaterial name="attach-money" color="#181818" size={20} />
        <Row>
          <Title>Empréstimo</Title>
          <IconMaterial name="keyboard-arrow-right" color="#727683" size={25} />
        </Row>

        <Description>Valor disponível de até</Description>
        <Description>R$ 1.000,00</Description>
      </CardItem>

      <CardItem style={styles.cardBorder}>
        <IconEntypo name="bar-graph" color="#181818" size={18} />
        <Row>
          <Title>Investimentos</Title>
          <IconMaterial name="keyboard-arrow-right" color="#727683" size={25} />
        </Row>

        <Description>
          Pre-pa-ra! Cadastre-se agora e não fique de fora da revolução que está
          por vir.
        </Description>
      </CardItem>

      <CardItem style={styles.cardBorder}>
        <Icon name="hearto" color="#181818" size={20} />
        <Row>
          <Title>Seguro de vida</Title>
          <IconMaterial name="keyboard-arrow-right" color="#727683" size={20} />
        </Row>

        <Description>
          Conheça Nubank Vida: um seguro simples e que cabe no bolso.
        </Description>
      </CardItem>
    </Container>
  );
}

const styles = StyleSheet.create({
  cardBorder: {
    borderTopColor: '#F0F1F5',
    borderTopWidth: 2,
  },
});
