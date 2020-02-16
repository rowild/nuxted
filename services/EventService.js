import axios from 'axios'

// Create single axios instance
const apiClient = axios.create({
  // baseURL: 'http://localhost:3001',
  baseURL: 'https://my-json-server.typicode.com/rowild/nuxted/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 7500
})

export default {
  getEvents () {
    return apiClient.get('/events')
  },
  getEvent (id) {
    return apiClient.get('/events/' + id)
  }
  // getEvents (perPage = 10, page = 1) {
  //   // eslint-disable-next-line no-console
  //   console.log('getevents invoked')
  //   // console.log('getEvents: perPage =', perPage);
  //   // console.log('getEvents: page =', page);
  //   return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  // },
  // getEvent (id) {
  //   return apiClient.get('/events/' + id)
  // },
  // postEvent (event) {
  //   return apiClient.post('/events', event)
  // }
}
