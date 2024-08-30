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
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1715528443/Midiff/MID2_wc3nqv.jpg",
    name: "Electrical Installation",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1715528450/Midiff/MID8_bqcb86.jpg",
    name: "Hairdressing",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1715528440/Midiff/MID15_cylqtm.jpg",
    name: "Beauty Therapy",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1715528446/Midiff/MID3_ugjsvr.jpg",
    name: "Baking Technology",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1715528445/Midiff/MID5_imq7d3.jpg",
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
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1715528446/Midiff/MID12_kggrvo.jpg",
    name: "Motor Vehicle Mechanic",
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/dpfcle0os/image/upload/v1715528444/Midiff/MID17_vkknju.jpg",
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
