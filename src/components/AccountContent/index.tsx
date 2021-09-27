import React from 'react';
import {StyleSheet, View} from 'react-native';

import {
  CardItem,
  Container,
  CardConta,
  ContaDescription,
  MoreOptionsContainer,
  MoreOptionsContent,
  MoreOptionsText,
  HighligthPurple,
  Description,
  Row,
  Title,
  DescubraMaisTitle,
  Price,
  CardDescubraMais,
  ButtonDescubraMais,
  ButtonDescubraMaisText,
  ContaFeatures,
  ContaFeaturesItem,
  IconBackground,
  ContaFeaturesTitle,
  MyCreditsCardsText,
  MyCreditsCards,
  HideInformation,
} from './styles';

import Icon from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';

import {Button} from '../Button';

interface AccountContentProps {
  isVisible: boolean;
}

export function Content({isVisible}: AccountContentProps) {
  return (
    <Container>
      <CardConta>
        <Row>
          <Title>Conta</Title>
          <IconMaterial name="keyboard-arrow-right" color="#727683" size={25} />
        </Row>

        <ContaDescription>
          Uma conta completa, com função de débito, sem tarifa de manutenção e
          que faz seu dinheiro render.
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
              Você tem <HighligthPurple>R$ 1.000,00</HighligthPurple>{' '}
              disponíveis para empréstimo
            </MoreOptionsText>
          </MoreOptionsContent>

          <MoreOptionsContent>
            <MoreOptionsText>Salve seus amigos da burocracia.</MoreOptionsText>
            <HighligthPurple>Faça um convite para o Nubank.</HighligthPurple>
          </MoreOptionsContent>
        </MoreOptionsContainer>
      </CardConta>

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

      <View style={styles.cardBorder}>
        <CardItem>
          <DescubraMaisTitle>Descubra mais</DescubraMaisTitle>

          <MoreOptionsContainer>
            <CardDescubraMais>
              <Title>Conta PJ</Title>
              <MoreOptionsText>
                A gente te ajuda a gerenciar suas finanças de um jeito fácil
                para fazer seu negócio acontecer.
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
    </Container>
  );
}

const styles = StyleSheet.create({
  cardBorder: {
    borderTopColor: '#F0F1F5',
    borderTopWidth: 2,
  },
});
