import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Homepage = ({ navigation }) => {
  const handlePress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.hometext}>WELCOME TO FOOD SHOP</Text>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.textButton}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  hometext: {
    padding: 20,
    textAlign: "center",
    fontSize: 20,
  },
  button: {
    width: 350,
    height: 50,
    backgroundColor: "#0050C8",
    borderRadius: 4,
    marginHorizontal: 35,
    marginTop: 40,
  },
  textButton: {
    textAlign: "center",
    justifyContent: "center",
    padding: 10,
    color: "#fff",
    fontSize: 20,
  },
});
