<template>
  <v-container>
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
        ></v-autocomplete>
      </v-col>
      <v-col cols="5">
        <v-autocomplete
          :items="locations"
          label="Search Doctor, Clinics, Hospitals, Diseases Etc"
          auto-select-first
          clearable
          prepend-icon="mdi-magnify"
        ></v-autocomplete>
      </v-col>
      <v-col cols="1">
        <v-btn
          class="ma-2"
          color="info"
        >
          <v-icon>mdi-magnify</v-icon>
          Search
        </v-btn>
      </v-col>
    </v-row>

    <div>
      <div>
        <list-title-description
          title="Top Specialties"
          description="Find a doctor with his/her specialty"
        />
        <specialty-slide-group 
          :items="specialtyList"
        />
      </div>
      <div>
        <list-title-description
          title="Specialty Doctors"
          description="Patients always return to these doctors"
        />
        <doctor-slide-group 
          :items="specialtyList"
        />
      </div>
      <div>
        <list-title-description
          title="Top Clinics"
          description="Patients have reviewed excellence for these clinics"
        />
        <specialty-slide-group 
          :items="specialtyList"
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
    <!-- <login /> -->
  </v-container>
</template>

<script>
  // import Login from './authentication/login.vue'

  export default {
    name: 'HomeView',

    components: {
      'list-title-description': () => import('./components/ListTitle.vue'),
      'doctor-slide-group': () => import('./components/DoctorSlideGroup.vue'),
      'specialty-slide-group': () => import('./components/SpecialtySlideGroup.vue'),
    },
    data () {
      return {
        locations: ['Phnom Penh', 'Siem Reap'],
        specialtyList: [
          {
            id: 1,
            image: '@/assets/image/specialty/heart.png',
            title: 'Cadiologiest'
          },
          {
            id: 2,
            image: '@/assets/image/specialty/heart.png',
            title: 'Cadiologiest'
          },
          {
            id: 3,
            image: '@/assets/image/specialty/heart.png',
            title: 'Cadiologiest'
          },
          {
            id: 4,
            image: '@/assets/image/specialty/heart.png',
            title: 'Cadiologiest'
          },
          {
            id: 5,
            image: '@/assets/image/specialty/heart.png',
            title: 'Cadiologiest'
          },
          {
            id: 6,
            image: '@/assets/image/specialty/heart.png',
            title: 'Cadiologiest'
          },
          {
            id: 7,
            image: '@/assets/image/specialty/heart.png',
            title: 'Cadiologiest'
          },
          {
            id: 8,
            image: '@/assets/image/specialty/heart.png',
            title: 'Cadiologiest'
          },
          {
            id: 9,
            image: '@/assets/image/specialty/heart.png',
            title: 'Cadiologiest'
          },
          {
            id: 10,
            image: '@/assets/image/specialty/heart.png',
            title: 'Cadiologiest'
          },
          {
            id: 11,
            image: '@/assets/image/specialty/heart.png',
            title: 'Cadiologiest'
          },
        ]
      }
    }
  }
</script>
