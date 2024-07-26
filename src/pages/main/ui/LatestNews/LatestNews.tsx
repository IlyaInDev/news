import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi';
import { NewsListWithSkeleton } from '@/widgets/news';
import styles from './styles.module.css'

export const LatestNews = () => {
  const { data: dataNews, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
        <NewsListWithSkeleton
            news={dataNews?.news}
            isLoading={isLoading}
            type='banner'
            direction='row'
        />
    </section>
  )
}
