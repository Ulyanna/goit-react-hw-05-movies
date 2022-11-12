import axios from 'axios';

const API_KEY = "cadd79f1a1e49af0faca0dd1324eca3c"
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
 export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300'

export const getTrending = async () => {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`)
    return response
}

export const getMovieDetails = async (id) => {
    const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`)
    return response.data
}

export const getMovieSearch = async (query) => {
    const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`)
    return response.data
}

export const getMovieCast = async (id) => {
    const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`)
    return response.data
}

export const getMovieReviews = async (id) => {
    const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`)
    return response.data
}