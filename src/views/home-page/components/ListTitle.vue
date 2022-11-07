<template>
  <div>
    <h3>{{ title }}</h3>
    <span>{{ description }}</span>
  </div>
</template>
<script>
export default {
  name: "ListTitle",
  props: {
    title: {
      type: String,
      required: true,
      default: () => "Title",
    },
    description: {
      type: String,
      required: true,
      default: () => "Title",
    },
  },
};
</script>
