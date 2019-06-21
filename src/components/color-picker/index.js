import React, { useState, useCallback } from 'react';
import { SketchPicker } from 'react-color';
import styles from './styles.module.scss';

const DEFAULT_COLOR = '#000';

const ColorPicker = ({ className, initialColor = DEFAULT_COLOR, onChange }) => {
  const [ color, setColor ] = useState(initialColor);
  const [ isColorPickerVisible, setIsColorPickerVisible ] = useState()

  const onColorChange = useCallback((color) => {
    setColor(color.hex);
    onChange(color.hex);
  }, [ onChange ]);

  const toggleColorPickerVisibility = useCallback(() => {
    setIsColorPickerVisible(visible => !visible);
  }, []);

  return (
    <div className={className}>
      <div
        className={styles.colorPreview}
        style={{ backgroundColor: color }}
        onClick={toggleColorPickerVisibility} />

      {isColorPickerVisible && (
        <SketchPicker
          className={styles.colorPickerContainer}
          color={color}
          onChange={onColorChange} />
      )}
    </div>
  );
};

export default ColorPicker;
