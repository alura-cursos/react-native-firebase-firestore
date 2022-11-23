import { TouchableOpacity, Text } from "react-native";
import estilos from './estilos';

export function BotaoProduto({ onPress }){
  return (
    <TouchableOpacity style={estilos.botao} onPress={onPress}>
      <Text style={estilos.textoBotao}>+</Text>
    </TouchableOpacity>
  )
}