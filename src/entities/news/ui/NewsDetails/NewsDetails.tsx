import { formatTimeAgo } from '@/shared/helpers/formatTimeAgo';
import { INews } from '../../model/types';
import { Image } from '@/shared/ui/Image/Image';
import styles from './styles.module.css'

interface Props {
    item: INews;
}

export const NewsDetails = (props: Props) => {
  const { item } = props;

  return (
    <div className={styles.details}>
        <Image image={item.image} />

        <div className={styles.description}>
            <p>
                {item.description} ({item.language}){" "}
                <a href={item.url} target='_blank'>view more...</a>
            </p>
            <p className={styles.extra}>
                {formatTimeAgo(item?.published)} by {item?.author}
            </p>

            <ul className={styles.categories}>
                {item.category.map(category => (
                    <li key={category} className={styles.category}>{category}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}
