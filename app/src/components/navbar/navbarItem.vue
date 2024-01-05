<template>
  <div>
    <nav
      :class="{ hidden: close, 'sm:flex': open }"
      class="sm:max-lg:z-20 flex flex-col lg:flex lg:flex-row sm:max-lg:w-4/5 absolute lg:relative lg:top-auto top-28 right-0 left-16 h-screen md:h-auto bg-white"
      id="nav-content"
    >
      <router-link
        :to="{ name: 'about' }"
        class="lg:mr-5 p-4 text-lg max-lg:border-b border-yellow-700 font-medium hover:text-indigo-700"
        >About Us</router-link
      >
      <router-link
        :to="{ name: 'courses' }"
        class="lg:mr-5 p-4 text-lg max-lg:border-b border-yellow-700 font-medium hover:text-indigo-700"
        >Our Courses</router-link
      >
      <a
        class="lg:mr-5 p-4 text-lg max-lg:border-b border-yellow-700 font-medium hover:text-indigo-700"
      >
        <button
          class="inline-flex items-center justify-center rounded-md"
          @mouseover="showDropdown()"
        >
          <span class="text-lg font-medium text-gray-700">Departments</span>
        </button>

        <!-- DROPDOWN MENU -->
        <div
          id="departments"
          class="relative md:absolute hidden z-10 w-full md:w-auto pt-5 pr-5 bg-white md:shadow-lg"
          @mouseleave="showDropdown()"
        >
          <ul class="">
            <li class="">
              <a
                href="#"
                class="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                >Food Department</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                >ICT department</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                >Joe's Department</a
              >
            </li>
          </ul>
        </div>
      </a>
      <!-- <NavbarMenu /> -->
      <router-link
        :to="{ name: 'news' }"
        class="lg:mr-5 p-4 text-lg max-lg:border-b border-yellow-700 font-medium hover:text-indigo-700"
        >News and Updates</router-link
      >
      <router-link
        :to="{ name: 'home' }"
        class="lg:mr-5 p-2 text-lg max-lg:border-b border-yellow-700 font-medium hover:text-indigo-700"
        ><button class="p-2 bg-yellow-500 rounded-lg text-indigo-700">
          Enroll Now
        </button></router-link
      >
    </nav>

    <div
      class="flex items-center right-0 h-full pl-4 ml-6 border-l-0 lg:border-l border-orange-700"
    >
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        class="text-sm pl-2 text-white rounded-lg lg:hidden focus:outline-none"
        aria-controls="navbar-sticky"
        aria-expanded="false"
        @click="toggleMenu"
      >
        <span class="sr-only">Open main menu</span>
        <h1 class="text-5xl mr-4 text-gray-900 hover:text-indigo-700">
          <!-- Display hamburger icon when menu is closed, and 'x' when menu is open -->
          {{ close ? "\u2261" : "✕" }}
        </h1>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NavbarMenu from "../navbar/navbarMenu.vue";

const close = ref(true);
const open = ref(false);

const toggleMenu = () => {
  close.value = !close.value;
  open.value = !open.value;
};
const showDropdown = () => {
  document.getElementById("departments").classList.toggle("hidden");
};
</script>
