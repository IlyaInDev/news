import { CategoriesType } from "../../interfaces";
import { useAppDispatch, useAppSelector } from "../../store";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import { newsActions } from "../../store/slices/newsSlice";
import { Categories } from "../Categories/Categories"
import { Search } from "../Search/Search"
import { Slider } from "../Slider/Slider";
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
