import { formatTimeAgo } from '@/shared/helpers/formatTimeAgo';
import { INews } from '../../model/types';
import { Image } from '@/shared/ui/Image/Image';
import styles from './styles.module.css'

interface Props {
    item: INews;
}

export const NewsBanner = (props: Props) => {
  const { item } = props;

  return (
    <div className={styles.banner}>
        <Image image={item?.image} />
        <h3 className={styles.title}>{item?.title}</h3>
        <p className={styles.extra}>
            {formatTimeAgo(item.published)} by {item?.author}
        </p>
    </div>
  )
}