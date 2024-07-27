import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi';
import { NewsListWithSkeleton } from '@/widgets/news';
import styles from './styles.module.css'
import { useAppDispatch } from '@/app/appStore';
import { INews } from '@/entities/news';
import { newsActions } from '@/entities/news/model/newsSlice';
import { useNavigate } from 'react-router-dom';

export const LatestNews = () => {
  const { data: dataNews, isLoading } = useGetLatestNewsQuery(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateTo = (news: INews) => {
    dispatch(newsActions.setCurrentNews(news));
    navigate(`/news/${news.id}`);
  }

  return (
    <section className={styles.section}>
        <NewsListWithSkeleton
            news={dataNews?.news}
            isLoading={isLoading}
            type='banner'
            direction='row'
            viewNewsSlot={(news: INews) => (
                <p onClick={() => navigateTo(news)}>view more...</p>
            )}
        />
    </section>
  )
}
