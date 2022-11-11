import axios from "axios";

const ClinicServiceApiService = {
  async getTopClinic () {

    const { data } = await axios.get('/api/v1/clinics')

    return data
  }
}
export default ClinicServiceApiService;

