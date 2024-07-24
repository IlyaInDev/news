import { themeIcons } from "../../assets"
import { useTheme } from "../../context/ThemeContext"
import { formatDate } from "../../helpers/formatDate"
import styles from './styles.module.css'

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
        <div className={styles.info}>
            <h1 className={styles.title}>News</h1>
            <p className={styles.date}>{formatDate(new Date())}</p>
        </div>

        <img
            className={styles.img}
            src={isDark ? themeIcons.light : themeIcons.dark} 
            onClick={toggleTheme}
            alt="theme" 
        />
    </header>
  )
}
