import axios from 'axios'
import { TOKEN } from './constants/token'

const ROOT_URL = "http://127.0.0.1:8000/api"

export function createRecipeRequest(values) {
    return axios.post(`${ROOT_URL}/recipe/recipes/`, values, {headers: { 'Authorization': `Bearer ${TOKEN}`}})
}

export function createTagRequest(values) {
    return axios.post(`${ROOT_URL}/recipe/tags/`, values, {headers: { 'Authorization': `Bearer ${TOKEN}`}})
}

export function deleteTagRequest(id) {
    return axios.delete(`${ROOT_URL}/recipe/tags/${id}/`, {headers: { 'Authorization': `Bearer ${TOKEN}`}})
}

export function deleteRecipeRequest(id) {
    return axios.delete(`${ROOT_URL}/recipe/recipes/${id}/`, {headers: { 'Authorization': `Bearer ${TOKEN}`}})
}