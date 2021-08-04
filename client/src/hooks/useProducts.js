import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

const useProducts = (keyword, pageNumber) => {
  const dispatch = useDispatch()
  const { loading, products, pages, page, error } = useSelector(
    (state) => state.productList
  )

  // When component loads, fetch the products
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return { loading, products, pages, page, error }
}

export default useProducts
