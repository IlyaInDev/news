import styles from './styles.module.css'

export const Image = ({ image }) => {
  return (
    <div className={styles.wrapper}>
        {image && image !== 'None' ? <img src={image} className={styles.image} alt="image" /> : null}
    </div>
  )
}
