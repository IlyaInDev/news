import { INews, NewsCard } from '@/entities/news';
import { withSkeleton } from '@/shared/hoc/withSkeleton';
import styles from './styles.module.css'

interface Props {
    news?: INews[];
    type?: 'banner' | 'item';
}

const NewsList = (props: Props) => {
  const { news, type = 'item' } = props;

  return (
    <ul className={`${type === 'banner' ? styles.banners : styles.list}`}>
        {news?.map(item => (
            <NewsCard key={item.id} item={item} type={type} />
        ))}
    </ul>
  )
}

export const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);