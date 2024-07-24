import { useTheme } from '../../context/ThemeContext';
import styles from './styles.module.css'

interface Props {
    keywords: string;
    setKeywords: (keywords: string) => void;
}

export const Search = (props: Props) => {
  const {
    keywords,
    setKeywords
  } = props;

  const { isDark } = useTheme();

  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
        <input
            className={styles.input}
            type='text'
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
        />
    </div>
  )
}
