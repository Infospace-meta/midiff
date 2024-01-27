<template>
  <div v-for="course of courses" :key="course.id" class="hover:bg-slate-100">
    <p class="text-indigo-700 font-bold text-lg px-4 py-1 hover:cursor-pointer">
      &#129054; {{ course.name }}
    </p>
    <p>{{ course.department }}</p>
    <p class="px-4 py-2 text-yellow-800 text-end">{{ course.tuition }}</p>
    <div class="pr-20">
      <div class="border-t"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const courses = ref([
  {
    id: 1,
    name: "Electrical Installation",
    department: "",
    tuition: "KSH10,000",
  },
  { id: 2, name: "Hairdressing", department: "", tuition: "KSH12,000" },
  { id: 3, name: "Beauty Therapy", department: "", tuition: "KSH15,000" },
  { id: 4, name: "Baking Technology", department: "", tuition: "KSH13,000" },
  { id: 5, name: "Fashion and Design", department: "", tuition: "KSH13,000" },
  {
    id: 6,
    name: "Forex trading and security",
    department: "",
    tuition: "KSH10,000",
  },
  {
    id: 7,
    name: "Driving and Computer Packages",
    department: "",
    tuition: "KSH20,000",
  },
  {
    id: 8,
    name: "Motor Vehicle Mechanic",
    department: "",
    tuition: "KSH17,000",
  },
  { id: 9, name: "Food Technology", department: "", tuition: "KSH15,000" },
  { id: 10, name: "Plumbing", department: "", tuition: "KSH16,000" },
]);
</script>
