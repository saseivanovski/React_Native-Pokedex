import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 16,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pokeballBG: {
    width: 220,
    height: 220,
    position: "absolute",
    top: -50,
    right: -67,
    opacity: 0.2,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 60,
  },
});
