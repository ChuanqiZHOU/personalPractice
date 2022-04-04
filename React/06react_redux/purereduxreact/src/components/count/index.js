import { useEffect, useRef } from "react"
import store from '../../redux/store'
import { incrementAction, decrementAction, asyncAction } from "../../redux/actioncreators";
const CountPresent = () => {
    const selectNumber = useRef();
    const currentState = () => {
        return store.getState();
    }
    const incrementClick = () => {
        const value = selectNumber.current.value;
        store.dispatch(incrementAction(value*1));
    }
    const decrementClick = () => {
        const value = selectNumber.current.value;
      store.dispatch(decrementAction(value*1))
    }
    const asyncClick = () => {
        const value = selectNumber.current.value;
      store.dispatch(asyncAction(value*1, 500))
    }
    return (
      <>
        <div> this is number: {currentState()}</div>
        <select ref={selectNumber}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;&nbsp;
        <button onClick={incrementClick}>+</button>&nbsp;&nbsp;&nbsp;
        <button onClick={decrementClick}>-</button>&nbsp;&nbsp;
        <button onClick={asyncClick}>async+</button>
      </>
    )
}

export default CountPresent