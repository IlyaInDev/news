import React, { ReactElement, useRef } from 'react';
import { useTheme } from '@/app/providers/ThemeProvider';
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
  const { isDark } = useTheme();

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
    <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
        <button className={styles.arrow} onClick={moveLeft}>{`<`}</button>

        {React.cloneElement(children, { ref: sliderRef })}

        <button className={styles.arrow} onClick={moveRight}>{`>`}</button>
    </div>
  )
}
