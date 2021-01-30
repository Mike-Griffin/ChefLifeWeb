import _ from 'lodash'
import { FETCH_RECIPE_TAGS, FETCH_RECIPE_INGREDIENTS, FETCH_RECIPE_MEASUREMENTS } from '../actions'

export default function(state = {}, action) {

    switch(action.type) {
        case FETCH_RECIPE_MEASUREMENTS:
            return {...state, 'measurements': _.mapKeys(action.payload.data, 'id')}
        case FETCH_RECIPE_INGREDIENTS:
            return {...state, 'ingredients': _.mapKeys(action.payload.data, 'id')}
        case FETCH_RECIPE_TAGS:
            return {...state, 'tags': _.mapKeys(action.payload.data, 'id')}
        default:
            return state
    }
}