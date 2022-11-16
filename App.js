import { Button, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Favoritos from "./src/screen/Favoritos";
import FormBusca from "./src/screen/FormBusca";
import Home from "./src/screen/Home";
import Privacidade from "./src/screen/Privacidade";
import Sobre from "./src/screen/Sobre";
import Resultados from "./src/screen/Resultados";
import Detalhes from "./src/screen/Detalhes";

const App = () => {
  /* Inicializando através de uma constante
  o gerenciador de navegação Stack (pilha de telas) */
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar />

      {/* O NavigationContainer deve envolver todas as telas
      navegáveis do nosso App. */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#5451a6",
            },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            component={Home}
            name="Home"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            component={FormBusca}
            name="FormBusca"
            options={{
              title: "Buscar Filmes",
            }}
          />

          <Stack.Screen component={Favoritos} name="Favoritos" />
          <Stack.Screen component={Privacidade} name="Privacidade" />
          <Stack.Screen component={Sobre} name="Sobre" />
          <Stack.Screen component={Resultados} name="Resultados" />
          <Stack.Screen
            component={Detalhes}
            name="Detalhes"
            options={() => {
              return {
                headerRight: () => (
                  <Button
                    style={estilos.texto}
                    onPress={() => NavigationContainer.navigate("Home")}
                    title="Home"
                    color="white"
                  />
                ),
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const estilos = StyleSheet.create({});
