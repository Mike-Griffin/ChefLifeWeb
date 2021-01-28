import axios from 'axios'
import { TOKEN } from '../constants/token'

export const FETCH_TAGS = "fetch_tags"
export const FETCH_INGREDIENTS = "fetch_ingredients"
export const FETCH_MEASUREMENTS = "fetch_measurements"
export const FETCH_RECIPES = "fetch_recipes"
export const CREATE_TAG = "create_tag"
export const CREATE_INGREDIENT = "create_ingredient"
export const CREATE_RECIPE = "create_recipe"

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

export function fetchMeasurements() {
    const request = axios.get(`${ROOT_URL}/recipe/measurements`, {headers: { 'Authorization': `Bearer ${TOKEN}`}})
    return {
        type: FETCH_MEASUREMENTS,
        payload: request
    }
}

export function fetchRecipes() {
    const request = axios.get(`${ROOT_URL}/recipe/recipes`, {headers: { 'Authorization': `Bearer ${TOKEN}`}})
    return {
        type: FETCH_RECIPES,
        payload: request
    }
}

export function createTag(values) {
    return {
        type: CREATE_TAG,
        payload: values
    }
}

export function createIngredient(values) {
    const request = axios.post(`${ROOT_URL}/recipe/ingredients/`, values, {headers: { 'Authorization': `Bearer ${TOKEN}`}})
    return {
        type: CREATE_INGREDIENT,
        payload: request
    }
}

export function createRecipe(response) {

    console.log(response)
    return {
        type: CREATE_RECIPE,
        payload: response
    }
}