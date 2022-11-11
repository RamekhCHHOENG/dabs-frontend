<template>
  <v-row>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
    <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="text-capitalize"
          color="primary"
          dark
          rounded
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-doctor</v-icon>
          For Doctor
        </v-btn>
      </template>
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
                      color="error"
                      depressed
                      @click="dialog = false"
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
              <v-form
                ref="form_register"
                v-model="createValid"
                lazy-validation
              >
                <v-card-text>
                  <v-text-field
                    v-if="registerForm.userType === 2"
                    v-model="registerForm.name"
                    label="Clinic Name*"
                    :rules="[
                      v => !!v || 'First Name is required',
                    ]"
                    type="text"
                    dense
                    outlined
                    required
                  />
                  <v-text-field
                  v-if="registerForm.userType === 1"
                    v-model="registerForm.firstName"
                    label="Legal First Name*"
                    :rules="[
                      v => !!v || 'First Name is required',
                    ]"
                    type="text"
                    dense
                    outlined
                    required
                  />
                  <v-text-field
                  v-if="registerForm.userType === 1"
                    v-model="registerForm.lastName"
                    label="Legal last Name*"
                    :rules="[
                      v => !!v || 'Last Name is required',
                    ]"
                    type="text"
                    dense
                    outlined
                    required
                  />
                  <h4 class="font-weight-black">What type of user are you?</h4>
                  <v-radio-group v-model="registerForm.userType" row>
                    <v-radio
                      v-for="(item, index) in userTypeList"
                      :key="index"
                      :label="item.name"
                      :value="item.id"
                    ><span>{{ item }}</span></v-radio>
                  </v-radio-group>
                  <v-text-field
                    v-model="registerForm.email"
                    label="Email*"
                    :rules="[
                      v => !!v || 'Email is required',
                    ]"
                    prepend-icon="mdi-email"
                    type="email"
                    dense
                    outlined
                    required
                  />
                  <v-text-field
                    v-model="registerForm.phoneNumber"
                    label="Phone Number*"
                    :rules="[
                      v => !!v || 'Phone Number is required',
                    ]"
                    name="phone-number"
                    prepend-icon="mdi-phone"
                    type="phone"
                    dense
                    outlined
                    required
                  />
                  <v-text-field
                    v-model="registerForm.password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.passwordRequired, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    label="Please enter your password*"
                    prepend-icon="mdi-lock"
                    counter
                    dense
                    outlined
                    required
                    @click:append="show1 = !show1"
                  />
                  <v-text-field
                    v-model="registerForm.newPassword"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.passwordRequired, rules.passwordMatch]"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                    label="Please enter your password*"
                    prepend-icon="mdi-lock"
                    counter
                    dense
                    outlined
                    required
                  />
                  <v-row align="center" justify="space-around" class="mt-4">
                    <v-col cols="12" class="d-flex">
                      <v-btn
                        color="error"
                        depressed
                        @click="dialog = false"
                      >
                        Cancel
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        depressed
                        :disabled="!createValid"
                        @click="register"
                      >
                        Submit
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-form>
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
  data () {
    return {
      dialog: false,
      tab: 0,
      snackbar: false,
      show1: false,
      valid: false,
      createValid: false,
      userType: 1,

      userTypeList: [{ id: 1, name: 'Doctor' }, {id: 2, name: 'Clinic'}],
      form:  {
        email: '',
        password: '',
      },
      registerForm: {
        email: '',
        password: '',
        newPassword: '',
        name: '',
        firstName: '',
        lastName: '',
        userType: 1,
        phoneNumber: ''
      },
      rules: {
      email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Your Email should look like user@email.com";
      },
      emailRequired: value => !!value || "You must enter your Email",
      passwordRequired: value => !!value || "Your password is required",
      passwordMatch: value => value === this.registerForm.newPassword || "Your passwords don't match",
      min: v =>
          v.length >= 8 ||
          "Your password must be at least 8 characters",
      emailMatch: () => "The email and password you entered don't match"
      }
    }
  },
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
        // this.$emit('update:dialog', false)
        this.dialog = false
      }
    },
    async register () {
      if (!this.$refs.form_register.validate()) return
      try {
        const data = await AuthService.register(this.registerForm)

        console.log(data, 'register data')

        // localStorage.setItem('token', token)
        // this.$router.push('/')
        // this.dialog = false

      } catch (error) {
        console.log(error.response.data.message, 'error')
      } finally {
        // this.$emit('update:dialog', false)
      }
    }
  }
}
</script>

