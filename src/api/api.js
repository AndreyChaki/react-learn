import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {'API-KEY': '2f804a5b-7f3d-4dfa-906d-1eb4a95278d5'},
  baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const authAPI = {
  authMe() {
    return instance.get('auth/me')
      .then(response => response.data)
  }
}