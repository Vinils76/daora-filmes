import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Favoritos = () => {
  const [listaFavoritos, setListaFavoritos] = useState([]);

  useEffect(() => {
    async function carregarFavoritos() {
      try {
        const dados = await AsyncStorage.getItem("@favoritos");
        const filmes = JSON.parse(dados);
        if (dados != null) {
          setListaFavoritos(filmes);
        }
      } catch (error) {
        console.log("Deu ruim no carregamento " + error.message);
      }
    }
    carregarFavoritos();
  }, []);

  const excluirFavoritos = async () => {
    await AsyncStorage.clear("@favoritos");
    return;
  };

  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <Text>Quantidade: {listaFavoritos.length}</Text>
        <Button title="Excluir favoritos" onPress={excluirFavoritos} />

        {listaFavoritos.map((filmeFavorito) => {
          return <Text key={filmeFavorito.id}> {filmeFavorito.title}</Text>;
        })}
      </View>
    </SafeAreaView>
  );
};

export default Favoritos;

const estilos = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    padding: 8,
    flex: 1,
  },
});
