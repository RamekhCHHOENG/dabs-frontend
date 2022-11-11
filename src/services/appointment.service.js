import axios from "axios";

const AppointmentService = {
  async createAppointment () {

    const { data } = await axios.get('/api/v1/appointments/create')

    return data
  }
}
export default AppointmentService;

