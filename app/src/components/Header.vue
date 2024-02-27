<template>
  <div class="w-full z-50" :class="{ 'fixed top-0': isFixed }">
    <header class="h-20 flex px-2 justify-between lg:justify-center bg-white">
      <a class="flex pl-4 items-center font-medium text-gray-900">
        <img
          src="https://res.cloudinary.com/dpfcle0os/image/upload/v1708990027/Midiff/icon_w6wt3f.png"
          alt="icon"
          class="h-14 md:h-20 p-1"
        />
        <div class="flex flex-col lg:text-2xl text-yellow-700 uppercase">
          midiff institute <br /><span class="max-md:hidden lg:text-sm"
            >of proffesional studies</span
          >
        </div>
      </a>
      <nav
        :class="{ hidden: close, 'sm:flex': open }"
        id="nav-content"
        class="container text-lg max-lg:h-screen max-lg:w-4/5 max-w-4xl right-0 max-lg:top-20 z-50 absolute lg:relative flex max-lg:flex-col lg:flex lg:justify-center border-t max-lg:shadow-2xl border-gray-300 bg-white"
      >
        <!-- HOME -->
        <router-link
          :to="{ name: 'home' }"
          active-class="active-link"
          class="p-5 font-medium hover:text-cyan-600 lg:mr-5"
          @click="toggleMenu"
          >Home
        </router-link>

        <!-- ABOUT US -->
        <router-link
          :to="{ name: 'about' }"
          active-class="active-link"
          class="p-5 font-medium hover:text-cyan-600 lg:mr-5"
          @click="toggleMenu"
          >About Us
        </router-link>

        <!-- ADMISSION -->
        <a class="relative inline-block" id="drop">
          <button
            class="inline-flex items-center justify-between max-lg:w-full p-5 rounded-md"
            @click="toggleDropdown('adm')"
          >
            <span class="font-medium text-gray-700">Admission</span>
            <svg
              class="w-4 h-4 ml-2 -mr-1 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <!-- DROPDOWN MENU -->
          <div
            :class="{ hidden: !dropdowns.adm.visible }"
            class="relative md:absolute z-10 w-64 md:max-w-screen-md bg-white md:shadow-lg"
            @click.stop="hideDropdown('adm')"
          >
            <ul class="lg:divide-y lg:divide-yellow-700 lg:py-5">
              <li v-for="item in dropdowns.adm.items" :key="item.id">
                <router-link
                  :to="item.router"
                  active-class="active-link"
                  class="block px-4 py-2 text-sm text-gray-700 hover:text-cyan-600"
                >
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
          </div>
        </a>
        <!-- INFO -->
        <a class="relative inline-block" id="drop2">
          <button
            class="inline-flex items-center justify-between max-lg:w-full p-5 rounded-md"
            @click="toggleDropdown('info')"
          >
            <span class="font-medium text-gray-700">Info</span>
            <svg
              class="w-4 h-4 ml-2 -mr-1 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <!-- DROPDOWN MENU -->
          <div
            :class="{ hidden: !dropdowns.info.visible }"
            class="relative md:absolute z-10 w-64 md:max-w-screen-md bg-white md:shadow-lg"
            @click.stop="hideDropdown('info')"
          >
            <ul class="lg:divide-y lg:divide-yellow-700 lg:py-5">
              <li v-for="item in dropdowns.info.items" :key="item.id">
                <router-link
                  :to="item.router"
                  active-class="active-link"
                  class="block px-4 py-2 text-sm text-gray-700 hover:text-cyan-600"
                >
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
          </div>
        </a>

        <!-- COURSES -->
        <router-link
          :to="{ name: 'courses' }"
          active-class="active-link"
          class="p-5 font-medium hover:text-cyan-600 lg:mr-5"
          @click="toggleMenu"
          >Courses
        </router-link>

        <!-- GET IN TOUCH -->
        <router-link
          :to="{ name: 'contact' }"
          active-class="active-link"
          class="p-5 font-medium hover:text-cyan-600 lg:mr-5"
          @click="toggleMenu"
          >Get in Touch
        </router-link>
      </nav>

      <!-- used for the opening and closing of the navbar in small devices  -->
      <div class="flex items-center right-0 h-full pl-4 ml-6">
        <div class="p-2 lg:border-l-2 border-orange-700">
          <a
            href="#_"
            class="px-4 py-2 text-xs font-bold text-white uppercase rounded-full transition-all duration-150 bg-violet-900 shadow outline-none active:bg-violet-900 hover:shadow-md focus:outline-none ease"
          >
            Enroll
          </a>
        </div>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="text-sm pl-2 text-white rounded-lg lg:hidden focus:outline-none"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          @click="toggleMenu"
        >
          <span class="sr-only">Open main menu</span>
          <h1
            class="text-4xl font-bold mr-4 text-gray-900 hover:text-indigo-700"
          >
            <!-- Display hamburger icon when menu is closed, and 'x' when menu is open -->
            {{ close ? "&#9776;" : "&cross;" }}
          </h1>
        </button>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const close = ref(true);
const open = ref(false);

const { isFixed } = defineProps(["isFixed"]);

const toggleMenu = () => {
  close.value = !close.value;
  open.value = !open.value;
};

const toggleDropdown = (dropdown) => {
  dropdowns.value[dropdown].visible = !dropdowns.value[dropdown].visible;
};

const hideDropdown = (dropdown) => {
  dropdowns.value[dropdown].visible = false;
};

const dropdowns = ref({
  adm: {
    visible: false,
    items: [
      { id: 1, label: "Application Process", router: { name: "application" } },
      {
        id: 2,
        label: "Entry Requirements",
        router: { name: "entry_requirements" },
      },
    ],
  },
  info: {
    visible: false,
    items: [
      // { id: 1, label: "News and Updates", router: { name: "news" } },
      { id: 2, label: "Photo Gallery", router: { name: "gallery" } },
      { id: 3, label: "Student Life", router: { name: "student_life" } },
    ],
  },
});

onMounted(() => {
  // Add a global click event listener to close dropdowns on outside click
  document.addEventListener("click", handleOutsideClick);
});

const handleOutsideClick = (event) => {
  const drop = document.getElementById("drop");
  const drop2 = document.getElementById("drop2");

  if (!drop.contains(event.target)) {
    dropdowns.value["adm"].visible = false;
  }

  if (!drop2.contains(event.target)) {
    dropdowns.value["info"].visible = false;
  }
};
</script>

<style lang="scss" scoped>
.active-link {
  color: #b7791f;
}
</style>
