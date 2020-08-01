import request from '@/utils/request'
import axios from 'axios'

export function fetchperList(params) {
  return request({
    url: 'http://localhost:8001/base/permissions/querylist',
    method: 'get',
    params
  })
}

export function updateper(params) {
  return axios.post('http://localhost:8001/base/permissions/updateper', params)
}

export function createper(data) {
  // const data={"name":username}
  return axios.post('http://localhost:8001/base/permissions/addper', data)
}

export function deleteper(data) {
  // const data={"name":username}
  return axios.post('http://localhost:8001/base/permissions/removeper', data)
}

