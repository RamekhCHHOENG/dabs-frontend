<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :class="{ 'on-hover': hover }"
      class="pa-6"
      elevation="0"
      :outlined="hover"
      href="#"
  >
      <div
      class="text-center"
      align="center"
      justify="center"
      >
      <v-img
        src="@/assets/images/specialty/heart.png"
        class="pa-8"
        height="128"
        width="128"
        alt="Image"
      />
      
      <p
        class="mt-8"
      >
        {{ name }}
      </p>
        </div>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  name: 'SpecialtySlideItem',
  props: {
    image: {
      type: String,
      required: true,
      default: () => 'Image',
    },
    name: {
      type: String,
      required: true,
      default: () => 'name',
    }
  }
};
</script>