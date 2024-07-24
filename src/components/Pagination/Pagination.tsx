import { useTheme } from '../../context/ThemeContext';
import { IPaginationProps } from '../../interfaces';
import styles from './styles.module.css'

export const Pagination = (props: IPaginationProps) => {
  const {
    currentPage,
    totalPages,
    handleNextPage,
    handlePreviousPage,
    handlePageClick,
  } = props;

  const { isDark } = useTheme();

  return (
    <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
        <button 
            className={styles.arrow}
            onClick={handlePreviousPage}
            disabled={currentPage <= 1}
        >
            {'<'}
        </button>
        <div className={styles.list}>
            {[...Array(totalPages)].map((_, index) => (
                <button 
                    key={index}
                    className={styles.pageNumber}
                    onClick={() => handlePageClick(index + 1)}
                    disabled={index + 1 === currentPage}
                >
                    {index + 1}
                </button>
            ))}
        </div>
        <button 
            className={styles.arrow}
            onClick={handleNextPage}
            disabled={currentPage >= totalPages}
        >
            {'>'}
        </button>
    </div>
  )
}
