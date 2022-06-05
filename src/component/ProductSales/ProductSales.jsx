import React from 'react'
import styles from './ProductSales.module.css'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { IconContext } from 'react-icons'

const ProductSales = ({ product }) => {
  const topics = [
    'WEEK ENDING',
    'RETAIL SALES',
    'WHOLESALE SALES',
    'UNIT SOLD',
    'RETAILER MARGIN',
  ]
  return (
    <div className={styles.wrapper}>
      <div className={styles.topics}>
        {topics.map((topic) => {
          return (
            <div key={topic} className={styles.topic}>
              <div className={styles.column}>{topic}</div>
              <IconContext.Provider value={{ color: 'grey' }}>
                <div className={styles.down_arrow}>
                  <RiArrowDropDownLine />
                </div>
              </IconContext.Provider>
            </div>
          )
        })}
      </div>
      <div className={styles.sales}>
        {product.sales.map((sale) => {
          const date = sale.weekEnding.split('-')
          const newDateFormat = date[1] + '-' + date[2] + '-' + date[0].slice(2)
          return (
            <div key={sale.weekEnding} className={styles.sale}>
              <div className={styles.box}>
                <div className={styles.record}>{newDateFormat}</div>
              </div>
              <div className={styles.box}>
                <div className={styles.record}>${sale.retailSales}</div>
              </div>
              <div className={styles.box}>
                <div className={styles.record}>${sale.wholesaleSales}</div>
              </div>
              <div className={styles.box}>
                <div className={styles.record}>{sale.unitsSold}</div>
              </div>
              <div className={styles.box}>
                <div className={styles.record}>${sale.retailerMargin}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductSales
