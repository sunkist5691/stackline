import styles from './ProductDetail.module.css'
import { useSelector } from 'react-redux'

const ProductDetail = () => {
  const { product } = useSelector((state) => state.product)
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.img}
        src={product.image}
        alt="Product of shark ninja"
      />
      <div className={styles.product}>
        <div className={styles.info}>
          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.subtitle}>{product.subtitle}</p>
        </div>
        <div className={styles.wrapper_tags}>
          <div className={styles.tags}>
            {product.tags.map((tag) => (
              <p key={tag} className={styles.tag}>
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
