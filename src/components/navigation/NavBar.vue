<template>
  <div class="mt-4 primary--text text-capitalize">
    <v-btn to="#" depressed rounded dense> Doctor </v-btn>
    <v-btn to="#" depressed rounded dense> Clinics </v-btn>
    <v-btn to="#" depressed rounded dense> About </v-btn>

    <template class="right-tool-bar">
      <!-- Tranlations -->
      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            icon
          >
            <v-icon dense>mdi-translate</v-icon>
            <v-icon dense small>mdi-chevron-down</v-icon> 
          </v-btn>
        </template>
        <v-list>
          <v-list-item class="font-weight-black caption">TRANSLATIONS</v-list-item>
          <v-list-item
            class="py-0 text-left"
            v-for="(item, index) in ['English', 'Khmer']"
            :key="index"
          >
            <v-list-item-title class="my-0 py-0">
              <v-btn class="text-capitalize caption">
                {{ item }}
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Toolbar Icons -->
      <template v-if="user">
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              icon
            >
              <v-icon dense>mdi-cog</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item class="font-weight-black caption px-3">
              <v-btn
                dense
                depressed
                rounded
                class="text-capitalize text-left"
                @click="()=> ''"
              >
                <v-icon>mdi-logout</v-icon>
                <span>Logout</span>
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>

      <!-- Avatar -->
      <template v-if="user">
        <v-avatar
          color="info"
          size="40"
        >
        <span class="white--text text-body-2">RM</span>
        </v-avatar>
        <span class="text--body-1 ml-3">RamekhCHHOENG</span>
      </template>
      <template>
        <v-btn
          class="text-capitalize"
          color="primary"
          dark
          rounded
          @click="delRecord"
        >
          <v-icon>mdi-doctor</v-icon>
          For Doctor
        </v-btn>
      </template>
    </template>
    <!-- <LoginDialog ref="login" /> -->
  </div>
  <!-- <v-toolbar-items>
  </v-toolbar-items> -->
</template>

<script>

import AuthService from '@/services/auth.service'

export default {
  name: 'NavBar',
  component: {
    // LoginDialog: () => import('@/views/authentication/Login.vue'),
  },
  async created () {
    this.user = await AuthService.getUserData()
    console.log(this.user, 'here user data')
  },  

  data: () => ({
    user: null,
    dialog: true,
  }),
  methods: {
    async delRecord() {
        if (
          await this.$refs.confirm.open(
            "Confirm",
            "Are you sure you want to delete this record?"
          )
        ) {
          this.deleteRecord();
        }
      },
    async logout () {
      try {
        await AuthService.logout()
      } catch (error) {
        console.log(error)
      } finally {
        this.user = null
      }
    },
    openLoginDialog () {
      this.$refs.login.open()
    }
  }
}
</script>