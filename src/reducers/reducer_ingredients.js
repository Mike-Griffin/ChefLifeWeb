import _ from 'lodash'
import { FETCH_INGREDIENTS } from '../actions'

export default function(state = {}, action) {

    switch(action.type) {
        case FETCH_INGREDIENTS:
            return _.mapKeys(action.payload.data, 'id')
        default:
            return state
    }
}