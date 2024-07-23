import { ForwardedRef, forwardRef } from 'react';
import styles from './styles.module.css'
import { CategoriesType } from '../../interfaces';

interface Props {
    categories: CategoriesType[];
    setSelectedCategory: (category: CategoriesType | null) => void;
    selectedCategory: CategoriesType | null;
}

export const Categories = forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    categories,
    selectedCategory,
    setSelectedCategory
  } = props;

  return (
    <div className={styles.categories} ref={ref}>
        <button 
                onClick={() => setSelectedCategory(null)}
                className={ !selectedCategory ? styles.active : styles.category }
            >
                All
        </button>
        {categories.map(category => (
            <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={category === selectedCategory ? styles.active : styles.category}
            >
                {category}
            </button>
        ))}
    </div>
  )
})

Categories.displayName = 'Categories';
