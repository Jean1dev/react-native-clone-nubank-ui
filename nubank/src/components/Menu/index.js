import React from 'react'
import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';
import QRcode from 'react-native-qrcode'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Menu({ translateY }){
    return(
        <Container  style={{
            opacity: translateY.interpolate({
              inputRange: [0, 150],
              outputRange: [0, 1]
            })
          }}>
            <Code>
                <QRcode value="#" size={80} fgColor="#FFF" bgColor="#8B10AE"></QRcode>
            </Code>

            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF"></Icon>
                    <NavText>Me ajuda</NavText>
                </NavItem>


                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF"></Icon>
                    <NavText>Perfil</NavText>
                </NavItem>


                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF"></Icon>
                    <NavText>Configurar Cartao</NavText>
                </NavItem>


                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF"></Icon>
                    <NavText>Configuracoes do app</NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => {}}>
                <SignOutButtonText> Sair</SignOutButtonText>
            </SignOutButton>
        </Container>
    )
}