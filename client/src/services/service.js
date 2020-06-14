const axios = require('axios')
const baseUrl = '/api/tasks'

const getAll = async () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
const create = async task => {
  const request = axios.post(baseUrl, task)
  return request.then(response => response.data)
}
const remove = async id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}
const update = async (id, task) => {
  const request = axios.put(`${baseUrl}/${id}`, task)
  return request.then(response => response.data)
}

export default { getAll, create, remove, update }