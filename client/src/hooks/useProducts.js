import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

const useProducts = (keyword) => {
  const dispatch = useDispatch()
  const { loading, products, error } = useSelector((state) => state.productList)

  // When component loads, fetch the products
  useEffect(() => {
    dispatch(listProducts(keyword))
  }, [dispatch, keyword])

  return { loading, products, error }
}

export default useProducts
