import axios from 'axios'

const jsonApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_JSON_PLACEHOLDER_URL
})

export default jsonApi;