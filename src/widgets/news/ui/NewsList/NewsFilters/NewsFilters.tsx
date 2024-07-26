import { useAppDispatch } from '@/app/appStore';
import { Categories } from '@/features/category/ui/Categories/Categories';
import { Search } from '@/features/search/ui/Search/Search';
import { Slider } from '@/features/slider/ui/Slider/Slider';
import { CategoriesType } from '@/entities/category';
import { newsActions } from '@/entities/news/model/newsSlice';
import { IFilter } from '@/shared/interfaces';
import styles from './styles.module.css';

interface Props {
    filters: IFilter;
    categories: CategoriesType[];
}

export const NewsFilters = (props: Props) => {
  const {
    filters,
    categories
  } = props;

  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
        {categories ? (
            <Slider>
                <Categories
                    categories={categories}
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
