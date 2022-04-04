
import { INCREMENT,DECREMENT } from '../const'
export const incrementAction = (payload) => {
    return (
        {type: INCREMENT, payload}
    )
}

export const decrementAction = (payload) => {
  return { type: DECREMENT, payload }
}

export const asyncAction = (payload, time) => {
    return (dispatch) => {
        setTimeout(
            () => {
             dispatch(incrementAction(payload))   
            }, time
        )
    }
}