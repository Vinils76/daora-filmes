import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../services/api";
import apiKey from "../../apiKey";
import Loading from "../components/Loading";

const Resultados = ({ route }) => {
  const { filme } = route.params;

  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await api.get("/search/movie", {
          params: {
            api_key: apiKey,
            language: "pt-BR",
            query: filme,
            include_adult: false,
          },
        });

        setResultados(resposta.data.results);

        /* Simulando um tempo de carregamento lento
        usando temporizador setInterval */
        setInterval(() => {
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.log("Deu ruim na busca na API: " + error.message);
      }
    }
    buscarFilmes();
  }, []);

  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme} </Text>

      {/* Sintaxe de if evaluate usando &&
Se loading for TRUE, renderize <Loading /> */}
      {loading && <Loading />}

      <View style={estilos.viewFilmes}>
        {/* Se loading for false, renderize o resultado
        do map */}
        {!loading &&
          resultados.map((resultado) => {
            return (
              <View key={resultado.id}>
                <Image
                  style={estilos.imagem}
                  source={{
                    uri: `https://image.tmdb.org/t/p/original/${resultado.poster_path}`,
                  }}
                />
                <Text> {resultado.title} </Text>
              </View>
            );
          })}
      </View>
    </SafeAreaView>
  );
};

export default Resultados;

const estilos = StyleSheet.create({
  viewFilmes: {
    marginVertical: 8,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  imagem: {
    height: 125,
  },
});
