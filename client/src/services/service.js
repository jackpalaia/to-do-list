const axios = require('axios')
const baseUrl = '/api/tasks'

const getAll = async () => (await axios.get(baseUrl)).data
const create = async task => (await axios.post(baseUrl, task)).data
const remove = async id => (await axios.delete(`${baseUrl}/${id}`)).data
const update = async (id, task) => (await axios.put(`${baseUrl}/${id}`, task)).data

export default { getAll, create, remove, update }