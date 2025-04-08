import React from "react";
import "./TeamStats.css";

const TeamStats = ({ team }) => {
  const totals = team.reduce(
    (acc, poke) => {
      if (!poke) return acc;

      const hp = poke.stats.find((s) => s.stat.name === "hp")?.base_stat || 0;
      const attack =
        poke.stats.find((s) => s.stat.name === "attack")?.base_stat || 0;
      const defense =
        poke.stats.find((s) => s.stat.name === "defense")?.base_stat || 0;

      return {
        hp: acc.hp + hp,
        attack: acc.attack + attack,
        defense: acc.defense + defense,
      };
    },
    { hp: 0, attack: 0, defense: 0 }
  );

  return (
    <div className="team-stats">
      <h3 className="team-stats-title">Team Stats</h3>
      <div className="team-stats-grid">
        <div className="team-stats-item">
          <p className="team-stats-label">Total Hit Points</p>
          <p className={`team-stats-value hp`}>{totals.hp}</p>
        </div>
        <div className="team-stats-item">
          <p className="team-stats-label">Total Attack</p>
          <p className={`team-stats-value attack`}>{totals.attack}</p>
        </div>
        <div className="team-stats-item">
          <p className="team-stats-label">Total Defense</p>
          <p className={`team-stats-value defense`}>{totals.defense}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamStats;
