import axios from 'axios'
import { TOKEN } from '../constants/token'

export const FETCH_TAGS = "fetch_tags"

const ROOT_URL = "http://127.0.0.1:8000/api"

export function fetchTags() {
    console.log("fetch tags called")
    const request = axios.get(`${ROOT_URL}/recipe/tags`, {headers: { 'Authorization': `Bearer ${TOKEN}`}})

    return {
        type: FETCH_TAGS,
        payload: request
    }
}