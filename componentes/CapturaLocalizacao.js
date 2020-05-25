import React, { useState } from 'react';
import {
    View,
    Button,
    Text,
    ActivityIndicator,
    Alert,
    StyleSheet
} from 'react-native';

import Cores from '../constantes/Cores'

import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import PreviewDoMapa from './PreviewDoMapa';


const CapturaLocalizacao = (props) => {

    const [estaCapturando, setEstaCapturando] = useState(false);
    const [localizacaoSelecionada, setLocalizacaoSelecionada] = useState();

    const verificarPermissoes = async () => {
        const resultado = await Permissions.askAsync(Permissions.LOCATION);
        console.log("Resultado: " + JSON.stringify(resultado));
        if (resultado.status !== "granted") {
            Alert.alert(
                "Sem permissão",
                "É preciso liberar acesso aos mecanismos de localização",
                [{ text: 'OK' }]
            );
            return false;
        }
        return true;
    }

    const capturarLocalizacao = async () => {
        const temPermissao = await verificarPermissoes();
        if (temPermissao) {
            setEstaCapturando(true);
            try {
                const localizacao = await Location.getCurrentPositionAsync({
                    timeout: 8000
                });
                setLocalizacaoSelecionada({
                    lat: localizacao.coords.latitude,
                    lng: localizacao.coords.longitude
                });
                //console.log(localizacao);
            }
            catch (err) {
                console.log(err);
                Alert.alert(
                    "impossível obter localização",
                    "Tente novamente mais tarde",
                    [{ text: 'OK' }]
                );
            }
            setEstaCapturando(false);
        }
    };
    return (
        <View style={estilos.capturaLocalizacao}>

            <PreviewDoMapa
                style={estilos.previewDoMapa}
                localizacao={localizacaoSelecionada}>
                {
                    estaCapturando ?
                        <ActivityIndicator
                            size="large"
                            color={Cores.primary}
                        />
                        :
                        <Text>Nenhuma localização disponível.</Text>
                }


            </PreviewDoMapa>

            <Button
                title="Obter localização"
                color={Cores.primary}
                onPress={capturarLocalizacao}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    capturaLocalizacao: {
        marginBottom: 15
    },
    previewDoMapa: {
        marginBottom: 10,
        width: '100%',
        height: 200,
        borderColor: '#DDD',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CapturaLocalizacao;