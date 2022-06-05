import './App.module.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './App.module.css'
import Header from './component/Header/Header'
import ProductDetail from './component/ProductDetail/ProductDetail'
import ProductSales from './component/ProductSales/ProductSales'

function App() {
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios
      .get('./data.json')
      .then((res) => {
        setProduct(res.data[0])
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  if (loading) return <p>Loading...</p>
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.product}>
        <ProductDetail product={product} />
        <ProductSales product={product} />
      </div>
    </div>
  )
}

export default App
