import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const DetalhesDoLugarTela = (props) => {
    return (
        <View>
            {DetalhesDoLugarTela}
        </View>
    );
}

DetalhesDoLugarTela.navigationOptions = (dadosNav) => {
    return {
        headerTitle: dadosNav.navigation.getParam("tituloLugar")
    }
}


const estilos = StyleSheet.create({});
export default DetalhesDoLugarTela;