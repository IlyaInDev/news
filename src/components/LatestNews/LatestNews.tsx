import { useGetLatestNewsQuery } from "../../store/services/newsApi";
import { BannersListWithSkeleton } from "../BannersList/BannersList";
import styles from './styles.module.css'

export const LatestNews = () => {
  const { data: dataNews, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
        <BannersListWithSkeleton banners={dataNews?.news} isLoading={isLoading} />
    </section>
  )
}
