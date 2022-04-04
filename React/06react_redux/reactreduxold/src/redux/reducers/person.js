
import { ADD_PERSON } from "../const";

const initialState = [{ id:'xxxx', name:'tom', age:12 }]

export const personReducer = (preState = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
            ;
        default:
          return  preState;
    }
}