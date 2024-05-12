<template>
  <div class="">
    <div class="">
      <Splide :options="splideOptions">
        <SplideSlide class="relative" v-for="slide in slides" :key="slide.id">
          <div
            :style="{ backgroundImage: `url('${slide.image}')` }"
            class="w-screen h-64 lg:h-[700px] bg-cover bg-center bg-black relative"
          >
            <!-- Darkened background -->
            <div class="absolute inset-0 bg-black opacity-50"></div>

            <!-- Text content -->
            <div
              class="absolute inset-0 flex items-center justify-center text-white p-4"
            >
              <div>
                <h1 class="text-4xl lg:text-6xl font-bold lg:mb-4">
                  {{ slide.title }}
                </h1>
                <div class="lg:py-20 py-5">
                  <router-link :to="slide.router"
                    ><button
                      class="lg:py-2 py-1 px-4 lg:text-2xl bg-indigo-700 rounded-lg text-white"
                    >
                      {{ slide.button }}
                    </button></router-link
                  >
                  <!-- <router-link :to="{ name: 'home' }" class="p-5"
                    ><button
                      class="py-2 px-4 text-2xl bg-indigo-700 rounded-lg text-white"
                    >
                      {{ slide.buttonTwo }}
                    </button></router-link
                  > -->
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
    <div class="max-w-7xl mx-auto lg:py-10">
      <div class="flex flex-col lg:grid grid-cols-2">
        <div
          class="flex flex-col gap-2 lg:gap-8 bg-violet-900 p-8 text-white lg:text-lg"
        >
          <h1 class="font-semibold">
            Welcome to Midiff institute of Proffessional Studies
          </h1>
          <p>
            we area leading vocational education and training institution
            dedicated to empoweing individuals with the skills and Knowledge
            required for a successful and fulfilling career.<br /><br />
            At Midiff institute of Proffessional Studies we firmly believe in
            the power of technical and vocational education to shape lives and
            contribute to the overall development of our society.<br /><br />
            Our Institution has been at the forefront of providing high quality
            training programmes in various disciplines , catering to the
            evolving needs of industries and the job market.
          </p>
          <router-link :to="{ name: 'about' }">
            <h1
              class="text-white border-white border p-2 text-center w-28 rounded-full"
            >
              About Us...
            </h1>
          </router-link>
        </div>
        <div class="max-lg:hidden">
          <img
            class="h-full w-auto"
            src="https://res.cloudinary.com/dpfcle0os/image/upload/v1715528443/Midiff/MID18_tmzpgv.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { LOOP } from "@splidejs/splide";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const slides = ref([
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1715528445/Midiff/MID13_qtavte.jpg",
    title: "May 2024 Intake in Progress",
    description: "Description 1",
    button: "Enroll",
    router: { name: "application" },
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990026/Midiff/graduates_g3qhuq.jpg",
    title: "Class of 2023 graduation",
    description: "Description 2",
    button: "View",
    router: { name: "gallery" },
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1715528448/Midiff/MID10_lcb9ow.jpg",
    title: "Diploma courses Available",
    description: "",
    button: "Read more",
    router: { name: "courses" },
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
