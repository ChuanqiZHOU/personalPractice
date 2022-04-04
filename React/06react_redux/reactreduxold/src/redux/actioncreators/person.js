import { ADD_PERSON } from "../const"

export const personAction = (personObj) => {
    return {
        type:ADD_PERSON, data: personObj
    }
}