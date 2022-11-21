import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Favoritos = () => {
  const [listaFavoritos, setListaFavoritos] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function carregarFavoritos() {
      try {
        // Acessar o storage @favoritos e tentar carregar os dados existentes
        const dados = await AsyncStorage.getItem("@favoritos");

        // Havendo dados, transformamos eles em array de objetos
        const filmes = JSON.parse(dados);

        // Se realmente tem dados (ou seja, não é null), atualizamos o componente
        if (dados != null) {
          setListaFavoritos(filmes); // state de dados do componente
        }
      } catch (error) {
        console.log("Deu ruim no carregamento: " + error.message);
      }
    }

    carregarFavoritos();
  }, []);

  const verDetalhes = (filmeSelecionado) => {
    navigation.navigate("Detalhes", { filme: filmeSelecionado });
  };

  const excluirFavoritos = async () => {
    Alert.alert(
      "Excluir TODOS?",
      "Tem certeza que deseja excluir TODOS os favoritos?",
      [
        {
          text: "Cancelar",
          onPress: () => {
            return false;
          },
          style: "cancel", // SOMENTE NO iOS
        },
        {
          text: "Sim, to nem aí",
          onPress: async () => {
            await AsyncStorage.removeItem("@favoritos");
            setListaFavoritos([]);
          },
          style: "destructive", // SOMENTE NO iOS
        },
      ]
    );
  };

  const excluirUmFavorito = async (indice) => {
    // Alert.alert(`Excluir filme no índice: ${indice}`);

    /* Etapas para exclusão do filme escolhido */

    // 1) Conhecendo o índice, remover o elemento (filme do array listaFavoritos)

    /* splice: indicamos o índice de referência (na prática, o índice do filme
      que queremos remover e, a partir deste índice, a quantidade de elementos
      que queremos remover. Como aqui queremos apagar somente o próprio filme
      escolhido, passamos 1) */

    listaFavoritos.splice(indice, 1);

    // 2) Atualizar o storage com a lista atualizada (ou seja, sem o filme)
    /* Obs.: é necessário transformar em string antes de gravar no Storage */
    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaFavoritos));

    // 3) Recarregar do storage a nova lista de favoritos
    /* Obs.: é necessário transformar em array/objetos antes de manipular
    na aplicação */
    const listaDeFilmes = JSON.parse(await AsyncStorage.getItem("@favoritos"));

    // 4) Atualizar o state para um novo render na tela com a lista de favoritos
    setListaFavoritos(listaDeFilmes);
  };

  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text>Quantidade: {listaFavoritos.length} </Text>

          {listaFavoritos.length > 0 && (
            <Pressable
              style={estilos.botaoExcluirTudo}
              onPress={excluirFavoritos}
            >
              <Text style={estilos.textoExcluirTudo}>
                <Ionicons name="trash-outline" size={16} /> Excluir Favoritos
              </Text>
            </Pressable>
          )}
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map((filmeFavorito, indice) => {
            return (
              <Pressable
                // onPress={verDetalhes}
                // onPress={verDetalhes.bind(this, filmeFavorito)}
                onPress={() => verDetalhes(filmeFavorito)}
                key={filmeFavorito.id}
                style={estilos.itemFilme}
              >
                <Text style={estilos.titulo}>{filmeFavorito.title}</Text>
                <Pressable
                  style={estilos.botaoExcluir}
                  // onPress={excluirUmFavorito}
                  // onPress={() => excluirUmFavorito(indice)}
                  onPress={excluirUmFavorito.bind(this, indice)}
                >
                  <Ionicons name="trash" size={16} color="white" />
                </Pressable>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Favoritos;

const estilos = StyleSheet.create({
  safeContainer: { flex: 1 },
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "white",
  },
  itemFilme: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#eee8fc",
    marginVertical: 8,
    borderRadius: 4,
    alignItems: "center",
  },
  botaoExcluir: {
    backgroundColor: "#C0392B",
    padding: 8,
    borderRadius: 4,
  },
  cabecalho: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  botaoExcluirTudo: {
    borderWidth: 1,
    borderColor: "#C0392B",
    padding: 8,
    borderRadius: 4,
  },
  textoExcluirTudo: { color: "#C0392B" },
  titulo: { flex: 1, fontSize: 14 },
});
