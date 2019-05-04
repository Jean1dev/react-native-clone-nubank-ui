import React from 'react';

import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Header from '~/components/Header'
import Tabs from '~/components/Tabs'
import Menu from '~/components/Menu'
import { Container,
         Content,
         Card,
         CardHeader,
         CardContent,
         Title,
         Description, 
         CardFooter, 
         Annotation } from './styles'

const styles = StyleSheet.create({
  
});

export default function Main() {
  return (
    <Container>
      <Header></Header>
      <Content>
        <Menu></Menu>
        <Card>

          <CardHeader>
            <Icon name="attach-money" size={28} color="#666"></Icon>
            <Icon name="visibility-off" size={28} color="#666"></Icon>
          </CardHeader>

          <CardContent>
            <Title> Saldo disponivel</Title>
            <Description> R$ 197.611,65</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferencia de $S 20,00 recebida de Ana Julia hoje as 18h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs></Tabs>
    </Container>
  )
}
