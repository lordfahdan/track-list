import axios from 'axios'

const baseURL = process.env.VUE_APP_BASEURL

export default (extraConfig = {}) => {
    return axios.create({
      baseURL,
      withCredentials: false,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      ...extraConfig
    })
  }