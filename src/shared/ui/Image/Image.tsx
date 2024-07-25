import styles from './styles.module.css'

interface Props {
    image: string;
}

export const Image = (props: Props) => {
  const { image } = props;

  return (
    <div className={styles.wrapper}>
        {image && image !== 'None' ? <img src={image} className={styles.image} alt="image" /> : null}
    </div>
  )
}
