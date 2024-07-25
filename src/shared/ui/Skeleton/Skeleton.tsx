import { SkeletonDirection, SkeletonType } from '../../interfaces';
import styles from './styles.module.css'

interface Props {
    count?: number;
    type?: SkeletonType;
    direction?: SkeletonDirection;
}

export const Skeleton = (props: Props) => {
  const { 
    count = 1,
    type = 'banner',
    direction='column'
  } = props;

  return (
    <>
        {count > 1 ? (
            <ul className={direction === 'column' ? styles.columnList : styles.rowList}>
                {[...Array(count)].map((_, index) => (
                    <li key={index} className={type === 'banner' ? styles.banner : styles.item}></li>
                ))}
            </ul>
        ) : (
            <li className={type === 'banner' ? styles.banner : styles.item}></li>
        )}
    </>
  )
}
