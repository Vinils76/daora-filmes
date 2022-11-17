import { formataData } from "../utils/funcoes";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Button,
} from "react-native";

import fotoAlternativa from "../../assets/images/foto-alternativa.jpg";

/* Prop de route para acesso aos dados trafegados
entre a navegação entre as telas/rotas */
const Detalhes = ({ route }) => {
  // console.log(route);

  /* Extraindo dos parametros da rota os 
  dados do objeto filme */
  const { filme } = route.params;

  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <ImageBackground
          style={estilos.imagem}
          source={
            filme.backdrop_path
              ? {
                  uri: `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`,
                }
              : fotoAlternativa
          }
        >
          <Text style={estilos.titulo}> {filme.title} </Text>
        </ImageBackground>

        <View style={estilos.conteudo}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text>
              Avaliação: {filme.vote_average} | Lançamento:
              {formataData(filme.release_date)}
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
  safeContainer: { flex: 1 },
  container: {
    flex: 1,
    /* aplicado aqui pois no iOS não funciona direto na SafeAreaView */
    // padding: 8,
  },
  imagem: {
    height: 200,
    justifyContent: "center",
  },
  titulo: {
    backgroundColor: "rgba(0,0,0, 0.75)",
    color: "white",
    textAlign: "center",
    padding: 16,
    fontWeight: "bold",
    fontSize: 16,
  },
  conteudo: {
    flex: 1 /* necessário para o scrollview funcionar */,
    padding: 16,
  },
  descricao: {
    fontSize: 16,
    lineHeight: 20,
    marginVertical: 8,
  },
});
