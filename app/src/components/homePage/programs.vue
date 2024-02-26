<template>
  <div class="max-w-screen-xl p-5 mx-auto dark:text-black">
    <div class="w-full lg:border-t-2 border-t border-slate-300 py-2"></div>
    <h1 class="lg:text-2xl text-lg text-gray-500">Academic Programs</h1>
    <div class="grid grid-cols-1 gap-5 lg:grid-cols-5 sm:grid-cols-2 py-5">
      <div
        v-for="program in programs"
        :key="program.id"
        class="relative flex flex-col items-center justify-start w-full text-left bg-center bg-cover border rounded-lg"
      >
        <!-- <div
          class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-transparent dark:to-black"
        ></div>
        <div
          class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3"
        ></div> -->
        <!-- <h2 class="z-10 p-5 text-2xl">
          <a
            rel="noopener noreferrer"
            href="#"
            class="font-medium text-md hover:underline dark:text-gray-100"
          >
            {{ program.name }}</a
          >
        </h2> -->
        <div
          class="h-40 w-full bg-cover rounded-t-lg"
          :style="{ backgroundImage: `url('${program.image}')` }"
        ></div>
        <!-- <img :src="program.image" alt="Slide Image" class="h-40" /> -->
        <div class="text-xl p-4">{{ program.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const programs = ref([
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990037/Midiff/electrical_zupwow.jpg",
    name: "Electrical Installation",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990026/Midiff/hairdressing_yvettx.jpg",
    name: "Hairdressing",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990034/Midiff/beauty_gyzwa3.jpg",
    name: "Beauty Therapy",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990043/Midiff/baking_etmoww.jpg",
    name: "Baking Technology",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990039/Midiff/fashion_h60jl9.jpg",
    name: "Fashion and Design",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990040/Midiff/forexTrading_bfz69n.jpg",
    name: "Forex trading and security",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990037/Midiff/drivingSchool_cofzfa.jpg",
    name: "Driving and Computer Packages",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990028/Midiff/mechanical_yzvdif.jpg",
    name: "Motor Vehicle Mechanic",
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990045/Midiff/cooking_ymfma7.jpg",
    name: "Food Technology",
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1708990030/Midiff/plumbing_idvw1j.jpg",
    name: "Plumbing",
  },
  // Add more slides as needed
]);
</script>
