import axios from 'axios'
import { useState, useEffect } from 'react'

const useProduct = (id) => {
  const [product, setProduct] = useState({})

  // When component loads, fetch the product
  useEffect(() => {
    const fetchProduct = async function () {
      const { data } = await axios.get(`/api/products/${id}`)
      setProduct(data)
    }
    fetchProduct()
  }, [id])

  return product
}

export default useProduct
