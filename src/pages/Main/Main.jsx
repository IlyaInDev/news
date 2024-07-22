import { getNews } from '../../api/apiNews';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { PAGE_SIZE } from '../../constants/constants';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useFilter } from '../../helpers/hooks/useFilter';
import styles from './styles.module.css'
import { LatestNews } from '../../components/LatestNews/LatestNews';
import { NewsByFilters } from '../../components/NewsByFilters/NewsByFilters';

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

  return (
    <main className={styles.main}>
        <LatestNews
            news={dataNews?.news}
            isLoading={isLoading}
        />

        <NewsByFilters
            news={dataNews?.news}
            filters={filters}
            changeFilter={changeFilter}
            isLoading={isLoading}
        />
    </main>
  )
}
