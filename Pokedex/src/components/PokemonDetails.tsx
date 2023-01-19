import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { PokemonFull } from "../interfaces/pokemonInterfaces";

interface Props {
  pokemon: PokemonFull;
}

export default function PokemonDetails({ pokemon }: Props) {
  const [total, setTotal] = useState("");
  let green = "#7FC99B";
  let red = "#DD6571";

  const [toggle, setToggle] = useState({
    about: false,
    baseStats: true,
    evolution: false,
    moves: false,
  });

  const clickAbout = () => {
    setToggle({
      about: true,
      baseStats: false,
      evolution: false,
      moves: false,
    });
  };
  const clickBase = () => {
    setToggle({
      about: false,
      baseStats: true,
      evolution: false,
      moves: false,
    });
  };
  const clickEvolution = () => {
    setToggle({
      about: false,
      baseStats: false,
      evolution: true,
      moves: false,
    });
  };
  const clickMoves = () => {
    setToggle({
      about: false,
      baseStats: false,
      evolution: false,
      moves: true,
    });
  };

  useEffect(() => {
    let a = [];
    pokemon.stats.map(({ base_stat }) => {
      a.push(base_stat);
    });
    setTotal(a.reduce((a, b) => a + b, 0));
  }, []);

  return (
    // Buttons
    <View style={styles.container}>
      <View style={styles.buttonsView}>
        <TouchableOpacity
          style={{ flexDirection: "column" }}
          onPress={clickAbout}
        >
          <Text style={styles.buttonText}>About</Text>
          {toggle.about && (
            <View style={{ ...styles.buttonBg, width: 54, height: 3 }}></View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "column" }}
          onPress={clickBase}
        >
          <Text style={styles.buttonText}>Base Stats</Text>
          {toggle.baseStats && (
            <View style={{ ...styles.buttonBg, width: 96, height: 3 }}></View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: "column" }}
          onPress={clickEvolution}
        >
          <Text style={styles.buttonText}>Evolution</Text>
          {toggle.evolution && (
            <View style={{ ...styles.buttonBg, width: 82, height: 3 }}></View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "column" }}
          onPress={clickMoves}
        >
          <Text style={styles.buttonText}>Moves</Text>
          {toggle.moves && (
            <View style={{ ...styles.buttonBg, width: 58, height: 3 }}></View>
          )}
        </TouchableOpacity>
      </View>

      {/* BaseStats */}
      {toggle.baseStats && (
        <View style={styles.containerBaseStats}>
          <View style={styles.statView}>
            {pokemon.stats.map(({ stat }) => (
              <Text key={stat.name} style={styles.statText}>
                {stat.name}
              </Text>
            ))}
            <Text style={styles.statText}>total</Text>
          </View>
          <View style={styles.statNumberView}>
            {pokemon.stats.map(({ base_stat }) => (
              <Text style={styles.statText}>{base_stat}</Text>
            ))}
            <Text style={styles.statText}>{total}</Text>
          </View>
          <View style={styles.statSliderView}>
            {pokemon.stats.map(({ base_stat }) =>
              +base_stat > 50 ? (
                <View style={styles.positioningSliders}>
                  <View
                    style={{ ...styles.statSliders, backgroundColor: green }}
                  />
                </View>
              ) : (
                <View style={styles.positioningSliders}>
                  <View
                    style={{ ...styles.statSliders, backgroundColor: red }}
                  />
                </View>
              )
            )}
            <View style={styles.positioningSliders}>
              <View style={{ ...styles.statSliders, backgroundColor: green }} />
            </View>
          </View>
        </View>
      )}

      {/* About */}
      {toggle.about && (
        <View style={styles.containerAbout}>
          <Text style={styles.statText}>
            Base Exp. : {pokemon.base_experience}
          </Text>
          <View style={styles.containerAboutFlex}>
            <Text style={styles.statText}>Abilities : </Text>
            <View style={{ flexDirection: "column" }}>
              {pokemon.abilities.map((ability) => (
                <Text style={{ ...styles.statText, marginRight: 10 }}>
                  {ability.ability.name}
                </Text>
              ))}
            </View>
          </View>
          <Text style={styles.statText}>Species : {pokemon.species.name}</Text>

          <Text style={styles.statText}>Height : {pokemon.height}</Text>
          <Text style={styles.statText}>Weight : {pokemon.weight}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  buttonsView: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    marginBottom: 10,
  },
  buttonBg: {
    backgroundColor: "purple",
  },
  containerBaseStats: { flexDirection: "row", marginHorizontal: 16 },
  statView: {
    flexDirection: "column",
    width: 135,
  },
  statNumberView: {
    flexDirection: "column",
    width: 35,
  },
  statSliderView: {
    flexDirection: "column",
  },
  statText: {
    fontSize: 18,
    marginBottom: 10,
    textTransform: "capitalize",
  },
  statSliders: {
    width: 190,
    height: 8,
    borderRadius: 20,
  },
  positioningSliders: {
    height: 27,
    justifyContent: "center",
    marginBottom: 7,
  },
  containerAbout: {
    marginHorizontal: 16,
  },
  containerAboutFlex: {
    flexDirection: "row",
  },
});
