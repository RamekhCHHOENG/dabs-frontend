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

      <navigation-view />

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    
    <div>
      <footer-view />
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    'navigation-view': () => import('@/components/navigation.vue'),
    'footer-view': () => import('@/components/footer/Footer.vue'),
  },
  mounted () {
    console.log(' app mounted')
  }
}
</script>

<style scope>
.v-btn:before {
  opacity: 0 !important;
}

.v-ripple__container {
  opacity: 0 !important;
}
</style>