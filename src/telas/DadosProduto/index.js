import { View } from "react-native"
import { EntradaTexto } from "../../componentes/EntradaTexto"
import Botao from "../../componentes/Botao"
import estilos from "./estilos"
import React, { useState } from "react"

export default function DadosProduto(){
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')

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

      <Botao onPress={() => {}} >Salvar</Botao>
    </View>
  )
}