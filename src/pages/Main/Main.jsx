import { useEffect, useState } from 'react';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css'
import { getNews } from '../../api/apiNews';
import { NewsList } from '../../components/NewsList/NewsList';

export const Main = () => {
  const [news, setNews] = useState([]);

  useEffect (() => {
    const fetchNews = async () => {
        try {
            const response = await getNews();
            console.log(response);
            setNews(response.news);
        } catch (error) {
            console.log(error);
        }
    }

    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
        <NewsBanner item={news[0]} />
        <NewsList news={news} />
    </main>
  )
}
