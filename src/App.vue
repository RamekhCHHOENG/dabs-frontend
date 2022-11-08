<template>
  <v-app>
    <v-app-bar
      app
      :elevation="0"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Doctor+ Logo"
          contain
          src="@/assets/images/doctor+.png"
          transition="scale-transition"
          width="170"
        />

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>
      <v-toolbar-title class="primary--text">Doctor Appointment Booking</v-toolbar-title>

      <v-spacer></v-spacer>
      <navbar /> 
      <login />
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    
    <v-content>
      <d-footer />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    'navbar': () => import('@/components/navigation/NavBar.vue'),
    'login': () => import('@/views/authentication/Login.vue'),
    'd-footer': () => import('@/components/footer/Footer.vue')
  },

  data: () => ({
    //
  }),
};
</script>
