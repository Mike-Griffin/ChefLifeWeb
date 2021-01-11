import _ from 'lodash'
import { FETCH_RECIPES } from '../actions'

export default function(state={}, action) {

    switch(action.type) {
        case FETCH_RECIPES:
            return _.mapKeys(action.payload.data, 'id')
        default: 
            return state
    }
}