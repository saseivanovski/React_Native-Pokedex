import { createSlice } from "@reduxjs/toolkit";

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: [],
  reducers: {
    pokemonAdded(state, action) {
      state.push({
        pokemon: action.payload.simplePokemon,
        color: action.payload.color,
      });
    },
    pokemonRemoved(state, action) {
      const id = action.payload;
      let copy = [...state];
      let filteredState = copy.filter((item) => item.pokemon.id !== id);
      return filteredState;
    },
  },
});
export const { pokemonAdded, pokemonRemoved } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
