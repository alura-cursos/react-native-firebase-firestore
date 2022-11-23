import { Alert, View } from "react-native"
import { EntradaTexto } from "../../componentes/EntradaTexto"
import Botao from "../../componentes/Botao"
import estilos from "./estilos"
import React, { useState } from "react"
import { salvarProduto } from "../../servicos/firestore"

export default function DadosProduto({ navigation }){
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')

  async function salvar(){
    const resultado = await salvarProduto({
      nome,
      preco
    })
    if(resultado == 'erro'){
      Alert.alert('Erro ao criar produto')
    }
    else {
      navigation.goBack();
    }
  }

  return (
    <View style={estilos.container}>
      <EntradaTexto
        label="Nome do produto"
        value={nome}
        onChangeText={texto => setNome(texto)}
      />
      <EntradaTexto
        label="Preço do produto"
        value={preco}
        onChangeText={texto => setPreco(texto)}
      />

      <Botao onPress={() => salvar()} >Salvar</Botao>
    </View>
  )
}