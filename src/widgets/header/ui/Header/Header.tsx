import { useTheme } from '@/app/providers/ThemeProvider';
import { formatDate } from '@/shared/helpers/formatDate';
import { ThemeButton } from '@/features/theme/ui';
import styles from './styles.module.css'

export const Header = () => {
  const { isDark } = useTheme();

  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
        <div className={styles.info}>
            <h1 className={styles.title}>News</h1>
            <p className={styles.date}>{formatDate(new Date())}</p>
        </div>

        <ThemeButton />
    </header>
  )
}
