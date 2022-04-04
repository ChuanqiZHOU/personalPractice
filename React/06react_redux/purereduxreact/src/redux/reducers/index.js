import { INCREMENT, DECREMENT } from "../const";
const initialState = 0;
const countReducer = (preState=initialState, action) => {

    const { type, payload } = action;
    switch(type) {
        case INCREMENT:
            return preState+payload;
        case DECREMENT:
            return preState-payload;
        default: 
            return preState
    }
}

export default countReducer