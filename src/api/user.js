import request from '@/utils/request'

export function getUsers() {
  return request({
    url: '/api/v1/user',
    method: 'get'
  })
}

