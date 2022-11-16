import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Detalhes = ({ route }) => {
  /* console.log(route); */

  const { filme } = route.params;
  console.log(filme);
  return (
    <SafeAreaView>
      <Text>detalhes</Text>
    </SafeAreaView>
  );
};

export default Detalhes;

const styles = StyleSheet.create({});
