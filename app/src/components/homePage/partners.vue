<template>
  <div class="max-w-6xl mx-auto max-lg:px-2">
    <div class="w-full border-t lg:border-t-2 border-slate-300 py-2"></div>
    <h1 class="lg:text-2xl text-lg text-gray-500">
      Accreditation and Partners
    </h1>
    <div class="py-8">
      <Splide :options="splideOptions">
        <SplideSlide
          class="flex justify-center"
          v-for="slide in slides"
          :key="slide.id"
        >
          <!-- Your slide content goes here -->
          <img :src="slide.image" alt="Slide Image" class="lg:h-32" />
          <div class="splide__arrows hidden" />
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
  pagination: false,
  perPage: 3,
  arrows: false,
  autoScroll: {
    speed: 1,
  },
};
</script>
