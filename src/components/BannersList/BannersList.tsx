import { withSkeleton } from "../../helpers/hoc/withSkeleton"
import { INews } from "../../interfaces"
import { NewsBanner } from "../NewsBanner/NewsBanner"
import styles from './styles.module.css'

interface Props {
    banners?: INews[];
}

const BannersList = (props: Props) => {
  const { banners } = props;

  return (
    <div className={styles.banners}>
        {banners?.map(banner => (
            <NewsBanner key={banner.id} item={banner} />
        ))}
    </div>
  )
}

export const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row');