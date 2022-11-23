import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore"

export async function salvarProduto(data){
  try {
    await addDoc(collection(db, 'produtos'), data)
    return 'ok'
  } catch(error){
    console.log('Erro add produto:', error)
    return 'erro'
  }
}