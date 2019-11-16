import { useState, useEffect, useCallback, useRef } from 'react';
import { updateMatrixValueAtAddress } from '../../utils/array';
import { getNextGenerationMatrix } from './helpers';

const INITIAL_BOARD_SIZE = { width: 35, height: 35 };
const INTERVAL = 50;

export const GameState = {
  Started: 'started',
  Paused: 'paused'
};

export const useGameOfLifeState = () => {
  const [ gameState, setGameState ] = useState(GameState.Paused);
  const [ gridSize, setGridSize ] = useState(INITIAL_BOARD_SIZE);
  const [ grid, setGrid ] = useState([]);
  const [ generation, setGeneration ] = useState(0);
  const intervalIdRef = useRef(null);

  const onGameStart = useCallback(() => {
    const { width, height } = gridSize;
    const newGrid = Array.from({ length: height }, () =>
      Array.from({ length: width }, () => false)
    );
    clearInterval(intervalIdRef.current);
    setGameState(GameState.Paused);
    setGrid(newGrid);
    setGeneration(0);
  }, [ gridSize ]);

  useEffect(onGameStart, [ gridSize ]);

  useEffect(() => {
    if (gameState === GameState.Paused) {
      clearInterval(intervalIdRef.current);
      return;
    }

    intervalIdRef.current = setInterval(() => {
      setGeneration(generation => generation + 1);
      setGrid(getNextGenerationMatrix);
    }, INTERVAL);
  }, [ gameState ]);

  const onCellToggle = useCallback((rowIndex, columnIndex) => {
    setGrid(grid => {
      const value = grid[rowIndex][columnIndex];
      return updateMatrixValueAtAddress(grid, rowIndex, columnIndex, !value);
    });
  }, []);

  const onGameStateToggle = useCallback(() => {
    const newGameState = gameState === GameState.Paused
      ? GameState.Started
      : GameState.Paused;
    setGameState(newGameState);
  }, [ gameState ]);

  return { gameState, grid, generation, onCellToggle, onGameStateToggle, gridSize, setGridSize, onGameStart };
};
