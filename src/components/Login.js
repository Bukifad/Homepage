import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

const Login = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("homepage");
  };

  const textInputs = { username: "", password: "" };

  const [inputValues, setInputValues] = useState(textInputs);
  const [inputErrors, setInputErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handlechange = (value) => {
    // const { name, value } = e.target;
    setInputValues({ ...inputValues, ...value });
  };
  const handleSubmit = () => {
    const validateErrors = validate(inputValues);

    if (validateErrors.username || validateErrors.password) {
      setInputErrors(validateErrors);
    } else {
      handlePress();
    }
  };

  useEffect(() => {
    console.log(inputErrors);
    if (Object.keys(inputErrors).lenght === 0 && isSubmit) {
      console.log(inputErrors);
    }
  }, [inputErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (values.username === "") {
      errors.username = "username is required!";
    }
    if (values.password === "") {
      errors.password = "password is required!";
    }
    return errors;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>SIGN IN</Text>
      <Text style={styles.head}>Hello oluwabukola</Text>

      <SafeAreaView style={styles.input}>
        <TextInput
          style={styles.inputbox}
          placeholder={"username"}
          value={inputValues.username}
          onChangeText={(username) => handlechange({ username })}
        />
        <Text>{inputErrors.username}</Text>
        <TextInput
          style={styles.inputbox}
          placeholder={"Password"}
          value={inputValues.password}
          secureTextEntry={true}
          onChangeText={(password) => handlechange({ password })}
        />
        <Text>{inputErrors.password}</Text>
      </SafeAreaView>
      <Text style={styles.text}>forgot Password</Text>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.textButton}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  header: {
    // paddingHorizontal: 30,
    textAlign: "center",
    paddingTop: 120,
    fontSize: 30,
    color: "#393A4A",
  },
  head: {
    textAlign: "center",
    paddingTop: 10,
    fontSize: 20,
    color: "#6B6C7E",
  },
  input: {
    alignItems: "center",
  },
  inputbox: {
    width: "90%",
    height: 60,
    backgroundColor: "#fff",
    borderColor: "#CDCED9",
    color: "black",
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 30,
    marginTop: 25,
  },
  text: {
    color: "orange",
    paddingHorizontal: 25,
    marginTop: 20,
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: "#0050C8",
    borderRadius: 4,
    marginHorizontal: 20,

    marginTop: 30,
  },
  textButton: {
    textAlign: "center",
    padding: 10,
    color: "#fff",
    fontSize: 20,
  },
});
