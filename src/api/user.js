import request from '@/utils/request'
import axios from 'axios'

export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function fetchUserList(params) {
  return request({
    url: 'http://localhost:8001/base/user/querylist',
    method: 'get',
    params
  })
}

export function updateUser(params) {
  return axios.post('http://localhost:8001/base/user/updateuser', params)
}

export function updateuserrole(params) {
  return axios.post('http://localhost:8001/base/user/managerole', params)
}

export function selectbyname(username) {
  const data = { 'name': username }
  return axios.post('http://localhost:8001/base/user/querybyname', data)
}

export function creatuser(data) {
  // const data={"name":username}
  return axios.post('http://localhost:8001/base/user/adduser', data)
}

export function deleteuser(data) {
  // const data={"name":username}
  return axios.post('http://localhost:8001/base/user/removeuser', data)
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
