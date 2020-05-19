import React from 'react';
import LugaresNavigator from './navegacao/LugaresNavigator';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import lugaresReducer from './store/lugares-reducer';
import { init } from './helpers/db';

init().
  then(() => {
    console.log("Base criada com sucesso ou já existente.");
  }).
  catch((err) => {
    console.log("Criação da base falhou.");
    console.log(err);
  })


const rootReducer = combineReducers({
  lugares: lugaresReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {
  return <Provider store={store}>
    <LugaresNavigator />
  </Provider>

}

