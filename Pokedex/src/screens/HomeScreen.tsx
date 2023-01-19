import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PokemonCard from "../components/PokemonCard";
import usePokemonPaginated from "../hooks/usePokemonPaginated";
import { styles } from "../theme/appTheme";

export default function HomeScreen() {
  const { top } = useSafeAreaInsets();
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();

  return (
    <>
      <Image
        source={require("../assets/pokeball.png")}
        style={styles.pokeballBG}
      />

      <View style={{ ...styles.globalMargin, alignItems: "center" }}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={(pokemon) => pokemon.id}
          numColumns={2}
          //Header
          ListHeaderComponent={
            <>
              <View
                style={{
                  ...styles.buttons,
                  ...styles.globalMargin,
                  top: top + 8,
                }}
              >
                <TouchableOpacity>
                  <Image
                    style={{ right: 10 }}
                    source={require("../assets/arrow.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={{ left: 16 }}
                    source={require("../assets/menu.png")}
                  />
                </TouchableOpacity>
              </View>
              <Text style={{ ...styles.title, top: top + 15, left: 9 }}>
                Pokedex
              </Text>
            </>
          }
          //Card
          renderItem={({ item }) => <PokemonCard pokemonOne={item} />}
          //Scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator style={{ height: 100 }} size={20} color="grey" />
          }
        />
      </View>
    </>
  );
}
