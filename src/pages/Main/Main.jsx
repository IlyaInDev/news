import { NewsBannerWithSkeleton } from '../../components/NewsBanner/NewsBanner';
import { getCategories, getNews } from '../../api/apiNews';
import { NewsListWithSkeleton } from '../../components/NewsList/NewsList';
import { Pagination } from '../../components/Pagination/Pagination';
import { Categories } from '../../components/Categories/Categories';
import { Search } from '../../components/Search/Search';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useFilter } from '../../helpers/hooks/useFilter';
import styles from './styles.module.css'

export const Main = () => {
  const { filters, changeFilter } = useFilter({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: ''
  })

  const debouncedKeywords = useDebounce(filters.keywords, 1000);

  const { data: dataNews, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords
  });

  const { data: dataCategories } = useFetch(getCategories);

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
    <main className={styles.main}>
        {dataCategories ? (
            <Categories 
                categories={dataCategories.categories}
                selectedCategory={filters.category}
                setSelectedCategory={(category) => changeFilter('category', category)}
            /> 
        ) : null}

        <Search 
            keywords={filters.keywords}
            setKeywords={(keywords) => changeFilter('keywords', keywords)}
        />

        <NewsBannerWithSkeleton
            isLoading={isLoading}
            item={dataNews?.news.length > 0 && dataNews.news[0]}
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
            news={dataNews?.news}
        />

        <Pagination
            currentPage={filters.page_number}
            totalPages={TOTAL_PAGES}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
        />
    </main>
  )
}
