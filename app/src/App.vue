<template>
  <div class="min-h-screen bg-white">
    <ContactNav />
    <Header />
    <div class="mt-16">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import ContactNav from "./components/navbar/navcontact.vue";
</script>

<style scoped></style>
