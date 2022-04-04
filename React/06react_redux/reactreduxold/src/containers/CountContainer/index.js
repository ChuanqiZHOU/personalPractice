
import { connect } from 'react-redux'
import {decrementAction, incrementAction,asyncAction} from '../../redux/actioncreators/count.js'
import { useRef } from 'react'

// The following is UI
const CountPresent = (props) => {
  const selectNumber = useRef()
  const currentState = () => {
    return props.count
  }
  const incrementClick = () => {
    const value = selectNumber.current.value
    props.add(value * 1)
  }
  const decrementClick = () => {
    const value = selectNumber.current.value
    props.minus(value * 1)
  }
  const asyncClick = () => {
    const value = selectNumber.current.value
    props.async(value * 1, 500)
  }
  return (
    <>
      <div> this is number: {currentState()} The following Persons is { props.totalP}</div>
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

// The following is redux-container
function mapStateToProps(state) {

    return { count: state.countReducer, totalP: state.personReducer.length}

}
function mapDispatchToProps(dispatch) {

    return {
        add: (number) => {
            dispatch(incrementAction(number))
        },
        minus: (number) => {
            dispatch(decrementAction(number))
        },
        async: (number, time) => {
            dispatch(asyncAction(number, time))
        }
    }

} 

const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountPresent);

export default CountContainer