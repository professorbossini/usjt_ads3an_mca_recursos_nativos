import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';
import { useDispatch } from 'react-redux'
import * as lugaresActions from '../store/lugares-actions'
import TiraFoto from '../componentes/TiraFoto';

const NovoLugarTela = (props) => {

    const dispatch = useDispatch();

    const [novoLugar, setNovoLugar] = useState('');
    const novoLugarAlterado = (texto) => {
        setNovoLugar(texto);
    }

    const [imagemURI, setImagemURI] = useState();

    const fotoTirada = imagemURI => {
        setImagemURI(imagemURI);
    }

    const adicionarLugar = () => {
        dispatch(lugaresActions.addLugar(novoLugar, imagemURI));
        props.navigation.goBack();
    }

    return (
        <View style={estilos.form}>
            <Text style={estilos.titulo}>Título</Text>
            <TextInput
                style={estilos.textInput}
                onChangeText={novoLugarAlterado}
                value={novoLugar}
            />
            <TiraFoto onFotoTirada={fotoTirada} />
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