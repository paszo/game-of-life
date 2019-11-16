import React from "react";
import Grid from "../grid";
import FancyButton from "../../components/fancy-button";
import { useGameOfLifeState, GameState } from "../../state";
import styles from "./styles.module.scss";

const App = () => {
  const {
    gameState,
    grid,
    generation,
    onCellToggle,
    onGameStateToggle,
    onGameStart
  } = useGameOfLifeState();

  return (
    <>
      <div className={styles.generation}>
        Generation:&nbsp;
        <span className={styles.generationNumber}>{generation}</span>
      </div>
      <div className={styles.wrapper}>
        <FancyButton onClick={onGameStateToggle}>
          {gameState === GameState.Paused && "Start"}
          {gameState !== GameState.Paused && "Pause"}
        </FancyButton>
        <button className={styles.resetGame} onClick={onGameStart}>
          Reset
        </button>
        <Grid grid={grid} onCellToggle={onCellToggle} />
      </div>
    </>
  );
};

export default App;
