import { View } from "react-native"
import { EntradaTexto } from "../../componentes/EntradaTexto"
import Botao from "../../componentes/Botao"
import estilos from "./estilos"
import React, { useState } from "react"
import { salvarProduto, atualizarProduto } from "../../servicos/firestore"
import { Alerta } from "../../componentes/Alerta"

export default function DadosProduto({ navigation, route }){
  const [nome, setNome] = useState(route?.params?.nome || '')
  const [preco, setPreco] = useState(route?.params?.preco || '')
  const [mensagem, setMensagem] = useState('')
  const [mostrarMensagem, setMostrarMensagem] = useState(false)

  async function salvar(){
    if(nome == '' || preco == ''){
      setMensagem("Por favor preencha todos os campos")
      setMostrarMensagem(true)
      return
    }

    let resultado = ''
    if(route?.params) {
      resultado = await atualizarProduto(route?.params?.id, {
        nome, preco
      })
    }
    else{
      resultado = await salvarProduto({
        nome,
        preco
      })
    }
    
    if(resultado == 'erro'){
      setMensagem("Erro ao salvar produto")
      setMostrarMensagem(true)
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

      <Alerta
        mensagem={mensagem}
        error={mostrarMensagem}
        setError={setMostrarMensagem}
      />
    </View>
  )
}