import React, { useState } from "react";
import { getRandomPokemon } from "./api";
import PokemonSlot from "./components/PokemonSlot/PokemonSlot";
import TeamStats from "./components/TeamStats/TeamStats";
import "./App.css";

const App = () => {
  const [team, setTeam] = useState(Array(6).fill(null));
  const [isLoading, setIsLoading] = useState(false);

  const assembleTeam = async () => {
    setIsLoading(true);
    try {
      const newTeam = await Promise.all(
        Array(6)
          .fill()
          .map(() => getRandomPokemon())
      );
      setTeam(newTeam.filter((pokemon) => pokemon !== null));
    } catch (error) {
      console.error("Error assembling team:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const replacePokemon = async (index) => {
    try {
      const newPoke = await getRandomPokemon();
      if (newPoke) {
        setTeam(team.map((poke, i) => (i === index ? newPoke : poke)));
      }
    } catch (error) {
      console.error("Error replacing Pokémon:", error);
    }
  };

  const removePokemon = (index) => {
    setTeam(team.map((poke, i) => (i === index ? null : poke)));
  };

  return (
    <div className="container">
      <h1 className="title">PokeTeam Creator!</h1>

      <div className="grid">
        {team.map((poke, i) => (
          <PokemonSlot
            key={i}
            pokemon={poke}
            index={i}
            onReplace={replacePokemon}
            onRemove={removePokemon}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="button" onClick={assembleTeam} disabled={isLoading}>
          {isLoading
            ? "Loading..."
            : team.every((p) => p)
            ? "Make All New Team"
            : "Assemble my PokeTeam!"}
        </button>
      </div>

      <TeamStats team={team} />
    </div>
  );
};

export default App;
