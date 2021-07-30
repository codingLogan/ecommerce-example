import axios from 'axios'
import { useState, useEffect } from 'react'

const useProducts = () => {
  const [products, setProducts] = useState([])

  // When component loads, fetch the products
  useEffect(() => {
    const fetchProducts = async function () {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return products
}

export default useProducts
