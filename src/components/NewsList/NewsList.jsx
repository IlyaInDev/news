import { withSkeleton } from '../../helpers/hoc/withSkeleton'
import { NewsItem } from '../NewsItem/NewsItem'
import styles from './styles.module.css'

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
        {news?.map(item => (
            <NewsItem key={item.id} item={item} />
        ))}
    </ul>
  )
}

export const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10);