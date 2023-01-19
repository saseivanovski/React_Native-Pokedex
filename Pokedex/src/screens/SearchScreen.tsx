import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PokemonSearch from "../components/PokemonSearch";
import { useAppSelector, useAppDispatch } from "../state/hooks";

export default function SearchScreen() {
  const { top } = useSafeAreaInsets();
  const pokemons = useAppSelector((store) => store.pokemons);

  const [search, setSearch] = useState("");

  return (
    <View style={{ ...styles.topContainer, top: top + 25 }}>
      <Image
        style={styles.pokeball}
        source={require("../assets/pokeball.png")}
      />
      <Text style={styles.title}>Pokedex</Text>
      <Text style={{ fontSize: 17 }}>
        Search for Pokemon by name or by using the National Pokedex number.
      </Text>
      <View style={styles.textInputView}>
        <Image style={styles.search} source={require("../assets/search.png")} />
        <TextInput
          placeholder="What Pokemon are you looking for"
          autoCapitalize="none"
          autoCorrect={false}
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>

      <PokemonSearch pokemons={pokemons} search={search} />
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    marginHorizontal: 16,
    paddingBottom: 250,
  },
  pokeball: {
    width: 380,
    height: 380,
    position: "absolute",
    opacity: 0.1,
    right: -10,
    top: -265,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textInputView: {
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    height: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  search: {
    position: "absolute",
    left: 30,
  },
});
