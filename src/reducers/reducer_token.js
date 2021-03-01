import { STORE_TOKEN } from '../actions'

export default function(state = {}, action) {
    switch(action.type) {
        case STORE_TOKEN:
            return action.payload.data.token
        default:
            return state
    }
}