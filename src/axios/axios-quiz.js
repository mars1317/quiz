import axios from 'axios'

export default axios.create({
  baseURL: 'https://quiz-db65c-default-rtdb.firebaseio.com/'
})