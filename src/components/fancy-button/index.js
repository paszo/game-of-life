import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const FancyButton = ({ className, ...restProps }) => (
  <button className={classNames(className, styles.fancyButton)} {...restProps} />
);

export default FancyButton;
