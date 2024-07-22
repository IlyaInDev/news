import { BannersListWithSkeleton } from "../BannersList/BannersList";
import styles from './styles.module.css'

export const LatestNews = (props) => {
  const { news, isLoading } = props;

  return (
    <section className={styles.section}>
        <BannersListWithSkeleton banners={news} isLoading={isLoading} />
    </section>
  )
}
