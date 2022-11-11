<template>
  <v-container>
    <v-btn @click="dialog = true">Open Dialog</v-btn>
    <confirm ref="confirm"
      :value="dialog"
      title="hello"
      @onCancel="dialog = false"
     />
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    components: {
      'confirm': () => import('@/components/Dialog.vue')
    },  
    data () {
      return {
        dialog: false
      }
    }, 
    methods: {
      open () {
        this.$refs.confirm.open('Delete', 'Are you sure?', { color: 'red' })
      }
    }
  }
</script>
