import React from 'react';

import {
  CardConta,
  ContaDescription,
  MoreOptionsContainer,
  MoreOptionsContent,
  MoreOptionsText,
  HighligthPurple,
  Row,
  Title,
  ContaFeatures,
  ContaFeaturesItem,
  IconBackground,
  ContaFeaturesTitle,
  MyCreditsCardsText,
  MyCreditsCards,
} from './styles';

import Icon from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';

import {Button} from '../Button';

export function Account() {
  return (
    <CardConta>
      <Row>
        <Title>Conta</Title>
        <IconMaterial name="keyboard-arrow-right" color="#727683" size={25} />
      </Row>

      <ContaDescription>
        Uma conta completa, com função de débito, sem tarifa de manutenção e que
        faz seu dinheiro render.
      </ContaDescription>

      <Button>Conhecer</Button>

      <ContaFeatures>
        <ContaFeaturesItem>
          <IconBackground onPress={() => {}}>
            <IconMaterial name="attach-money" color="#181818" size={20} />
          </IconBackground>
          <ContaFeaturesTitle>Pegar{'\n'}emprestado</ContaFeaturesTitle>
        </ContaFeaturesItem>

        <ContaFeaturesItem>
          <IconBackground>
            <IconFeather name="smartphone" color="#000" size={20} />
          </IconBackground>
          <ContaFeaturesTitle>Recarga de{'\n'}celular</ContaFeaturesTitle>
        </ContaFeaturesItem>

        <ContaFeaturesItem>
          <IconBackground>
            <Icon name="hearto" color="#181818" size={20} />
          </IconBackground>
          <ContaFeaturesTitle>Doação</ContaFeaturesTitle>
        </ContaFeaturesItem>

        <ContaFeaturesItem>
          <IconBackground>
            <Icon name="questioncircleo" color="#000" size={20} />
          </IconBackground>
          <ContaFeaturesTitle>Encontrar{'\n'}atalhos</ContaFeaturesTitle>
        </ContaFeaturesItem>
      </ContaFeatures>

      <MyCreditsCards>
        <IconFeather
          name="smartphone"
          color="#000"
          size={20}
          style={{transform: [{scaleY: -1}]}}
        />
        <MyCreditsCardsText>Meus cartões</MyCreditsCardsText>
      </MyCreditsCards>

      <MoreOptionsContainer>
        <MoreOptionsContent>
          <HighligthPurple>Não parcelou e se arrependeu?</HighligthPurple>
          <MoreOptionsText>Parcele suas compras no app.</MoreOptionsText>
        </MoreOptionsContent>

        <MoreOptionsContent>
          <MoreOptionsText>
            Você tem <HighligthPurple>R$ 1.000,00</HighligthPurple> disponíveis
            para empréstimo
          </MoreOptionsText>
        </MoreOptionsContent>

        <MoreOptionsContent>
          <MoreOptionsText>Salve seus amigos da burocracia.</MoreOptionsText>
          <HighligthPurple>Faça um convite para o Nubank.</HighligthPurple>
        </MoreOptionsContent>
      </MoreOptionsContainer>
    </CardConta>
  );
}
