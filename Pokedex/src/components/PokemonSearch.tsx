import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useAppDispatch } from "../state/hooks";
import { pokemonRemoved } from "../state/pokemonSlice";

export default function PokemonSearch({ pokemons, search }) {
  const dispatch = useAppDispatch();

  return (
    <FlatList
      data={pokemons}
      renderItem={({ item }) => {
        if (search === "") {
          return (
            <View
              style={{ ...styles.pokemonView, backgroundColor: item.color }}
            >
              <Text style={styles.number}>#{item.pokemon.id}</Text>
              <Text style={styles.name}>{item.pokemon.name}</Text>
              <Image
                style={styles.pokemonImage}
                source={{ uri: item.pokemon.picture }}
              />
              <Image
                style={styles.pokemonBall}
                source={require("../assets/pokeball.png")}
              />
              <TouchableOpacity
                style={styles.pokemonHeart}
                onPress={() => dispatch(pokemonRemoved(item.pokemon.id))}
              >
                <Image
                  style={{ width: 22, height: 20 }}
                  source={require("../assets/heartWhite.png")}
                />
              </TouchableOpacity>
            </View>
          );
        }
        if (
          item.pokemon.name.toLowerCase().includes(search.toLowerCase()) ||
          item.pokemon.id.includes(search)
        ) {
          return (
            <View
              style={{ ...styles.pokemonView, backgroundColor: item.color }}
            >
              <Text style={styles.number}>#{item.pokemon.id}</Text>
              <Text style={styles.name}>{item.pokemon.name}</Text>
              <Image
                style={styles.pokemonImage}
                source={{ uri: item.pokemon.picture }}
              />
              <Image
                style={styles.pokemonBall}
                source={require("../assets/pokeball.png")}
              />
              <TouchableOpacity
                style={styles.pokemonHeart}
                onPress={() => dispatch(pokemonRemoved(item.pokemon.id))}
              >
                <Image
                  style={{ width: 22, height: 20 }}
                  source={require("../assets/heartWhite.png")}
                />
              </TouchableOpacity>
            </View>
          );
        }
      }}
    />
  );
}

const styles = StyleSheet.create({
  pokemonView: {
    height: 120,
    borderRadius: 20,
    marginTop: 20,
    paddingLeft: 20,
  },
  pokemonBall: {
    height: 120,
    width: 120,
    position: "absolute",
    right: 0,
    opacity: 0.1,
  },
  pokemonImage: {
    height: 90,
    width: 90,
    position: "absolute",
    right: 15,
    top: 15,
    zIndex: 999,
  },
  pokemonHeart: {
    position: "absolute",
    right: 10,
    top: 8,
  },
  number: {
    fontSize: 15,
    marginTop: 20,
    opacity: 0.5,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
  },
});
