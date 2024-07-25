import { useTheme } from '@/app/providers/ThemeProvider';
import { themeIcons } from '@/shared/assets';
import styles from './styles.module.css'

export const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <img
        className={styles.img}
        src={isDark ? themeIcons.light : themeIcons.dark} 
        onClick={toggleTheme}
        alt="theme" 
    />
  )
}
