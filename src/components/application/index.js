import React from "react";
import Grid from "../grid";
import FancyButton from "../fancy-button";
import { useGameOfLifeState, GameState } from "./state";
import styles from "./styles.module.scss";

const Application = () => {
  const {
    gameState,
    grid,
    generation,
    onCellToggle,
    onGameStateToggle,
    onGameStart
  } = useGameOfLifeState();

  return (
    <div className={styles.main}>
      <div className={styles.generation}>Generation: {generation}</div>
      <FancyButton onClick={onGameStateToggle}>
        {gameState === GameState.Paused && "Start"}
        {gameState !== GameState.Paused && "Pause"}
      </FancyButton>
      <button className={styles.resetGame} onClick={onGameStart}>
        Reset
      </button>
      <Grid grid={grid} onCellToggle={onCellToggle} />
    </div>
  );
};

export default Application;
