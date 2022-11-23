import { db } from "../config/firebase";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, where, onSnapshot } from "firebase/firestore"

export async function salvarProduto(data){
  try {
    await addDoc(collection(db, 'produtos'), data)
    return 'ok'
  } catch(error){
    console.log('Erro add produto:', error)
    return 'erro'
  }
}

export async function pegarProdutos(){
  try {
    const querySnapshot = await getDocs(collection(db, "produtos"));
    let produtos = []
    querySnapshot.forEach((doc) => {
      let produto = {id: doc.id, ...doc.data()}
      produtos.push(produto)
    });
    return produtos
  }catch(error){
    console.log(error)
    return []
  }
}

export async function pegarProdutosTempoReal(setProdutos){
  const ref = query(collection(db, "produtos"))
  onSnapshot(ref, (querySnapshot) => {
    const produtos = []
    querySnapshot.forEach(( doc ) => {
      produtos.push({id: doc.id, ...doc.data()})
    })
    setProdutos(produtos)
  })
}

export async function atualizarProduto(produtoID, data){
  try {
    const produtoRef = doc(db, "produtos", produtoID);
    await updateDoc(produtoRef, data)
    return 'ok'
  }
  catch(error){
    console.log(error)
    return 'error'
  }
}

export async function deletarProduto(produtoID){
  try {
    const produtoRef = doc(db, "produtos", produtoID);
    await deleteDoc(produtoRef)
    return 'ok'
  }
  catch(error){
    console.log(error)
    return 'error'
  }
}