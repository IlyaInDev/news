import { withSkeleton } from "../../helpers/hoc/withSkeleton"
import { NewsBanner } from "../NewsBanner/NewsBanner"
import styles from './styles.module.css'

const BannersList = ({ banners }) => {
  return (
    <div className={styles.banners}>
        {banners?.map(banner => (
            <NewsBanner key={banner.id} item={banner} />
        ))}
    </div>
  )
}

export const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row');