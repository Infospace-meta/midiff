<template>
  <div class="w-full z-50" :class="{ 'fixed top-0': isFixed }">
    <!-- <ContactNav /> -->
    <header
      class="text-gray-700 border-b border-gray-200 bg-white shadow-sm body-font"
    >
      <div class="flex flex-row items-center justify-between mx-auto max-w-7xl">
        <router-link :to="{ name: 'home' }"> <NavbarIcon /></router-link>
        <NavbarItems />
      </div>
    </header>
  </div>
</template>

<script setup>
import ContactNav from "../components/navbar/navcontact.vue";
import NavbarIcon from "../components/navbar/navbarIcon.vue";
import NavbarItems from "../components/navbar/navbarItem.vue";

import { ref } from "vue";

const { isFixed } = defineProps(["isFixed"]);
</script>

<style lang="scss" scoped></style>
