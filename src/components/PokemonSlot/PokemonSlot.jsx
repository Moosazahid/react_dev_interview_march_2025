import React from "react";
import "./PokemonSlot.css";

const PokemonSlot = ({ pokemon, onReplace, onRemove, index }) => {
  if (!pokemon) {
    return (
      <div className="pokemon-slot-empty">
        <p className="pokemon-slot-empty-text">Empty Slot</p>
      </div>
    );
  }

  const hp = pokemon.stats.find((s) => s.stat.name === "hp")?.base_stat || 0;
  const attack =
    pokemon.stats.find((s) => s.stat.name === "attack")?.base_stat || 0;
  const defense =
    pokemon.stats.find((s) => s.stat.name === "defense")?.base_stat || 0;

  return (
    <div className="pokemon-slot">
      <div className="pokemon-header">
        <h2 className="pokemon-name">{pokemon.name}</h2>
        {pokemon.sprites && (
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="pokemon-image"
          />
        )}
      </div>

      <div className="pokemon-stats">
        <p>
          <span className="label">Experience:</span> {pokemon.base_experience}
        </p>
        <p>
          <span className="label">Weight:</span> {pokemon.weight}
        </p>
        <p>
          <span className="label">Species:</span> {pokemon.species.name}
        </p>
        <p>
          <span className="label">Types:</span>{" "}
          {pokemon.types.map((t) => t.type.name).join(", ")}
        </p>
        <div className="pokemon-moves">
          <p className="label">Moves:</p>
          <ul>
            {pokemon.moves.slice(0, 3).map((m, i) => (
              <li key={i}>{m.move.name}</li>
            ))}
          </ul>
        </div>
        <div className="pokemon-stat-grid">
          <div className="pokemon-stat-item">
            <p className="label">HP</p>
            <p>{hp}</p>
          </div>
          <div className="pokemon-stat-item">
            <p className="label">ATK</p>
            <p>{attack}</p>
          </div>
          <div className="pokemon-stat-item">
            <p className="label">DEF</p>
            <p>{defense}</p>
          </div>
        </div>
      </div>

      <div className="pokemon-buttons">
        <button
          className="pokemon-button pokemon-button-replace"
          onClick={() => onReplace(index)}
        >
          Replace This Pokemon
        </button>
        <button
          className="pokemon-button pokemon-button-remove"
          onClick={() => onRemove(index)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default PokemonSlot;
