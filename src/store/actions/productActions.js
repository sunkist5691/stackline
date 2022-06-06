import axios from 'axios'
import { REGISTER_PRODUCT } from '../constant/constant'

export const register = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      'https://soft-hotteok-3ed7c0.netlify.app/data.json',
    )
    if (data.length) throw 'wrong data'
    dispatch({
      type: REGISTER_PRODUCT,
      payload: { loading: false, product: { ...data[0] } },
    })
    localStorage.setItem(
      'product',
      JSON.stringify({ loading: false, product: { ...data[0] } }),
    )
  } catch (error) {
    console.log('unable to get data')
  }
}
