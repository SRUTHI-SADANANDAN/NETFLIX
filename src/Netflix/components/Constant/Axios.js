import axios from 'axios'
import { baseUrl } from './constant'

export default axios.create({baseURL:baseUrl})