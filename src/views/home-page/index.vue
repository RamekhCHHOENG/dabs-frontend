<template>
  <v-container>
    <login />
    <v-row align="center" justify="center" class="text-center">
      <v-col cols="12" >
        <div class="display-2 font-weight-bold">Search Doctor, Make an Appointment</div>
        <div class="mt-6">Discover the best doctors, clinic & hospital the city nearest to you.</div>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="3">
        <v-autocomplete
          :items="locations"
          label="Location"
          auto-select-first
          clearable
          prepend-icon="mdi-map-maker"
          hint="Based on your Location"
        ></v-autocomplete>
      </v-col>
      <v-col cols="5">
        <v-autocomplete
          :items="locations"
          label="Search Doctor, Clinics, Hospitals, Diseases Etc"
          auto-select-first
          clearable
          prepend-icon="mdi-magnify"
          hint="Ex : Dental or Sugar Check up etc"
        ></v-autocomplete>
      </v-col>
      <v-col cols="1">
        <v-hover v-slot="{ hover }">
          <v-btn 
            :color="!hover ? '#fff' : 'primary'"
            class="text-capitalize"
            outlined
            rounded
            dense
            :style="{ 'background-color': hover ? '#fff ' : '#0288D1' }"
          >
          <v-icon dark>mdi-magnify </v-icon>
            &nbsp;<span>search</span>
          </v-btn>
        </v-hover>
      </v-col>
    </v-row>

    <div>
      <div>
        <list-title-description
          title="Specialty Doctors"
          description="Patients always return to these doctors"
        />
        <doctor-slide-group 
          :items="doctors"
        />
      </div>
      <div>
        <list-title-description
          title="Top Specialties"
          description="Find a doctor with his/her specialty"
        />
        <specialty-slide-group 
          :items="specialtyList"
          :loading="true"
        />
      </div>
      <div>
        <list-title-description
          title="Top Clinics"
          description="Patients have reviewed excellence for these clinics"
        />
        <specialty-slide-group 
          :items="clinics"
        />
      </div>
    </div>

    <!-- <div>
      <v-container
      >
        <v-fade-transition mode="out-in">
          <v-row>
            <v-col cols="12">
              <v-card>
                <v-img
                  src="@/assets/images/doctor-office-banner-background-healthcare-hospital-background-concept-87323968.jpeg"
                  contain
                  class="grey darken-4"
                ></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-fade-transition>
      </v-container>
    </div> -->
    <login />
  </v-container>
</template>

<script>
  // import Login from './authentication/login.vue'
  import SpecialtyService from '@/services/specialty.service'
  import ClinicService from '@/services/clinic.service'
  import DoctorService from '@/services/doctor.service'

  export default {
    name: 'HomeView',

    components: {
      'list-title-description': () => import('./components/ListTitle.vue'),
      'doctor-slide-group': () => import('./components/DoctorSlideGroup.vue'),
      'specialty-slide-group': () => import('./components/SpecialtySlideGroup.vue'),
      'login': () => import('@/views/authentication/Login.vue')
    },
    async created () {
      const { specialties } = await SpecialtyService.getTopSpecialty()
      const { clinics } = await ClinicService.getTopClinic()
      const { doctors } = await DoctorService.getTopDoctor()
      this.doctors = doctors
      this.specialtyList = specialties
      this.clinics = clinics

      console.log(this.clinics, 'clinic')
    },  
    mounted () {
      () => {
        console.log('mounted======================')
      }
    },
    data () {
      return {
        locations: ['Phnom Penh', 'Siem Reap'],
        specialtyList: [],
        clinics: [],
        doctors: []
      }
    }
  }
</script>
