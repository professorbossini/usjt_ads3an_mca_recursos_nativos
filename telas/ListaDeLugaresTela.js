import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import BotaoCabecalho from '../componentes/BotaoCabecalho';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

const ListaDeLugaresTela = (props) => {
    return (
        <View>
            {ListaDeLugaresTela}
        </View>
    );
}

const estilos = StyleSheet.create({});


ListaDeLugaresTela.navigationOptions = dadosNav => {
    return {
        headerTitle: "Todos os lugares",
        headerRight:
            <HeaderButtons
                HeaderButtonComponent={BotaoCabecalho}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => { dadosNav.navigation.navigate("NovoLugar") }}
                />
            </HeaderButtons>
    }
}




export default ListaDeLugaresTela;