import { TOTAL_PAGES } from "../../constants/constants"
import { NewsFilters } from "../NewsFilters/NewsFilters"
import { NewsListWithSkeleton } from "../NewsList/NewsList"
import { Pagination } from "../Pagination/Pagination"
import styles from './styles.module.css'

export const NewsByFilters = (props) => {
  const {
    news,
    isLoading,
    filters,
    changeFilter
  } = props;


  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
        changeFilter('page_number', filters.page_number + 1)
    }
  }

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
        changeFilter('page_number', filters.page_number - 1)
    }
  }

  const handlePageClick = (pageNumber) => {
    changeFilter('page_number', pageNumber)
  }

  return (
    <section className={styles.section}>
        <NewsFilters
            filters={filters}
            changeFilter={changeFilter}
        />

        <Pagination
            currentPage={filters.page_number}
            totalPages={TOTAL_PAGES}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
        />

        <NewsListWithSkeleton
            isLoading={isLoading}
            news={news}
        />

        <Pagination
            currentPage={filters.page_number}
            totalPages={TOTAL_PAGES}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
        />
    </section>
  )
}
