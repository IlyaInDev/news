import { forwardRef } from 'react';
import styles from './styles.module.css'

export const Categories = forwardRef((props, ref) => {
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
