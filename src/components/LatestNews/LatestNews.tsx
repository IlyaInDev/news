import { getLatestNews } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import { NewsApiResponse } from "../../interfaces";
import { BannersListWithSkeleton } from "../BannersList/BannersList";
import styles from './styles.module.css'

export const LatestNews = () => {
  const { data: dataNews, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

  return (
    <section className={styles.section}>
        <BannersListWithSkeleton banners={dataNews?.news} isLoading={isLoading} />
    </section>
  )
}
