import { useEffect, useState } from 'react';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css'
import { getCategories, getNews } from '../../api/apiNews';
import { NewsList } from '../../components/NewsList/NewsList';
import { Skeleton } from '../../components/Skeleton/Skeleton';
import { Pagination } from '../../components/Pagination/Pagination';
import { Categories } from '../../components/Categories/Categories';
import { Search } from '../../components/Search/Search';
import { useDebounce } from '../../helpers/hooks/useDebounce';

export const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [keywords, setKeywords] = useState('');
  const totalPages = 10;
  const pageSize = 10;

  const debouncedKeywords = useDebounce(keywords, 1000);

  const fetchNews = async (currentPage, selectedCategory, keywords) => {
    try {
        setIsLoading(true);
        const response = await getNews({
            page_number: currentPage,
            page_size: pageSize,
            category: selectedCategory === 'All' ? null : selectedCategory,
            keywords
        });
        setNews(response.news);
        setIsLoading(false);
    } catch (error) {
        console.log(error);
    }
  }

  const fetchCategory = async () => {
    try {
        const response = await getCategories();
        setCategories(['All', ...response.categories]);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  useEffect (() => {
    fetchNews(currentPage, selectedCategory, debouncedKeywords);
  }, [currentPage, selectedCategory, debouncedKeywords]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
    }
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <main className={styles.main}>
        <Categories 
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
        />

        <Search 
            keywords={keywords}
            setKeywords={setKeywords}
        />

        {!isLoading ? <NewsBanner item={news[0]} /> : <Skeleton />}

        <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
        />

        {!isLoading ? <NewsList news={news} /> : <Skeleton count={10} type='item' />}

        <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
        />
    </main>
  )
}
