<template>
  <div class="max-w-6xl mx-auto">
    <div class="w-full border-t-4 border-slate-900 py-2"></div>
    <h1 class="text-2xl font-semibold">Accreditation and Partners</h1>
    <div class="py-8">
      <Splide :options="splideOptions">
        <SplideSlide class="flex" v-for="slide in slides" :key="slide.id">
          <!-- Your slide content goes here -->
          <img :src="slide.image" alt="Slide Image" class="h-32" />
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { LOOP } from "@splidejs/splide";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
//import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const slides = ref([
  { id: 1, image: "../src/assets/icon.png" },
  { id: 2, image: "../src/assets/icon.png" },
  { id: 3, image: "../src/assets/icon.png" },
  { id: 4, image: "../src/assets/icon.png" },
  { id: 5, image: "../src/assets/icon.png" },
  { id: 6, image: "../src/assets/icon.png" },
  { id: 7, image: "../src/assets/icon.png" },
  // Add more slides as needed
]);

const splideOptions = {
  // Splide options go here
  rewind: true,
  type: LOOP,
  autoplay: true,
  type: "loop",
  drag: "free",
  focus: "center",
  perPage: 5,
  autoScroll: {
    speed: 1,
  },
  // Add more options as needed
};
</script>
