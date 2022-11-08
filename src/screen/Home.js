import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import logo from "../../assets/images/logo.png";
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const [fonteCarregada] = useFonts({
    // instalar no terminal (npm install expo-font)
    monoton: require("../../assets/fonts/Monoton-Regular.ttf"),
  });

  if (!fonteCarregada) return <Text>Fonte sendo carregada...</Text>;
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Image style={estilos.logo} source={logo} />
        <Text style={estilos.tituloApp}>Da hora filmes</Text>
      </View>

      <View style={estilos.viewBotoes}>
        <Pressable
          style={estilos.botaoInicial}
          onPress={() => {
            navigation.navigate("FormBusca");
          }}
        >
          <Text style={estilos.textoBotao}>
            <Ionicons name="film-outline" size={16} color="white" /> Buscar
            Filmes
          </Text>
        </Pressable>

        <Pressable
          style={estilos.botaoInicial}
          onPress={() => {
            navigation.navigate("Favoritos");
          }}
        >
          <Text style={estilos.textoBotao}>
            <Ionicons name="star" size={16} color="gold" /> Favoritos
          </Text>
        </Pressable>
      </View>

      <View style={estilos.viewRodape}>
        <Pressable
          onPress={() => {
            navigation.navigate("Privacidade");
          }}
        >
          <Text style={estilos.textoBotao}>
            <Ionicons name="lock-closed" size={16} color="white" /> Privacidade
          </Text>
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("Sobre");
          }}
        >
          <Text style={estilos.textoBotao}>
            <Ionicons name="information-circle" size={16} color="white" /> Sobre
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;
/* const corPrimaria = "#5451a6"; */

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewLogo: {
    flex: 3,
    /* width: "80%", */
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  /* logo: {
      width: 128,
      height: 128,
    }, */
  tituloApp: {
    fontSize: 36,
    fontFamily: "monoton",
    color: "#5451a6",
    //fontWeight: "bold",
  },
  viewBotoes: {
    flex: 2, // Espaço ocupado do
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "80%",
  },
  botaoInicial: {
    borderStyle: "solid",
    borderWidth: 2,
    padding: 16,
    backgroundColor: "#5451a6",
  },
  textoBotao: {
    color: "white",
  },
  viewRodape: {
    flex: 0.5,
    backgroundColor: "#5451a6",
    flexDirection: "row", //deixa lado a lado
    justifyContent: "space-between", // dá espaço entre o conteúdo
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
  },
});
