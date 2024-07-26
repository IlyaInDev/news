import { useAppSelector } from '@/app/appStore';
import { NewsFilters } from '@/widgets/news';
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi';
import { NewsListWithPagination } from '../NewsListWithPagination/NewsListWithPagination';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import styles from './styles.module.css'

export const NewsByFilters = () => {
  const filters = useAppSelector(state => state.news.filters);

  const { data: dataCategories } = useGetCategoriesQuery(null);

  const debouncedKeywords = useDebounce(filters.keywords, 1000);

  const { data: dataNews, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords
  });

  return (
    <section className={styles.section}>
        <NewsFilters
            filters={filters}
            categories={dataCategories?.categories || []}
        />

        <NewsListWithPagination
            filters={filters}
            isLoading={isLoading}
            news={dataNews?.news || []}
        />
    </section>
  )
}
