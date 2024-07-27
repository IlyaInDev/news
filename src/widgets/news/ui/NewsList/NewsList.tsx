import { INews, NewsCard } from '@/entities/news';
import { withSkeleton } from '@/shared/hoc/withSkeleton';
import { ReactNode } from 'react';
import styles from './styles.module.css'

interface Props {
    news?: INews[];
    type?: 'banner' | 'item';
    viewNewsSlot?: (news: INews) => ReactNode;
}

const NewsList = (props: Props) => {
  const { news, type = 'item', viewNewsSlot } = props;

  return (
    <ul className={`${type === 'banner' ? styles.banners : styles.list}`}>
        {news?.map(item => (
            <NewsCard
                key={item.id}
                item={item}
                type={type}
                viewNewsSlot={viewNewsSlot}
            />
        ))}
    </ul>
  )
}

export const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);