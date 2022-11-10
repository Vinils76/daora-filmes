import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useState } from "react";

const FormBusca = () => {
  /* Captura em tempo real do que é digitado no TextInput 
  através do evento onChangeText */
  const filmeDigitado = (valorDigitado) => {
    setFilme(valorDigitado);
  };

  /* Hook useState para monitorar/armazenar o filme
  que será buscado a partir do formulário */
  const [filme, setFilme] = useState("");

  /* Função chamada toda vez que o botão for pressionado
  (usamos a prop onPress do Button) */
  const buscarFilmes = () => {
    /* Se filme (gerenciado pelo useState) estiver vazio/undefined/falsy */
    if (!filme) {
      return Alert.alert("Ops!", "Você deve digitar um filme!");
    }

    Alert.alert("Você procurou por: ", filme);
  };

  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.texto}>
        Star Trek? O Poderoso Chefão? A trilogia Senhor dos Anéis?
      </Text>
      <Text style={estilos.texto}>
        Localiza um filme que você viu ou gostaria de ver!
      </Text>
      <View style={estilos.viewForm}>
        <Ionicons name="film" size={44} />
        <TextInput
          placeholder="Digite o filme..."
          style={estilos.campo}
          onChangeText={filmeDigitado}
        />
      </View>
      <Button title="Procurar" color="#5451a6" onPress={buscarFilmes} />
    </SafeAreaView>
  );
};

export default FormBusca;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  texto: {
    paddingVertical: 8,
  },
  viewForm: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  campo: {
    borderWidth: 1,
    padding: 8,
    flex: 0.9,
  },
  botao: {
    backgroundColor: "red",
    borderWidth: 2,
  },
});
