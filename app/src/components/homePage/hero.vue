<template>
  <div class="">
    <div class="">
      <Splide :options="splideOptions">
        <SplideSlide class="relative" v-for="slide in slides" :key="slide.id">
          <div
            :style="{ backgroundImage: `url('${slide.image}')` }"
            class="w-screen h-96 lg:h-[700px] bg-cover bg-center bg-black relative"
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
                <div class="py-20">
                  <router-link :to="{ name: 'home' }"
                    ><button
                      class="py-2 px-4 text-2xl bg-orange-700 rounded-lg text-white"
                    >
                      Enroll
                    </button></router-link
                  >
                  <router-link :to="{ name: 'home' }" class="p-5"
                    ><button
                      class="py-2 px-4 text-2xl bg-indigo-700 rounded-lg text-white"
                    >
                      Enroll
                    </button></router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
    <div class="max-w-7xl mx-auto py-10">
      <div class="flex flex-col-reverse md:grid grid-cols-2">
        <div class="flex flex-col gap-8 bg-violet-900 p-8 text-white text-lg">
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
        <div>
          <img
          class="h-full w-auto"
            src="https://scontent.fmba2-1.fna.fbcdn.net/v/t39.30808-6/396991479_670486655286894_3952592817751489433_n.jpg?stp=dst-jpg_p526x395&_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=XwbDCQzWdkAAX99Ljo1&_nc_ht=scontent.fmba2-1.fna&oh=00_AfCXh6yJVaJyZluYU-IaF3iNCJUIeOVIcfDTrxZAve4yWQ&oe=65A26017"
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
    image: "../src/assets/me.png",
    title: "January 2024 Intake in Progress",
    description: "Description 1",
  },
  {
    id: 2,
    image: "../src/assets/me.png",
    title: "Diploma courses Available ",
    description: "Description 2",
  },
  {
    id: 3,
    image: "../src/assets/me.png",
    title: "January 2024 Intake in Progress",
    description: "",
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
