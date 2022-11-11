<template>
  <v-slide-group
    v-model="model"
  >
    <v-slide-item 
      v-for="item in items" 
      :key="item.id"
    >
      <specialty-slide-item 
        :image="item.image"
        :name="item.name"
      />
    </v-slide-item>
  </v-slide-group>
</template>
<script>
export default {
  name: 'SpecialtySlideGroup',
  components: {
    'specialty-slide-item': () => import('./SpecialtySlideItem.vue')
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
  }),
};
</script>