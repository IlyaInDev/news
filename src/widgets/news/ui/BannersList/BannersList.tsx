import { NewsBanner } from '@/entities/news/ui/NewsBanner/NewsBanner';
import { withSkeleton } from '@/shared/hoc/withSkeleton';
import { INews } from '@/entities/news';
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