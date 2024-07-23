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

  return (
    <div className={styles.search}>
        <input
            className={styles.input}
            type='text'
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
        />
    </div>
  )
}
