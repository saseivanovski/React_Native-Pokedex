import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function MyAccount() {
  return (
    <View style={styles.container}>
      <Image style={styles.pokemon} source={require("../assets/pokemon.png")} />
      <Text style={styles.headerText}>PROFILE CUSTOMIZATION</Text>
      <TextInput
        style={styles.inputs}
        placeholder="Full name"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity style={styles.buttons}>
        <Text>Change name</Text>
      </TouchableOpacity>
      <Text style={{ ...styles.headerText, marginTop: 30 }}>
        EMAIL AND PASSWORD
      </Text>
      <TextInput
        style={styles.inputs}
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity style={styles.buttons}>
        <Text>Change email</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.inputs}
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity style={styles.buttons}>
        <Text>Change password</Text>
      </TouchableOpacity>
      <Text style={{ ...styles.headerText, marginTop: 30 }}>
        DELETE ACCOUNT
      </Text>
      <TouchableOpacity style={styles.buttons}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pokemon: {
    width: 350,
    height: 200,
  },
  inputs: {
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    height: 40,
    paddingHorizontal: 20,
    width: 280,
    marginVertical: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttons: {
    width: 120,
    height: 30,
    backgroundColor: "#7FC99B",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
