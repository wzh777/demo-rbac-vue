import request from '@/utils/request'
import axios from 'axios'

export function fetchRoleList(params) {
  return request({
    url: 'http://localhost:8001/base/role/querylist',
    method: 'get',
    params
  })
}

export function updaterole(params) {
  return axios.post('http://localhost:8001/base/role/updaterole', params)
}

export function updateroleoer(params) {
  return axios.post('http://localhost:8001/base/role/managepermisssions', params)
}

export function creatrole(data) {
  // const data={"name":username}
  return axios.post('http://localhost:8001/base/role/addrole', data)
}

export function deleterole(data) {
  // const data={"name":username}
  return axios.post('http://localhost:8001/base/role/removerole', data)
}

