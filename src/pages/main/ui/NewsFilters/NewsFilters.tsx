import { useAppDispatch, useAppSelector } from '@/app/appStore';
import { Categories } from '@/features/category/ui/Categories/Categories';
import { Search } from '@/features/search/ui/Search/Search';
import { Slider } from '@/features/slider/ui/Slider/Slider';
import { CategoriesType } from '@/entities/category';
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi';
import { newsActions } from '@/entities/news/model/newsSlice';
import styles from './styles.module.css'

export const NewsFilters = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(state => state.news.filters);

  const { data: dataCategories } = useGetCategoriesQuery(null);

  return (
    <div className={styles.filters}>
        {dataCategories ? (
            <Slider>
                <Categories
                    categories={dataCategories.categories}
                    selectedCategory={filters.category}
                    setSelectedCategory={(category: CategoriesType | null) => 
                        dispatch(newsActions.setFilters({ key: 'category', value: category }))
                    }
                /> 
            </Slider>
        ) : null}

        <Search
            keywords={filters.keywords}
            setKeywords={(keywords: string) => 
                dispatch(newsActions.setFilters({ key: 'keywords', value: keywords }))
            }
        />
    </div>
  )
}
