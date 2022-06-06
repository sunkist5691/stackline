import './App.module.css'
import React, { useEffect } from 'react'
import styles from './App.module.css'
import Header from './component/Header/Header'
import ProductDetail from './component/ProductDetail/ProductDetail'
import ProductSales from './component/ProductSales/ProductSales'
import { register } from './store/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const {
    product: { loading },
  } = useSelector((state) => state)

  const dispatch = useDispatch()

  useEffect(() => {
    try {
      dispatch(register())
    } catch (error) {
      console.log(error)
    }
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.product}>
        <ProductDetail />
        <ProductSales />
      </div>
    </div>
  )
}

export default App
