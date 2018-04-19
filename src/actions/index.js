import axios from 'axios'


export const FETCH_DATA = 'FETCH_DATA'
export const fetchData = () => {
  return {
    type: FETCH_DATA
  }
}

export const SIGNUP = 'SIGNUP'
export const doSIGNUP = () => {
  return {
    type: SIGNUP,
    payload: registration()
  }
}

const registration = () => {
  const url = 'http://172.104.50.9:3000/api/Users'
  const data = {
    email: 'arsa@wb.com',
    password: 'arsawb6'
  }
return axios.post(url, data)
.then(res => {
  console.log(res)
  return res.data
})
  .catch(err => {
    console.log(err)
  })
}