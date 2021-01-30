import _ from 'lodash'
import { FETCH_RECIPES, FETCH_RECIPE } from '../actions'

export default function(state={}, action) {

    switch(action.type) {
        case FETCH_RECIPE: 
            return {...state, [action.payload.data.id]: action.payload.data}
        case FETCH_RECIPES:
            return _.mapKeys(action.payload.data, 'id')
        default: 
            return state
    }
}