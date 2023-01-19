import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PokemonDetails from "../components/PokemonDetails";
import usePokemon from "../hooks/usePokemon";
import { RootStackParams } from "../navigator/Navigator";
import { pokemonAdded, pokemonRemoved } from "../state/pokemonSlice";
import { useAppDispatch, useAppSelector } from "../state/hooks";

interface Props extends StackScreenProps<RootStackParams, "PokemonScreen"> {}

export default function PokemonScreen({ navigation, route }: Props) {
  const { top } = useSafeAreaInsets();

  const { simplePokemon, color } = route.params;
  const { id, name, picture } = simplePokemon;
  const { isLoading, pokemon } = usePokemon(id);

  const split = id.split("");
  const [number, setNumber] = useState("");

  const pokemons = useAppSelector((store) => store.pokemons);
  const dispatch = useAppDispatch();

  const handleSaveRemove = () => {
    dispatch(
      pokemonAdded({
        simplePokemon: simplePokemon,
        color: color,
      })
    );
    pokemons.map((item) => {
      if (item.pokemon.id === simplePokemon.id) {
        dispatch(pokemonRemoved(simplePokemon.id));
      }
    });
  };

  useEffect(() => {
    if (split.length === 1) {
      setNumber("00" + id);
    } else if (split.length === 2) {
      setNumber("0" + id);
    } else {
      setNumber(id);
    }
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: color }}>
      {/* Header */}
      <View style={{ ...styles.headerContainer, backgroundColor: color }}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.8}
          style={{ ...styles.backButton, top: top + 5 }}
        >
          <Image source={require("../assets/arrowWhite.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ ...styles.heartButton, top: top + 15 }}
          onPress={handleSaveRemove}
        >
          <Image source={require("../assets/heartWhite.png")} />
        </TouchableOpacity>

        {/* Pokemon Id */}
        <View
          style={{
            flexDirection: "row",
            top: top + 50,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              ...styles.pokemonName,
              width: 200,
              right: 33,
            }}
          >
            {name}
          </Text>
          <Text style={{ ...styles.pokemonName, left: 37 }}>#{number}</Text>
        </View>
        {!isLoading && (
          <View
            style={{
              flexDirection: "row",
              top: top + 40,
              alignItems: "flex-start",
              width: 342,
            }}
          >
            {pokemon.types.map(({ type }) => (
              <Text style={styles.pokemonTypes} key={type.url}>
                {type.name}
              </Text>
            ))}
          </View>
        )}

        {/* Pokeball */}
        <Image
          source={require("../assets/pokeball.png")}
          style={styles.pokeball}
        />
        <Image source={{ uri: picture }} style={styles.pokemonImage} />
      </View>

      {/* Details */}
      {isLoading ? (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator color={color} size={50} />
        </View>
      ) : (
        <PokemonDetails pokemon={pokemon} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: { height: 380, zIndex: 999, alignItems: "center" },
  backButton: { position: "absolute", left: 18 },
  heartButton: { position: "absolute", right: 20 },
  pokemonName: {
    color: "white",
    fontSize: 35,
    textTransform: "capitalize",
  },
  pokemonTypes: {
    color: "white",
    fontSize: 20,
    textTransform: "capitalize",
    width: 70,
  },
  pokeball: {
    width: 200,
    height: 200,
    top: 200,
    opacity: 0.5,
    position: "absolute",
  },
  pokemonImage: {
    width: 220,
    height: 220,
    position: "absolute",
    bottom: -35,
    zIndex: 1,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    zIndex: 1,
  },
});
