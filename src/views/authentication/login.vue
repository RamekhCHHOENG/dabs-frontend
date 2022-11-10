<template>
  <v-row>
    <v-dialog
      v-model="dialog1"
      persistent
      max-width="600px"
    >
      <v-card elevation="4" light tag="section">
        <v-card-title>
          <v-layout align-center justify-space-between>
              <div class="headline">
                DOCTOR/CLINIC
              </div>
              <v-flex>
                <v-img 
                  alt="doctor" 
                  class="ml-3" 
                  contain 
                  height="48px" 
                  width="361"
                  position="center right" 
                  src="@/assets/images/doctor+.png"
              />
              </v-flex>
            </v-layout>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-tabs
            v-model="tab"
            active-class="white"
            background-color="grey lighten-2"
            height="40"
            fixed-tabs
            hide-slider
          >
            <v-tab>Login</v-tab>
            <v-tab>New user?</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
            <v-tab-item :value="0">
                <v-card-text>
                <v-form
                  v-model="valid"
                  ref="form"
                  lazy-validation
                >
                <v-text-field
                  v-model="form.email"
                  :rules="[rules.emailRequired, rules.email]"
                  label="Please enter your Email"
                  prepend-icon="mdi-email"
                  type="email"
                  clearable
                  dense
                  outlined
                  validate-on-blur
                />
                <v-text-field
                  v-model="form.password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.passwordRequired, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
                  label="Please enter your password"
                  prepend-icon="mdi-lock"
                  counter
                  dense
                  outlined
                />
                <v-row
                  class="text-center mt-4"
                >
                  <v-col cols="12" class="d-flex">
                    <v-btn
                      color="primary"
                      dark
                      depressed
                      @click="$emit('update:dialog', false)"
                    >
                      Cancel
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="primary"
                      depressed
                      :disabled="!valid"
                      @click="login"
                    >
                      Login
                    </v-btn>
                  </v-col>
                  <v-col class="text-left">
                    <a href="/" class="subtitle-2">Forgot your password?</a>
                  </v-col>
                </v-row>
                </v-form>
                </v-card-text>
            </v-tab-item>
            <v-tab-item :value="1">
                <v-card-text>
                <v-text-field
                  label="Legal First Name"
                  type="text"
                  dense
                  outlined
                />
                <v-text-field
                  label="Legal last Name"
                  type="text"
                  dense
                  outlined
                />
                <h4 class="font-weight-black">What type of user are you?</h4>
                <v-radio-group v-model="userType" row>
                  <v-radio
                    v-for="(item, index) in userTypeList"
                    :key="index"
                    :label="item"
                    :value="item"
                  ></v-radio>
                </v-radio-group>
                <v-text-field
                  v-model="email"
                  label="Email"
                  prepend-icon="mdi-email"
                  type="email"
                  dense
                  outlined
                />
                <v-text-field
                  v-model="email"
                  label="Phone Number*"
                  name="phone-number"
                  prepend-icon="mdi-phone"
                  type="text"
                  dense
                  outlined
                />
                <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.passwordRequired, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  label="Please enter your password"
                  prepend-icon="mdi-lock"
                  counter
                  dense
                  outlined
                  required
                  @click:append="show1 = !show1"
                />
                <v-text-field
                  v-model="newPassword"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.passwordMatch]"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
                  label="Please enter your password"
                  prepend-icon="mdi-lock"
                  counter
                  dense
                  outlined
                  required
                />
                <v-row align="center" justify="space-around" class="mt-4">
                  <v-col cols="12" class="d-flex">
                    <v-btn
                      color="primary"
                      dark
                      depressed
                      @click="$emit('update:dialog', false)"
                    >
                      Cancel
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue-grey darken-3"
                      dark
                      depressed
                      @click="snackbar = true"
                    >
                      Login
                    </v-btn>
                  </v-col>
                </v-row>
                </v-card-text>
            </v-tab-item>
            </v-tabs-items>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>

import AuthService from '@/services/auth.service'
export default {
  name: 'LoginView',
  // watch: {
  //   form: {
  //     handler(val) {
  //       if (val) {
  //         this.form = initialForm()
  //       }
  //     },
  //     immediate: true
  //   }
  // },  
  props: {
    dialog: {
      type: Boolean,
      required: true,
      default: () => false
    }
  },
  data: () => ({
      dialog1: false,
      tab: 0,
      email: null,
      firstName: null,
      lastName: null,
      password: null,
      snackbar: false,
      newPassword: null,
      show1: false,
      valid: false,
      userType: 1,

      userTypeList: ['Doctor', 'Clinic'],
      form: initialForm(),
      rules: {
      email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Your Email should look like user@email.com";
      },
      emailRequired: value => !!value || "You must enter your Email",
      passwordRequired: value => !!value || "Your password is required",
      passwordMatch: value => value === this.password || "Your passwords don't match",
      min: v =>
          v.length >= 8 ||
          "Your password must be at least 8 characters",
      emailMatch: () => "The email and password you entered don't match"
      }
  }),
  methods: {
    async login () {
      if (!this.$refs.form.validate()) return
      try {
        const { token } = await AuthService.loign(this.form)

        localStorage.setItem('token', token)
        this.$router.push('/')
      } catch (error) {
        console.log(error.response.data.message, 'error')
      } finally {
        this.$emit('update:dialog', false)
      }
    }
  }
}
const initialForm = () => {
  return {
    email: '',
    password: ''
  }
}
</script>

