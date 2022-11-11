import axios from "axios";

const SpecialtyService = {
  async getTopSpecialty () {

    const { data } = await axios.get('/api/v1/specialties')

    return data
  }
}
export default SpecialtyService;

