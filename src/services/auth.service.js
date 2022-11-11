import axios from "axios";

const AuthService = {
  async loign (credentials) {

    const { data } = await axios.post('/api/v1/login', credentials)

    return data
  },
  async register(payload) {
    console.log(payload, 'payload')
    const data = axios.post('/api/v1/register', payload )
    return data
  },
  async logout() {
    const data = axios.post('/api/v1/logout')

    return data
  },
  async getUserData() {
    const { data } = await axios.get('/api/v1/user')

    return data
  },
};
export default AuthService;

