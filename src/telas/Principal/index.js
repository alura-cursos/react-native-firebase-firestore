import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Cabecalho from '../../componentes/Cabecalho';
import Produto from '../../componentes/Produtos';
import estilos from './estilos';
import { auth } from '../../config/firebase';
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { db } from '../../config/firebase';

export default function Principal({ navigation }) {
  const usuario = auth.currentUser;

  function deslogar(){
    auth.signOut();
    navigation.replace('Login');
  }

  useEffect(() => {
    // funcao de criar produto
    async function criarProduto(){
      await addDoc(collection(db, "produtos"), {
        nome: "Tenis",
        preco: 89.90
      });
    }

    criarProduto()

  }, [])

  return (
    <View style={estilos.container}>
      <Cabecalho logout={deslogar} />
      <Text style={estilos.texto}>Usuário: {usuario.email}</Text>

      <Produto nome="Tênis" preco="200,00" />
      <Produto nome="Camisa" preco="100,00" />
      <Produto nome="Suplementos" preco="150,00" />
     </View>
  );
}
