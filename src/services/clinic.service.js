import axios from "axios";

const ClinicService = {
  async getTopClinic () {

    const { data } = await axios.get('/api/v1/clinics')

    return data
  },
  async getTopClinicService () {

    const { data } = await axios.get('/api/v1/clinics')

    return data
  }
}
export default ClinicService;

