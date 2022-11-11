<template>
  <div>
    <v-slide-group
      v-model="model"
    >
      <v-slide-item 
        v-for="item in items" 
        :key="item.id"
      >
        <specialty-slide-item 
          :image="item.image"
          :title="`${item.first_name} ${item.last_name}`"
          specialty="N/A"
          exp="N/A"
          clinic="N/A"
          :consultPrice="item.consult_price"
          @onCreate="onCreate(item)"
        />
      </v-slide-item>
    </v-slide-group>

    <create-appointment 
      :value="isCreateDialog"
      :items="userData"
      @onCancel="onCancel"
    />
  </div>
</template>
<script>
export default {
  name: 'DoctorSlideGroup',
  components: {
    'specialty-slide-item': () => import('./DoctorSlideItem.vue'),
    'create-appointment': () => import('./dialogs/CreateAppointment.vue')
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    }
  },
  data: () => ({
    model: null,
    isCreateDialog: false,
    userData: null,
  }),
  methods: {
    onCreate (item) {
      this.userData = item
      this.isCreateDialog = true
    },
    onCancel () {
      this.isCreateDialog = false
    }
  }
};
</script>