import React, { ReactElement, useRef } from 'react';
import styles from './styles.module.css'

interface Props {
    children: ReactElement;
    step?: number;
}

export const Slider = (props: Props) => {
  const {
    children,
    step = 150
  } = props;

  const sliderRef = useRef<HTMLElement | null>(null);

  const moveLeft = () => {
    if (!sliderRef.current) {
        return;
    }

    sliderRef.current.scrollLeft -= step;
  }

  const moveRight = () => {
    if (!sliderRef.current) {
        return;
    }

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
