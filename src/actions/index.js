import axios from 'axios'
import { TOKEN } from '../constants/token'

export const FETCH_TAGS = "fetch_tags"
export const FETCH_INGREDIENTS = "fetch_ingredients"
export const CREATE_TAG = "create_tag"
export const CREATE_INGREDIENT = "create_ingredient"

const ROOT_URL = "http://127.0.0.1:8000/api"

export function fetchTags() {
    const request = axios.get(`${ROOT_URL}/recipe/tags`, {headers: { 'Authorization': `Bearer ${TOKEN}`}})
    return {
        type: FETCH_TAGS,
        payload: request
    }
}

export function fetchIngredients() {
    const request = axios.get(`${ROOT_URL}/recipe/ingredients`, {headers: { 'Authorization': `Bearer ${TOKEN}`}})
    return {
        type: FETCH_INGREDIENTS,
        payload: request
    }
}

export function createTag(values) {
    const request = axios.post(`${ROOT_URL}/recipe/tags/`, values, {headers: { 'Authorization': `Bearer ${TOKEN}`}})
    return {
        type: CREATE_TAG,
        payload: request
    }
}

export function createIngredient(values) {
    const request = axios.post(`${ROOT_URL}/recipe/ingredients/`, values, {headers: { 'Authorization': `Bearer ${TOKEN}`}})
    return {
        type: CREATE_INGREDIENT,
        payload: request
    }
}