import React, { useEffect, useState } from 'react';
import { View, Text, RefreshControl, ScrollView } from 'react-native';
import Cabecalho from '../../componentes/Cabecalho';
import Produto from '../../componentes/Produtos';
import estilos from './estilos';
import { auth } from '../../config/firebase';
import { BotaoProduto } from '../../componentes/BotaoProduto';
import { pegarProdutos } from '../../servicos/firestore';

export default function Principal({ navigation }) {
  const usuario = auth.currentUser;
  const [produtos, setProdutos] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  async function carregarDadosProdutos(){
    setRefreshing(true)
    const produtosFirestore = await pegarProdutos()
    setProdutos(produtosFirestore)
    setRefreshing(false)
  }

  useEffect(() => {
    carregarDadosProdutos()
  },[])

  function deslogar(){
    auth.signOut();
    navigation.replace('Login');
  }

  return (
    <View style={estilos.container}>
      <Cabecalho logout={deslogar} />
      <Text style={estilos.texto}>Usuário: {usuario.email}</Text>

      <ScrollView
        style={{ width: '100%' }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={carregarDadosProdutos}
          />
        }
      >
      {
        produtos?.map((produto) => {
          return <Produto nome={produto.nome} preco={produto.preco} key={produto.id} />
        })
      }
      </ScrollView>
      <BotaoProduto onPress={() => navigation.navigate("DadosProduto")} />
     </View>
  );
}
