import React from "react";
import classNames from "classnames";
import ColorPicker from "../color-picker";
import styles from "./styles.module.scss";

const LEFT_BUTTON_BIT_MASK = 1;
const INITIAL_ALIVE_CELL_COLOR = "#E55743";

const onAliveCellColorChange = color => {
  document.documentElement.style.setProperty("--alive-cell-color", color);
};

onAliveCellColorChange(INITIAL_ALIVE_CELL_COLOR);

const Grid = ({ grid, onCellToggle }) => {
  return (
    <div className={styles.main}>
      <ColorPicker
        className={styles.colorPicker}
        initialColor={INITIAL_ALIVE_CELL_COLOR}
        onChange={onAliveCellColorChange}
      />

      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((isAlive, cellIndex) => (
            <span
              key={`${cellIndex}-${isAlive}`}
              className={classNames(styles.cell, {
                [styles.alive]: isAlive
              })}
              onMouseEnter={event => {
                if (event.buttons & LEFT_BUTTON_BIT_MASK) {
                  onCellToggle(rowIndex, cellIndex);
                }
              }}
              onTouchMove={event => {
                console.log(event);
                onCellToggle(rowIndex, cellIndex);
              }}
              onClick={() => onCellToggle(rowIndex, cellIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
