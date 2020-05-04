import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';


const NovoLugarTela = (props) => {

    const [novoLugar, setNovoLugar] = useState('');
    const novoLugarAlterado = (texto) => {
        setNovoLugar(texto);
    }

    const adicionarLugar = () => {

    }

    return (
        <View style={estilos.form}>
            <Text style={estilos.titulo}>Título</Text>
            <TextInput
                style={estilos.textInput}
                onChangeText={novoLugarAlterado}
                value={novoLugar}
            />
            <Button
                title="Ok"
                onPress={adicionarLugar}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    form: {
        margin: 30
    },
    titulo: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#DDD',
        borderBottomWidth: 2,
        marginBottom: 15,
        paddingVertical: 4
    }
});
export default NovoLugarTela;