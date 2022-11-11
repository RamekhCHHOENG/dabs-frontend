import axios from "axios";

const DoctorService = {
  async getTopDoctor () {

    const { data } = await axios.get('/api/v1/doctors')

    return data
  }
}
export default DoctorService;

