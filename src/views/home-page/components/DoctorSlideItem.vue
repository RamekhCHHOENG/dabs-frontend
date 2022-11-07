<template>
  <v-card
    class="ma-10"
    elevation="0"
  >
    <div
      class="text-center"
      align="center"
      justify="center"
    >
    <v-row>
      <v-col cols="4">
        <v-img
          src="@/assets/images/man.png"
          class="pa-3"
          height="100"
          width="100"
          alt="Image"
        />
        
        <p class="mt-3 caption blue--text">Details</p>

      </v-col>
      <v-col cols="8" class="text-left">
        <h4>Ramekh CHHOENG</h4>
        <p class="red--text darken-1 caption ma-0">Dentist</p>
        <p class="caption ma-0 mt-2">Experience 8 years</p>
        <p class="caption ma-0 mt-2">Consult Price</p>
        <p class="caption ma-0 mt-2">Dent-Smile Dentist Clinic</p>
      </v-col>
    </v-row>
    </div>
    <v-row>
      <v-col cols="12">
        <v-hover v-slot="{ hover }">
          <v-btn 
            :color="!hover ? 'primary' : '#fff'"
            outlined
            rounded
            :style="{ 'background-color': hover ? '#0288D1' : '#fff' }"
          >
          <v-icon dark>mdi-calendar </v-icon>
            &nbsp;Appointment
          </v-btn>
        </v-hover>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>

export default {
  name: 'DoctorSlideItem',
  props: {
    image: {
      type: String,
      required: true,
      default: () => 'Image',
    },
    title: {
      type: String,
      required: true,
      default: () => 'Title',
    }
  }
};
</script>