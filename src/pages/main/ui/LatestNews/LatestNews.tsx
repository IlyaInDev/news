import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi';
import { BannersListWithSkeleton } from '@/widgets/news/ui';
import styles from './styles.module.css'

export const LatestNews = () => {
  const { data: dataNews, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
        <BannersListWithSkeleton banners={dataNews?.news} isLoading={isLoading} />
    </section>
  )
}
