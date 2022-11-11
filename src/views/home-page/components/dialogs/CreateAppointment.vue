<template>
  <v-dialog
    class="rounded-xl"
    v-bind="getAttributesBinding"
    v-on="$listeners"
    scrollable
    persistent
    width="600px"
  >
    <v-card>
      <v-row>
        <v-col>
          <div class="text-h6  pl-6 pt-4 font-weight-bold">Book an appointment</div>
          <div class="text-h6 pl-6 font-weight-bold">Book and appointment with Dr. 
            {{ items.first_name + ' ' + items.last_name }}
          </div>
          <span class="pl-6 pt-6 font-weight-bold">
              Consult Price:
            <span class="red--text">
              {{ items.consult_price }}
            </span>$</span>
        </v-col>
      </v-row>

      <v-card-text class="pa-6">
        <v-skeleton-loader
          :loading="loading"
          transition="fade-transition"
          type="list-item-three-line"
        >
          <v-container fluid class="pa-0 ma-0">
            <v-form ref="form" v-model="valid">
              <v-text-field
                  v-model="form.name"
                  label="Full Name*"
                  :rules="[
                    v => !!v || 'Full Name is required',
                  ]"
                  type="text"
                  dense
                  outlined
                  required
                />
              <v-radio-group 
                class="ma-0 pa-0"
                v-model="form.gender"
                row
              >
                <v-radio
                  v-for="(item, index) in genderList"
                  :key="index"
                  :label="item.name"
                  :value="item.id"
                ><span>{{ item }}</span></v-radio>
              </v-radio-group>
              <v-text-field
                v-model="form.email"
                label="Email*"
                :rules="[
                  rules.email
                ]"
                type="email"
                dense
                outlined
                required
              />
              <v-text-field
                v-model="form.phoneNumber"
                label="Phone Number*"
                :rules="[
                  v => !!v || 'Phone Number is required',
                ]"
                name="phone-number"
                type="phone"
                dense
                outlined
                required
              />
              <v-textarea
                outlined
                name="input-6-3"
                label="Describe your symtom*"
                rows="3"
                :value="form.symtom"
              ></v-textarea>
              <v-row >
                <v-col cols="6">
                  <v-dialog
                    ref="date_dialog"
                    v-model="dateModal"
                    :return-value.sync="form.dateTime"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="form.dateTime"
                        label="Appointment Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        outlined
                        dense
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="form.dateTime"
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="dateModal = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.date_dialog.save(form.dateTime)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-col>
                <v-col cols="6">
                  <v-dialog
                    ref="time_dialog"
                    v-model="timeModal"
                    :return-value.sync="time"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="form.time"
                        label="Appointment Time"
                        prepend-icon="mdi-clock-time-four-outline"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        outlined
                        dense
                      ></v-text-field>
                    </template>
                    <v-time-picker
                      v-model="form.time"
                      full-width
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="timeModal = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.time_dialog.save(form.time)"
                      >
                        OK
                      </v-btn>
                    </v-time-picker>
                  </v-dialog>
                </v-col>
              </v-row>

              
            </v-form>
          </v-container>
        </v-skeleton-loader>
      </v-card-text>

      <v-card-actions class="pa-6 ma-0">
        <v-row align="center" justify="space-around" class="mt-4">
          <v-col cols="12" class="d-flex">
            <v-btn
              color="error"
              depressed
              @click="onCancel"
            >
              Cancel
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              depressed
              :disabled="!valid"
              @click="createAppointment"
            >
              Submit
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
name: 'CreateAppointment',
props: {
    value: {
      type: Boolean,
      default: () => false
    },
    loading: {
      type: Boolean,
      default: false
    },
    items: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      valid: false,
      dateModal: false,
      timeModal: false,
      form: {
        name: '',
        email: '',
        phoneNumber: '',
        gender: 1,
        description: '',
        dateTime: '',
        symtom: '',
        time: ''
      },
      genderList: [
        {
          id: 1,
          name: 'Male'
        },
        {
          id: 2,
          name: 'Female'
        }
      ],
      rules: {
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Your Email should look like user@email.com";
        },
    }
    }
  },
  computed: {
    getAttributesBinding() {
      return {
        ...this.$attrs,
        value: this.value,
        loading: this.loading
      };
    },
  },
  methods: {
    async createAppointment () {
      if (!this.$refs.form.validate()) return

      try {
        this.form.dateTime = this.form.dateTime + ' ' + this.form.time
        console.log(this.form, 'form')
        this.$router.push('/')
      } catch (error) {
        console.log(error.response.data.message, 'error')
      } finally {
        this.$emit('onCancel')
      }
    },
    onCancel () {
      this.$emit('onCancel')
    }
  }
};
</script>
