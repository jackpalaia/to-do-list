const axios = require('axios')
const baseUrl = '/api/tasks'

const getAll = async () => {
  return await axios.get(baseUrl).data
}
const create = async task => {
  return await axios.post(baseUrl, task).data
}
const remove = async id => {
  return await axios.delete(`${baseUrl}/${id}`)
}
const update = async (id, task) => {
  return await axios.put(`${baseUrl}/${id}`, task)
}

export default { getAll, create, remove, update }