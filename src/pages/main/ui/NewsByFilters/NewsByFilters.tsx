import { useAppDispatch, useAppSelector } from '@/app/appStore';
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import { newsActions } from '@/entities/news/model/newsSlice';
import { TOTAL_PAGES } from '@/shared/constants/constants';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { NewsListWithSkeleton } from '@/widgets/news/ui';
import { NewsFilters } from '../NewsFilters/NewsFilters';
import { Pagination } from '@/features/pagination';
import styles from './styles.module.css'

export const NewsByFilters = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(state => state.news.filters);

  const debouncedKeywords = useDebounce(filters.keywords, 1000);

  const { data: dataNews, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
        dispatch(newsActions.setFilters({ key: 'page_number', value: filters.page_number + 1 }));
    }
  }

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
        dispatch(newsActions.setFilters({ key: 'page_number', value: filters.page_number - 1 }));
    }
  }

  const handlePageClick = (pageNumber: number) => {
    dispatch(newsActions.setFilters({ key: 'page_number', value: pageNumber }))
  }

  return (
    <section className={styles.section}>
        <NewsFilters />

        <Pagination
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
        </Pagination>
    </section>
  )
}
