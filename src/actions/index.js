import axios from 'axios'
import { TOKEN } from '../constants/token'

export const STORE_TOKEN = "store_token"
export const FETCH_TAGS = "fetch_tags"
export const FETCH_INGREDIENTS = "fetch_ingredients"
export const FETCH_MEASUREMENTS = "fetch_measurements"
export const FETCH_RECIPES = "fetch_recipes"
export const FETCH_RECIPE = "fetch_recipe"
export const FETCH_RECIPE_TAGS = "fetch_recipe_tags"
export const FETCH_RECIPE_INGREDIENTS = "fetch_recipe_ingredients"
export const FETCH_RECIPE_MEASUREMENTS = "fetch_recipe_measurements"
export const CLEAR_RECIPE_VALS = "clear_recipe_vals"

export const CREATE_TAG = "create_tag"
export const CREATE_INGREDIENT = "create_ingredient"
export const CREATE_RECIPE = "create_recipe"

const ROOT_URL = "http://127.0.0.1:8000/api"

export function storeToken(response) {
    console.log(response)
    return {
        type: STORE_TOKEN,
        payload: response
    }
}

export function fetchTags(token) {
    console.log("token?" + token)
    const request = axios.get(`${ROOT_URL}/recipe/tags`, {headers: { 'Authorization': `Token ${token}`}})
    return {
        type: FETCH_TAGS,
        payload: request
    }
}

export function fetchIngredients(token) {
    const request = axios.get(`${ROOT_URL}/recipe/ingredients`, {headers: { 'Authorization': `Token ${token}`}})
    return {
        type: FETCH_INGREDIENTS,
        payload: request
    }
}

export function fetchMeasurements(token) {
    const request = axios.get(`${ROOT_URL}/recipe/measurements`, {headers: { 'Authorization': `Token ${token}`}})
    return {
        type: FETCH_MEASUREMENTS,
        payload: request
    }
}

export function fetchRecipes(token) {
    const request = axios.get(`${ROOT_URL}/recipe/recipes`, {headers: { 'Authorization': `Token ${token}`}})
    return {
        type: FETCH_RECIPES,
        payload: request
    }
}

export function fetchRecipe(id, token) {
    const request = axios.get(`${ROOT_URL}/recipe/recipes/${id}`, {headers: { 'Authorization': `Token ${token}`}})
    return {
        type: FETCH_RECIPE,
        payload: request
    }
}

export function fetchRecipeTags(queryParm, token) {
    const request = axios.get(`${ROOT_URL}/recipe/tags/?ids=${queryParm}`, {headers: { 'Authorization': `Token ${token}`}})
    return {
        type: FETCH_RECIPE_TAGS,
        payload: request
    }
}

export function fetchRecipeIngredients(queryParm, token) {
    const request = axios.get(`${ROOT_URL}/recipe/ingredients/?ids=${queryParm}`, {headers: { 'Authorization': `Token ${token}`}})
    return {
        type: FETCH_RECIPE_INGREDIENTS,
        payload: request
    }
}

export function fetchRecipeMeasurements(queryParm, token) {
    const request = axios.get(`${ROOT_URL}/recipe/measurements/?ids=${queryParm}`, {headers: { 'Authorization': `Token ${token}`}})
    return {
        type: FETCH_RECIPE_MEASUREMENTS,
        payload: request
    }
}

export function clearRecipeVals() {
    return {
        type: CLEAR_RECIPE_VALS
    }
}

export function createTag(values) {
    return {
        type: CREATE_TAG,
        payload: values
    }
}

export function createIngredient(values, token) {
    const request = axios.post(`${ROOT_URL}/recipe/ingredients/`, values, {headers: { 'Authorization': `Token ${token}`}})
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