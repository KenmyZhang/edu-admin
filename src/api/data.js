import axios from '@/libs/api.request'

export const getTableData = () => {
  return axios.request({
    url: 'question/list',
    method: 'get'
  })
}

export const getDragList = () => {
  return axios.request({
    url: 'get_drag_list',
    method: 'get'
  })
}

export const errorReq = () => {
  return axios.request({
    url: 'error_url',
    method: 'post'
  })
}

export const saveErrorLogger = info => {
  return axios.request({
    url: 'save_error_logger',
    data: info,
    method: 'post'
  })
}

export const uploadImg = formData => {
  return axios.request({
    url: 'image/upload',
    data: formData
  })
}

export const getOrgData = () => {
  return axios.request({
    url: 'knowledge/point/multi/list?knowledge_id=55cexjwn93bbjxuusf9ctf1c8a',
    method: 'get'
  })
}

export const setOrgData = knowledge_point => {
  return axios.request({
    url: '/smart-edu-server/knowledge/point',
    method: 'post',
    data: knowledge_point
  })
}
