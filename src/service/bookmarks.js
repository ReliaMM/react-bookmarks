import axios from '../utils/axios'
export function getBookMarks( params) {
  return axios({
    url: '/queryByBookMarks',
    method: 'get',
    params,
  })
}