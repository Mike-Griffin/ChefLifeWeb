import { CREATE_TAG } from '../actions'

export default function(state = {}, action) {
    switch(action.type) {
        case CREATE_TAG:
            return action.payload.data
        default:
            return state
    }
}