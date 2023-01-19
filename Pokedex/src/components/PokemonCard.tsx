import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { SimplePokemon } from "../interfaces/pokemonInterfaces";
import usePokemon from "../hooks/usePokemon";
import { POKEMON_TYPE, POKEMON_COLOR } from "../theme/pokemonColors";

const windowWidth = Dimensions.get("window").width;

interface Props {
  pokemonOne: SimplePokemon;
}

export default function PokemonCard({ pokemonOne }: Props) {
  const [bgColor, setBgColor] = useState("grey");
  const navigation = useNavigation<any>();

  const { isLoading, pokemon } = usePokemon(pokemonOne.name);

  useEffect(() => {
    if (!isLoading) {
      switch (pokemon.types[0].type.name) {
        case POKEMON_TYPE.grass:
          return setBgColor(POKEMON_COLOR.grass);
        case POKEMON_TYPE.fire:
          return setBgColor(POKEMON_COLOR.fire);
        case POKEMON_TYPE.water:
          return setBgColor(POKEMON_COLOR.water);
        case POKEMON_TYPE.bug:
          return setBgColor(POKEMON_COLOR.bug);
        case POKEMON_TYPE.normal:
          return setBgColor(POKEMON_COLOR.normal);
        case POKEMON_TYPE.poison:
          return setBgColor(POKEMON_COLOR.poison);
        case POKEMON_TYPE.electric:
          return setBgColor(POKEMON_COLOR.electric);
        case POKEMON_TYPE.ground:
          return setBgColor(POKEMON_COLOR.ground);
        case POKEMON_TYPE.fairy:
          return setBgColor(POKEMON_COLOR.fairy);
        case POKEMON_TYPE.fighting:
          return setBgColor(POKEMON_COLOR.fighting);
        case POKEMON_TYPE.psychic:
          return setBgColor(POKEMON_COLOR.psychic);
        case POKEMON_TYPE.ghost:
          return setBgColor(POKEMON_COLOR.ghost);
        case POKEMON_TYPE.dragon:
          return setBgColor(POKEMON_COLOR.dragon);
        case POKEMON_TYPE.ice:
          return setBgColor(POKEMON_COLOR.ice);
      }
    }
  });

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate("PokemonScreen", {
          simplePokemon: pokemonOne,
          color: bgColor,
        })
      }
    >
      <View
        style={{
          ...styles.cardContainer,
          width: windowWidth * 0.4,
          backgroundColor: bgColor,
        }}
      >
        <View>
          <Text style={styles.name}>{pokemonOne.name}</Text>
          {!isLoading &&
            pokemon.types.map(({ type }) => (
              <View style={styles.typesView} key={type.url}>
                <Image
                  style={styles.typesBgOne}
                  source={require("../assets/white.png")}
                />
                <Text style={styles.types} key={type.url}>
                  {type.name}
                </Text>
              </View>
            ))}
        </View>

        <Image
          source={require("../assets/pokeball.png")}
          style={styles.pokeball}
        />
        <Image
          source={{ uri: pokemonOne.picture }}
          style={styles.pokemonImage}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
  },
  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    top: 10,
    left: 10,
    marginBottom: 10,
    textTransform: "capitalize",
  },
  pokeball: {
    width: 80,
    height: 80,
    position: "absolute",
    bottom: 0,
    right: 0,
    opacity: 0.1,
  },
  pokemonImage: {
    width: 80,
    height: 80,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  typesView: {
    width: 60,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 10,
    height: 23,
  },
  types: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "capitalize",
  },
  typesBgOne: {
    width: 60,
    borderRadius: 10,
    height: 23,
    position: "absolute",
    opacity: 0.2,
  },
});
