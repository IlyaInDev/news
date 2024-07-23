import { getNews } from "../../api/apiNews"
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants"
import { useDebounce } from "../../helpers/hooks/useDebounce"
import { useFetch } from "../../helpers/hooks/useFetch"
import { useFilter } from "../../helpers/hooks/useFilter"
import { NewsApiResponse, ParamsType } from "../../interfaces"
import { NewsFilters } from "../NewsFilters/NewsFilters"
import { NewsListWithSkeleton } from "../NewsList/NewsList"
import { PaginationWrapper } from "../PaginationWrapper/PaginationWrapper"
import styles from './styles.module.css'

export const NewsByFilters = () => {
  const { filters, changeFilter } = useFilter({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: ''
  })

  const debouncedKeywords = useDebounce(filters.keywords, 1000);

  const { data: dataNews, isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
    ...filters,
    keywords: debouncedKeywords
});

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

  const handlePageClick = (pageNumber: number) => {
    changeFilter('page_number', pageNumber)
  }

  return (
    <section className={styles.section}>
        <NewsFilters
            filters={filters}
            changeFilter={changeFilter}
        />

        <PaginationWrapper
            top
            bottom
            currentPage={filters.page_number}
            totalPages={TOTAL_PAGES}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
        >
            <NewsListWithSkeleton
                isLoading={isLoading}
                news={dataNews?.news}
            />
        </PaginationWrapper>
    </section>
  )
}
