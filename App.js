import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Favoritos from "./src/screen/Favoritos";
import Home from "./src/screen/Home";
import Privacidade from "./src/screen/Privacidade";
import Sobre from "./src/screen/Sobre";
import FormBusca from "./src/screen/FormBusca";

/* import Home from "./src/screen/Home"; */

const App = () => {
  // Gerenciador de navegação Stack (pilha de telas)
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar />
      {/* O navigationContainer deve envolver todas as telas navegáveis do nosso App. */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={
             headerStyle: {
              backgroundColor "$5451a6",
            {
              headerTintColor: "white",
          })
          }
        >
          <Stack.Screen
            component={Home}
            name="Home"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={FormBusca}
            name="FormBusca"
            options={{ title: "Buscar filmes" }}
          />
          <Stack.Screen component={Favoritos} name="Favoritos" />
          <Stack.Screen component={Privacidade} name="Privacidade" />
          <Stack.Screen component={Sobre} name="Sobre" />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
