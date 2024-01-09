<template>
  <div class="mx-auto max-w-7xl px-5">
    <div class="flex flex-col-reverse md:grid grid-cols-8 gap-5">
      <div class="col-span-3"></div>
      <div class="col-span-5">
        <div class="flex flex-col justify-center max-w-7xl mx-auto">
          <h1 class="p-4 text-4xl">BACHELOR OF DENTAL SURGERY</h1>
          <div class="flex border-t-2 border-gray-300 border-r-2 flex-wrap">
            <div
              @click="selectCategory(catIndex)"
              v-for="(cat, catIndex) in category"
              :key="catIndex"
            >
              <h1
                :class="[
                  cat.color,
                  {
                    'text-yellow-700': currentCategoryIndex === catIndex,
                  },
                ]"
                :style="
                  currentCategoryIndex === catIndex
                    ? 'background-color: white;'
                    : ''
                "
                class="border-t border-r border-l border-gray-300 p-2 bg-gray-200 text-indigo-700 text-lg font-semibold flex relative"
              >
                {{ cat.name }}
                <div
                  v-if="currentCategoryIndex === catIndex"
                  class="absolute w-0 h-0 border-solid border-t-4 border-transparent border-white bottom-0 left-1/2 transform -translate-x-1/2"
                ></div>
              </h1>
            </div>
          </div>
          <div
            class="shadow-2xl border-b-2 border-r-2 border-l-2 border-gray-300 p-5 relative"
          >
            <h1 class="text-2xl py-4">
              {{ category[currentCategoryIndex].name }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const category = ref([
  {
    name: "Overview",
  },
  {
    name: "Structure",
  },
  {
    name: "Admission Requiements",
  },
  {
    name: "Careers",
  },
  {
    name: "Fees and Funding",
  },
  {
    name: "Exam Regulations",
  },
]);

const currentCategoryIndex = ref(0);

const selectCategory = (categoryIndex) => {
  currentCategoryIndex.value = categoryIndex;
  selectedTrack.value = null;
};
</script>
