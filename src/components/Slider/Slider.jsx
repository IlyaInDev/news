import React, { useRef } from 'react';
import styles from './styles.module.css'

export const Slider = (props) => {
  const {
    children,
    step = 150
  } = props;

  const sliderRef = useRef(null);

  const moveLeft = () => {
    sliderRef.current.scrollLeft -= step;
  }

  const moveRight = () => {
    sliderRef.current.scrollLeft += step;
  }

  return (
    <div className={styles.slider}>
        <button className={styles.arrow} onClick={moveLeft}>{`<`}</button>

        {React.cloneElement(children, { ref: sliderRef })}

        <button className={styles.arrow} onClick={moveRight}>{`>`}</button>
    </div>
  )
}
