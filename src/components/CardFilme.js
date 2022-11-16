import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const CardFilme = ({ filme }) => {
  const { title, poster_path } = filme;
  return (
    <View>
      <Image
        style={estilos.imagem}
        resizeMode="contain"
        source={{
          uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
        }}
      />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}> {title} </Text>

        <View style={estilos.botoes}>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="book" size={16} color="#5451a6" /> Leia mais
            </Text>
          </Pressable>

          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="cloud" size={16} color="#5451a6" /> Salvar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CardFilme;

const estilos = StyleSheet.create({
  imagem: {
    height: 300,
  },
  titulo: {
    backgroundColor: "#5451a6",
    color: "white",
    fontSize: 16,
    paddingVertical: 8,
    textAlign: "center",
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
  },
  botao: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#5451a6",
  },
  textoBotao: {
    color: "#5451a6",
    fontSize: 12,
    textTransform: "uppercase",
  },
});
