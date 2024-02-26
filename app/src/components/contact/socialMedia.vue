<template>
  <a :href="card.linkURL">
    <div class="p-4 md:w-28 border rounded-lg flex justify-center">
      <img :src="card.imageURL" :alt="card.name" class="h-10 w-10" /></div
  ></a>
</template>

<script setup>
const props = defineProps({
  card: Object,
});
</script>
