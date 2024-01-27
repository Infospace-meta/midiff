<template>
  <div class="w-full mx-auto">
    <Splide :options="splideOptions">
      <SplideSlide class="relative" v-for="slide in slides" :key="slide.id">
        <div
          :style="{ backgroundImage: `url('${slide.image}')` }"
          class="w-screen h-96 bg-cover bg-center bg-black relative"
        >
          <!-- Darkened background -->
          <div class="absolute inset-0 bg-black opacity-50"></div>

          <!-- Text content -->
          <div
            class="absolute inset-0 flex items-center justify-center text-white p-4"
          >
            <div>
              <h1 class="text-4xl lg:text-6xl font-bold mb-4">
                {{ slide.title }}
              </h1>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { LOOP } from "@splidejs/splide";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const slides = ref([
  // {
  //   id: 1,
  //   image: "../src/assets/boys.jpg",
  //   title: "ABOUT US",
  //   description: "Description 1",
  // },
  {
    id: 2,
    image: "../src/assets/group.jpg",
    title: "ABOUT US",
    description: "Description 2",
  },

  // Add more slides as needed
]);

const splideOptions = {
  rewind: true,
  type: LOOP,
  autoplay: true,
  type: "loop",
  drag: "free",
  focus: "center",
  perPage: 1,
  autoScroll: {
    speed: 1,
  },
  // Add more options as needed
};
</script>
