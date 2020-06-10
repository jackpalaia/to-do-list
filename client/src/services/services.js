const axios = require('axios')
const baseUrl = '/api/tasks'

const getAll = async () => {
  return await axios.get(baseUrl).data
}

export default { getAll }