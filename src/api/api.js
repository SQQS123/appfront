import axiosInstance from './index'

const axios = axiosInstance

export const getBooks = () => {return axios.get(`http://localhost:8000/api/articles/`)}

export const postBook = (bookName, bookAuthor) => {return axios.post(`http://localhost:8000/api/articles/`,{'name':bookName,'author':bookAuthor})}