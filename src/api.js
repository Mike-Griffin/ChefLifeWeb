import axios from 'axios'
import { TOKEN } from './constants/token'

const ROOT_URL = "http://127.0.0.1:8000/api"

export function createRecipeRequest(token, values) {
    return axios.post(`${ROOT_URL}/recipe/recipes/`, values, {headers: { 'Authorization': `Token ${token}`}})
}

export function createTagRequest(token, values) {
    console.log("In the create tag request: ", token)
    return axios.post(`${ROOT_URL}/recipe/tags/`, values, {headers: { 'Authorization': `Token ${token}`}})
}

export function createMeasurementRequest(token, values) {
    return axios.post(`${ROOT_URL}/recipe/measurements/`, values, {headers: { 'Authorization': `Token ${token}`}})
}

export function createIngredientRequest(token, values) {
    return axios.post(`${ROOT_URL}/recipe/ingredients/`, values, {headers: { 'Authorization': `Token ${token}`}})
}

export function deleteTagRequest(token, id) {
    return axios.delete(`${ROOT_URL}/recipe/tags/${id}/`, {headers: { 'Authorization': `Token ${token}`}})
}

export function deleteRecipeRequest(token, id) {
    return axios.delete(`${ROOT_URL}/recipe/recipes/${id}/`, {headers: { 'Authorization': `Token ${token}`}})
}

export function tokenRequest(values) {
    console.log(values)
    return axios.post(`${ROOT_URL}/user/token/`, values)
}