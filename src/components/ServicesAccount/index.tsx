import React from 'react';
import {StyleSheet, View} from 'react-native';

import {
  CardItem,
  Description,
  Row,
  Title,
  Price,
  HideInformation,
} from './styles';

import Icon from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import {useAccountInfo} from '../../contexts/AccountInfo';

const styles = StyleSheet.create({
  cardBorder: {
    borderTopColor: '#F0F1F5',
    borderTopWidth: 2,
  },
});

export function ServicesAccount() {
  const {isVisible} = useAccountInfo();

  return (
    <>
      <View style={styles.cardBorder}>
        <CardItem>
          <IconFeather
            name="smartphone"
            color="#000"
            size={20}
            style={{transform: [{scaleY: -1}]}}
          />
          <Row>
            <Title>Cartão de crédito</Title>
            <IconMaterial
              name="keyboard-arrow-right"
              color="#727683"
              size={25}
            />
          </Row>

          <Description>Fatura atual</Description>
          {isVisible ? <Price>R$ 212,00</Price> : <HideInformation />}
          <Description>Limite disponível de R$ 1.000,00</Description>
        </CardItem>
      </View>

      <View style={styles.cardBorder}>
        <CardItem style={styles.cardBorder}>
          <IconMaterial name="attach-money" color="#181818" size={20} />
          <Row>
            <Title>Empréstimo</Title>
            <IconMaterial
              name="keyboard-arrow-right"
              color="#727683"
              size={25}
            />
          </Row>

          <Description>Valor disponível de até</Description>
          {isVisible ? (
            <Description>R$ 1.000,00</Description>
          ) : (
            <HideInformation />
          )}
        </CardItem>
      </View>

      <View style={styles.cardBorder}>
        <CardItem style={styles.cardBorder}>
          <IconEntypo name="bar-graph" color="#181818" size={18} />
          <Row>
            <Title>Investimentos</Title>
            <IconMaterial
              name="keyboard-arrow-right"
              color="#727683"
              size={25}
            />
          </Row>

          <Description>
            Pre-pa-ra! Cadastre-se agora e não fique de fora da revolução que
            está por vir.
          </Description>
        </CardItem>
      </View>

      <View style={styles.cardBorder}>
        <CardItem>
          <Icon name="hearto" color="#181818" size={20} />
          <Row>
            <Title>Seguro de vida</Title>
            <IconMaterial
              name="keyboard-arrow-right"
              color="#727683"
              size={20}
            />
          </Row>

          <Description>
            Conheça Nubank Vida: um seguro simples e que cabe no bolso.
          </Description>
        </CardItem>
      </View>
    </>
  );
}
