import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

const App = () => {
  const [fonteCarregada] = useFonts({
    // instalar no terminal (npm install expo-font)
    monoton: require("./assets/fonts/Monoton-Regular.ttf"),
  });

  if (!fonteCarregada) return <Text>Fonte sendo carregada...</Text>;

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Text style={estilos.tituloApp}>Da hora filmes</Text>
      </View>

      <View style={estilos.viewBotoes}>
        <Button title="Buscar filmes" />
        <Button title="Favoritos" />
      </View>

      <View style={estilos.viewRodape}>
        <Button title="Privacidade" />
        <Button title="Sobre" />
      </View>
    </SafeAreaView>
  );
};

export default App;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewLogo: {
    flex: 3,
    width: "80%",
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
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
  viewRodape: {
    flex: 0.5,
    flexDirection: "row", //deixa lado a lado
    justifyContent: "space-between", // dá espaço entre o conteúdo
    alignItems: "align-itens",
    width: "80%",
  },
});
