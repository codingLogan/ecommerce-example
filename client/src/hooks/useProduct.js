import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { listProductDetails } from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'

const useProduct = (id) => {
  const dispatch = useDispatch()
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  )

  const { error: errorProductReview, success: successProductReview } =
    useSelector((state) => state.productCreateReview)

  // When component loads, fetch the produc
  useEffect(() => {
    if (successProductReview) {
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
    }

    dispatch(listProductDetails(id))
  }, [id, dispatch, successProductReview])

  return { loading, product, error, errorProductReview, successProductReview }
}

export default useProduct
