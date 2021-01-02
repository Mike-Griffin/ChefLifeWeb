import _ from 'lodash'
import { FETCH_TAGS } from '../actions'

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_TAGS:
            return _.mapKeys(action.payload.data, 'id')
        default:
            return state
    }
}