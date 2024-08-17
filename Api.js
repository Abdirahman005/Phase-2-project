import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getRecipes = () => api.get('/recipes');
export const getRecipeById = (id) => api.get(`/recipes/${id}`);

export const addFavorite = (favorite) => api.post('/favorites', favorite);

export const getFavorites = (userId) => api.get(`/favorites?userId=${userId}`);

export const registerUser = (user) => api.post('/users', user);

export const loginUser = (credentials) => api.get('/users', { params: credentials });
