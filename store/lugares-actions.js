import * as FileSystem from 'expo-file-system'
import { inserirLugar, buscarLugares } from '../helpers/db';

export const ADD_LUGAR = 'ADD_LUGAR';
export const LISTA_LUGARES = "LISTA_LUGARES";

export const listarLugares = () => {
    return async dispatch => {
        try {
            const resultadoDB = await buscarLugares();
            dispatch({ type: LISTA_LUGARES, lugares: resultadoDB.rows._array })
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}


export const addLugar = (nomeLugar, imagem) => {
    return async dispatch => {
        //file://diretorio/outrodiretorio/nome.png
        const nomeArquivo = imagem.split("/").pop();
        const novoPath = FileSystem.documentDirectory + nomeArquivo;
        try {
            await FileSystem.moveAsync({
                from: imagem,
                to: novoPath
            })
            const resultadoDB = await inserirLugar(
                nomeLugar,
                novoPath,
                'Torre Eiffel',
                48.8584,
                2.2945
            )
            //console.log(resultadoDB);
            dispatch({ type: ADD_LUGAR, dadosLugar: { id: resultadoDB.insertId, nomeLugar: nomeLugar, imagem: novoPath } })
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }

}