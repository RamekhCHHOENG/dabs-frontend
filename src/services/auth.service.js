import axios from "axios";

const AuthService = {
  async loign (credentials) {

    const { data } = await axios.post('/api/v1/login', credentials)

    return data
  },
  async register() {
    const data = axios.post()

    return data;
  },
  async logout() {
    const data = axios.post('/api/v1/logout')

    return data;
  },
  async getUserData() {
    const { data } = await axios.get('/api/v1/user')

    return data
  },
};
export default AuthService;

