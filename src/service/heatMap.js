import axios from '../utils/axios'
export function renderHeatMap () {
  return axios({
    url: '/renderHeatMap',
    method: 'get',
  })
}