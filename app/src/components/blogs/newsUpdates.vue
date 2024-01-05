<template>
  <section class="px-5">
    <div class="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
      <div class="col-span-12 md:col-span-1"></div>
      <div
        class="relative flex col-span-12 xl:col-span-7 lg:col-span-5 md:col-span-9 min-h-96"
      >
        <div class="flex flex-col gap-10">
          <article
            v-for="article of articles"
            :key="article.id"
            class="space-y-8 col-span-6 border-b-2 py-10"
          >
            <img
              :src="
                article.image || 'https://source.unsplash.com/random/480x360'
              "
              :alt="article.title"
              class="w-full h-56 sm:h-96 dark:bg-gray-500"
            />
            <div class="space-y-6">
              <h1 class="font-semibold md:tracki md:text-4xl text-indigo-800">
                {{ article.title }}
              </h1>
              <div
                class="flex flex-col items-start justify-between w-full md:flex-row md:items-center"
              >
                <div class="flex items-center md:space-x-2">
                  <img
                    src="https://source.unsplash.com/75x75/?portrait"
                    alt=""
                    class="w-8 h-8 border rounded-full"
                  />
                  <p class="text-lg">{{ article.author }}</p>
                </div>
                <p class="flex-shrink-0 mt-3 text-lg md:mt-0 text-yellow-700">
                  {{ article.views }}
                </p>
              </div>
            </div>
            <div class="">
              <router-link
                :to="{ name: 'article', params: { id: article.id } }"
                class="bg-yellow-600 text-white p-2 rounded-sm"
                >Read More</router-link
              >
            </div>
          </article>
        </div>
      </div>
      <div class="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
        <div class="fixed">
          <div class="flex flex-col divide-y divide-gray-200">
            <div class="flex px-1 py-4">
              <img
                alt=""
                class="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                src="https://source.unsplash.com/random/244x324"
              />
              <div class="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  class="font-serif hover:underline"
                  >Aenean ac tristique lorem, ut mollis dui.</a
                >
                <p class="mt-auto text-xs text-gray-800">
                  5 minutes ago
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    class="block text-blue-800 lg:ml-2 lg:inline hover:underline"
                    >Politics</a
                  >
                </p>
              </div>
            </div>
            <div class="flex px-1 py-4">
              <img
                alt=""
                class="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                src="https://source.unsplash.com/random/245x325"
              />
              <div class="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  class="font-serif hover:underline"
                  >Aenean ac tristique lorem, ut mollis dui.</a
                >
                <p class="mt-auto text-xs text-gray-800">
                  5 minutes ago
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    class="block text-blue-800 lg:ml-2 lg:inline hover:underline"
                    >Politics</a
                  >
                </p>
              </div>
            </div>
            <div class="flex px-1 py-4">
              <img
                alt=""
                class="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                src="https://source.unsplash.com/random/246x326"
              />
              <div class="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  class="font-serif hover:underline"
                  >Aenean ac tristique lorem, ut mollis dui.</a
                >
                <p class="mt-auto text-xs text-gray-800">
                  5 minutes ago
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    class="block text-blue-800 lg:ml-2 lg:inline hover:underline"
                    >Politics</a
                  >
                </p>
              </div>
            </div>
            <div class="flex px-1 py-4">
              <img
                alt=""
                class="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                src="https://source.unsplash.com/random/247x327"
              />
              <div class="flex flex-col flex-grow">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  class="font-serif hover:underline"
                  >Aenean ac tristique lorem, ut mollis dui.</a
                >
                <p class="mt-auto text-xs text-gray-800">
                  5 minutes ago
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    class="block text-blue-800 lg:ml-2 lg:inline hover:underline"
                    >Politics</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const articles = ref([
  {
    id: 1,
    title: "Curabitur ullamcorper nibh vitae eros porta lacinia.",
    author: "Leroy Jenkins • July 19th, 2021",
    views: "4 min read • 1,570 views",
    link: "",
    image: "",
  },
  {
    id: 2,
    title: "Cras porttitor ante in ullamcorper consequat.",
    author: "Leroy Jenkins • July 19th, 2021",
    views: "4 min read • 1,570 views",
    link: "",
    image: "",
  },
  {
    id: 3,
    title:
      "Curabitur malesuada magna mattis justo imperdiet, sed fringilla risus facilisis.",
    author: "Leroy Jenkins • July 19th, 2021",
    views: "4 min read • 1,570 views",
    link: "",
    image: "",
  },
  {
    id: 4,
    title:
      "Suspendisse sit amet mauris sit amet libero volutpat interdum quis eget ante",
    author: "Leroy Jenkins • July 19th, 2021",
    views: "4 min read • 1,570 views",
    link: "",
    image: "",
  },
  {
    id: 5,
    title: "Praesent at nunc sed nisi pellentesque faucibus non aliquam magna",
    author: "Leroy Jenkins • July 19th, 2021",
    views: "4 min read • 1,570 views",
    link: "",
    image: "",
  },
  {
    id: 6,
    title: "Pellentesque non arcu sit amet justo eleifend lobortis nec sed mi",
    author: "Leroy Jenkins • July 19th, 2021",
    views: "4 min read • 1,570 views",
    link: "",
    image: "",
  },
]);
</script>
