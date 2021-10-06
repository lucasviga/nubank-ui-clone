import React from 'react';
import {StyleSheet, View} from 'react-native';

import {
  CardItem,
  MoreOptionsContainer,
  MoreOptionsText,
  Title,
  DescubraMaisTitle,
  CardDescubraMais,
  ButtonDescubraMais,
  ButtonDescubraMaisText,
} from './styles';

const styles = StyleSheet.create({
  cardBorder: {
    borderTopColor: '#F0F1F5',
    borderTopWidth: 2,
  },
});

export function FindOutMore() {
  return (
    <View style={styles.cardBorder}>
      <CardItem>
        <DescubraMaisTitle>Descubra mais</DescubraMaisTitle>

        <MoreOptionsContainer>
          <CardDescubraMais>
            <Title>Conta PJ</Title>
            <MoreOptionsText>
              A gente te ajuda a gerenciar suas finanças de um jeito fácil para
              fazer seu negócio acontecer.
            </MoreOptionsText>

            <ButtonDescubraMais>
              <ButtonDescubraMaisText>Pedir como PJ</ButtonDescubraMaisText>
            </ButtonDescubraMais>
          </CardDescubraMais>

          <CardDescubraMais>
            <Title>Indique seus amigos</Title>
            <MoreOptionsText>
              Mostre aos seus amigos como é fácil ter uma vida sem burocracia.
            </MoreOptionsText>

            <ButtonDescubraMais>
              <ButtonDescubraMaisText>Indicar amigos</ButtonDescubraMaisText>
            </ButtonDescubraMais>
          </CardDescubraMais>

          <CardDescubraMais>
            <Title>WhatsApp</Title>
            <MoreOptionsText>
              Pagamos seguros, rápidos e sem tarifa. A experiência Nubank sem
              nem sair da conversa.
            </MoreOptionsText>

            <ButtonDescubraMais>
              <ButtonDescubraMaisText>Quero Conhecer</ButtonDescubraMaisText>
            </ButtonDescubraMais>
          </CardDescubraMais>
        </MoreOptionsContainer>
      </CardItem>
    </View>
  );
}
