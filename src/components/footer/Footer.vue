<template>
  <v-container class="text-center body-2">
    <v-divider></v-divider>
    <v-row class="mb-12">
      <v-col class="text-left">
        <h4 class="font-weight-bold mt-4">For Patient</h4>
        <tempalte v-for="item in patients" :key="item">
          <div class="mt-2">
            <v-btn class="text-capitalize" depressed dense>{{ item }}</v-btn>  
          </div>
        </tempalte>
      </v-col>
      <v-col class="text-left">
        <h4 class="font-weight-bold mt-4">For Doctors</h4>
        <tempalte v-for="item in doctors" :key="item">
          <div class="mt-2">{{ item }}</div>
        </tempalte>
        <h4 class="font-weight-bold mt-4">For Cinic</h4>
        <tempalte v-for="patient in clinics" :key="patient">
          <div class="mt-2">{{ patient }}</div>
        </tempalte>
      </v-col>
      <v-col class="text-left">
        <h4 class="font-weight-bold mt-4">Top Specialties</h4>
        <tempalte v-for="patient in doctors" :key="patient">
          <div class="mt-2">{{ patient }}</div>
        </tempalte>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col class="d-flex mt-2">
        <span>
          Copyright © 2022 RamekhCHHOENG. All rights reserved. | Doctor Plus |
          RamekhCHHOENG |  
        </span>
        <v-spacer></v-spacer>
        <span>
          <span class="mx-3">Privacy Policy</span>|
          <span class="mx-3">Term of Use</span>|
          <span class="mx-3">Legal</span>
        </span>
        <v-spacer></v-spacer>
        <span>Cambodia KH</span>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "FooterView",
  data: () => ({
    patients: [
      'Search for Doctor',
      'Search for Clinic',
      'Search for Specialty',
    ],
    doctors: [
      'List Profile',
      'Online Consultant'
    ],
    clinics: [
      'List Profile'
    ]
  })
};
</script>
