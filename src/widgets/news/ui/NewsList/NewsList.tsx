import { INews, NewsItem } from '@/entities/news';
import { withSkeleton } from '@/shared/hoc/withSkeleton';
import styles from './styles.module.css'

interface Props {
    news?: INews[];
}

const NewsList = (props: Props) => {
  const { news } = props;

  return (
    <ul className={styles.list}>
        {news?.map(item => (
            <NewsItem key={item.id} item={item} />
        ))}
    </ul>
  )
}

export const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10);