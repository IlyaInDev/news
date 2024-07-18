import styles from './styles.module.css'

export const Pagination = (props) => {
  const {
    currentPage,
    totalPages,
    handleNextPage,
    handlePreviousPage,
    handlePageClick,
  } = props;

  return (
    <div className={styles.pagination}>
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
