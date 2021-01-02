import axios from 'axios'

export const FETCH_TAGS = "fetch_tags"

const ROOT_URL = "TBD"

export function fetchTags() {
    const request = axios.get(`${ROOT_URL}/recipe/tags`)

    return {
        type: FETCH_TAGS,
        payload: request
    }
}