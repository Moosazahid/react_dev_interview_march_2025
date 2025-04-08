import axios from "axios";

const BASE_URL = import.meta.env.REACT_APP_POKEMON_BASE_URL;

export const getRandomPokemon = async () => {
  try {
    const id = Math.floor(Math.random() * 898) + 1;
    const { data } = await axios.get(`${BASE_URL}pokemon/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    return null;
  }
};
