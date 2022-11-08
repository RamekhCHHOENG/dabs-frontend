<template>
  <v-row justify="center">
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
          v-bind="attrs"
          v-on="on"
          rounded
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
          <!-- <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal first name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal middle name"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal last name*"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                  <v-text-field
                      label="Phone Number*"
                      counter="10"
                  />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-select
                  :items="['Doctor', 'Clinic']"
                  label="Create Account As*"
                  required
                ></v-select>
              </v-col>
            </v-row>
          </v-container> -->
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
                  v-model="userData.email"
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
                  v-model="userData.password"
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
                      @click="dialog = false"
                    >
                      Cancel
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="primary"
                      depressed
                      :disabled="!valid"
                      @click="snackbar = true"
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
                    v-for="n in userTypeList"
                    :key="n"
                    :label="n"
                    :value="n"
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
                      @click="dialog = false"
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
export default {
  name: 'LoginView',
  watch: {
    userData: {
      handler(val) {
        if (val) {
          this.userData = initialForm()
          console.log(this.userData, 'here user form')
        }
      },
      immediate: true
    }
  },  
  data: () => ({
      dialog: false,
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
      userData: initialForm(),
      rules: {
      email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Your Email should look like user@email.com";
      },
      emailRequired: value => !!value || "You must enter your Email",
      passwordRequired: value => !!value || "Your password is required",
      passwordMatch: value => value === this.password || "Your passwords don't match",
      min: v =>
          v.length >= 14 ||
          "Your password must be at least 14 characters",
      emailMatch: () => "The email and password you entered don't match"
      }
  }),
}
const initialForm = () => {
  return {
    email: '',
    password: ''
  }
}
</script>
