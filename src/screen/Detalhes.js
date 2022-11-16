import { Ionicons } from "@expo/vector-icons";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Detalhes = ({ route }) => {
  /* console.log(route); */

  const { filme } = route.params;
  console.log(filme);
  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <ImageBackground
          style={estilos.imagem}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`,
          }}
        >
          <Text style={estilos.titulo}> {filme.title} </Text>
        </ImageBackground>

        <View style={estilos.conteudo}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text>
              Avaliação: {filme.vote_average}{" "}
              <Ionicons name="star" size={16} color="orange" /> | Lançamento:{" "}
              {filme.release_date}
            </Text>
            <Text style={estilos.descricao}>
              {filme.overview || "Sem descrição"}
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detalhes;

const estilos = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  imagem: {
    height: 200,
    justifyContent: "center",
  },
  titulo: {
    backgroundColor: "rgba(0,0,0, 0.60)",
    color: "white",
    textAlign: "center",
    padding: 16,
  },
  conteudo: {
    padding: 8,
    flex: 1,
  },
  descricao: {
    fontSize: 16,
    lineHeight: 20,
    marginVertical: 10,
  },
});
