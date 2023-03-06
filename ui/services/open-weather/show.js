import axios from "@axios"
const success = (response, resolve) => {
  resolve(response)
}

const failed = (error, reject) => {
  reject(error)
}

export default (query) =>
  new Promise((resolve, reject) => {
    axios
      .get('/open-weathers?city=' + query)
      .then(response => {
        success(response, resolve)
      })
      .catch(error => {
        failed(error, reject)
      })
  })
