import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { listProductDetails } from '../actions/productActions'

const useProduct = (id) => {
  const dispatch = useDispatch()
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  )

  // When component loads, fetch the produc
  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [id, dispatch])

  return { loading, product, error }
}

export default useProduct
