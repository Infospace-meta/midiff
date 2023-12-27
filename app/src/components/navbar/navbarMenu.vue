<template>
  <div class="relative inline-block text-left" @mouseover="openDropdown">
    <div
      class="cursor-pointer inline-flex w-full lg:justify-center bg-white text-lg lg:mr-5 p-4 max-lg:border-b border-yellow-700 font-medium hover:text-indigo-700"
    >
      <h1 class="">Departments</h1>
      <!-- <span class="inline-flex h-8 w-7 text-gray-800 hover:text-blue-700"
        >&#9660;</span
      > -->
    </div>

    <transition @enter="enterTransition" @leave="leaveTransition">
      <div
        v-if="isDropdownVisible"
        class="absolute lg:right-0 left-0 z-10 mt-2 w-72 origin-top-right divide-y divide-yellow-700 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        @click="handleDropdownClick"
        @mouseover="openDropdown"
        @mouseleave="closeDropdown"
      >
        <div class="py-1">
          <router-link
            :to="{ name: 'home' }"
            class="block px-4 py-2 text-sm"
            @click="closeDropdown"
          >
            The Mummy-Toto lactation
          </router-link>
        </div>
        <div class="py-1">
          <a href="#" class="block px-4 py-2 text-sm" @click="closeDropdown">
            Empower Women and Youths
          </a>
        </div>
        <div class="py-1">
          <a href="#" class="block px-4 py-2 text-sm" @click="closeDropdown">
            Nurturing Children
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from "vue";

const isDropdownVisible = ref(false);

const openDropdown = () => {
  isDropdownVisible.value = true;
};

const closeDropdown = () => {
  isDropdownVisible.value = false;
};

const enterTransition = (el, done) => {
  el.style.transform = "scale(0.95)";
  el.style.opacity = "0";
  el.offsetHeight; // trigger reflow
  el.style.transition = "transform 100ms ease-out, opacity 100ms ease-out";
  el.style.transform = "scale(1)";
  el.style.opacity = "1";
  done();
};

const leaveTransition = (el, done) => {
  el.style.transition = "transform 75ms ease-in, opacity 75ms ease-in";
  el.style.transform = "scale(0.95)";
  el.style.opacity = "0";
  done();
};

const handleDropdownClick = (event) => {
  // Prevent the click event from propagating to the parent div
  event.stopPropagation();
};

// Add event listener to close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (isDropdownVisible.value && !event.target.closest(".relative")) {
    closeDropdown();
  }
};

// Add global event listener
window.addEventListener("click", handleClickOutside);

// Cleanup event listener on component unmount
onUnmounted(() => {
  window.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
/* Add your styles here */
</style>
