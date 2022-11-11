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
      <v-card-title class="pa-0 justify-center">
        <div class="d-block flex-grow-1 text-center">
          <slot name="header">
            <div class="text-h5 pa-4 font-weight-bold">{{ title }}</div>
          </slot>
          <v-divider></v-divider>
        </div>
      </v-card-title>

      <v-card-text class="pa-6">
        <v-skeleton-loader
          :loading="loading"
          transition="fade-transition"
          type="list-item-three-line"
        >
          <v-container fluid class="pa-0 ma-0">
            <slot></slot>
          </v-container>
        </v-skeleton-loader>
      </v-card-text>

      <v-card-actions class="pa-6 ma-0 text-left">
        <slot name="footer" :close="onCancel">
          <v-btn color="primary" @click="onCancel">
            Cancel
          </v-btn>
        </slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
name: 'CustomDialog',
props: {
    value: {
      type: Boolean,
      default: () => false
    },
    title: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
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
    onCancel () {
      this.$emit('onCancel')
    }
  }
};
</script>
