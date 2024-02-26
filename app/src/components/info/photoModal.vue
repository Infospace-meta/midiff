<template>
  <div class="mx-auto max-w-7xl bg-gray-50">
    <ul class="gallery flex flex-wrap justify-center items-center gap-5">
      <li v-for="(photo, index) in photos" :key="photo.id">
        <img
          :src="photo.image"
          :alt="photo.title"
          class="h-64 object-cover cursor-pointer"
          @click="openModal(index)"
        />
      </li>
    </ul>
    <div
      v-if="showModal"
      class="max-lg:hidden fixed inset-0 mt-28 flex justify-center items-center bg-black bg-opacity-50"
    >
      <div class="max-w-screen-lg bg-white p-4 rounded-lg shadow-lg">
        <div class="flex justify-end">
          <button @click="closeModal" class="m-2 text-black text-5xl">
            &times;
          </button>
        </div>
        <img
          :src="currentPhoto.image"
          :alt="currentPhoto.title"
          class="object-contain lg:h-[700px]"
        />
        <div class="flex justify-between mt-4">
          <button
            @click="prevPhoto"
            class="bg-yellow-700 p-2 rounded-xl text-white"
          >
            &lt; Prev
          </button>
          <button
            @click="nextPhoto"
            class="bg-indigo-900 p-2 rounded-xl text-white"
          >
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const showModal = ref(false);
const selectedIndex = ref(null);
const photos = ref([
  {
    id: 1,
    title: 1,
    image: "src/assets/graduation23/1.jpg",
  },
  {
    id: 2,
    title: 2,
    image: "src/assets/graduation23/2.jpg",
  },
  {
    id: 3,
    title: 3,
    image: "src/assets/graduation23/3.jpg",
  },
  {
    id: 4,
    title: 4,
    image: "src/assets/graduation23/4.jpg",
  },
  {
    id: 5,
    title: 5,
    image: "src/assets/graduation23/5.jpg",
  },
  {
    id: 6,
    title: 6,
    image: "src/assets/graduation23/6.jpg",
  },
  {
    id: 7,
    title: 7,
    image: "src/assets/graduation23/7.jpg",
  },
  {
    id: 8,
    title: 8,
    image: "src/assets/graduation23/8.jpg",
  },
  {
    id: 9,
    title: 9,
    image: "src/assets/graduation23/9.jpg",
  },
  {
    id: 10,
    title: 10,
    image: "src/assets/graduation23/10.jpg",
  },
  {
    id: 11,
    title: 11,
    image: "src/assets/graduation23/11.jpg",
  },
  {
    id: 12,
    title: 12,
    image: "src/assets/graduation23/12.jpg",
  },
  {
    id: 13,
    title: 13,
    image: "src/assets/graduation23/13.jpg",
  },
  {
    id: 14,
    title: 14,
    image: "src/assets/graduation23/14.jpg",
  },
  {
    id: 15,
    title: 15,
    image: "src/assets/graduation23/15.jpg",
  },
  {
    id: 16,
    title: 16,
    image: "src/assets/graduation23/16.jpg",
  },
  {
    id: 17,
    title: 17,
    image: "src/assets/graduation23/17.jpg",
  },
  {
    id: 18,
    title: 18,
    image: "src/assets/graduation23/18.jpg",
  },
  {
    id: 19,
    title: 19,
    image: "src/assets/graduation23/19.jpg",
  },
  {
    id: 20,
    title: 20,
    image: "src/assets/graduation23/20.jpg",
  },
  {
    id: 21,
    title: 21,
    image: "src/assets/graduation23/21.jpg",
  },
  {
    id: 22,
    title: 22,
    image: "src/assets/graduation23/22.jpg",
  },
  {
    id: 23,
    title: 23,
    image: "src/assets/graduation23/23.jpg",
  },
  {
    id: 24,
    title: 24,
    image: "src/assets/graduation23/24.jpg",
  },
  {
    id: 25,
    title: 25,
    image: "src/assets/graduation23/25.jpg",
  },
  {
    id: 26,
    title: 26,
    image: "src/assets/graduation23/26.jpg",
  },
  {
    id: 27,
    title: 27,
    image: "src/assets/graduation23/27.jpg",
  },
  {
    id: 28,
    title: 28,
    image: "src/assets/graduation23/28.jpg",
  },
  {
    id: 29,
    title: 29,
    image: "src/assets/graduation23/29.jpg",
  },
  {
    id: 30,
    title: 30,
    image: "src/assets/graduation23/30.jpg",
  },
  {
    id: 31,
    title: 31,
    image: "src/assets/graduation23/31.jpg",
  },
  {
    id: 32,
    title: 32,
    image: "src/assets/graduation23/32.jpg",
  },
  {
    id: 33,
    title: 33,
    image: "src/assets/graduation23/33.jpg",
  },
  {
    id: 34,
    title: 34,
    image: "src/assets/graduation23/34.jpg",
  },
  {
    id: 35,
    title: 35,
    image: "src/assets/graduation23/35.jpg",
  },
  {
    id: 36,
    title: 36,
    image: "src/assets/graduation23/36.jpg",
  },
  {
    id: 37,
    title: 37,
    image: "src/assets/graduation23/37.jpg",
  },
  {
    id: 38,
    title: 38,
    image: "src/assets/graduation23/38.jpg",
  },
  {
    id: 39,
    title: 39,
    image: "src/assets/graduation23/39.jpg",
  },
  {
    id: 40,
    title: 40,
    image: "src/assets/graduation23/40.jpg",
  },
  {
    id: 41,
    title: 41,
    image: "src/assets/graduation23/41.jpg",
  },
  {
    id: 42,
    title: 42,
    image: "src/assets/graduation23/42.jpg",
  },
  {
    id: 43,
    title: 43,
    image: "src/assets/graduation23/43.jpg",
  },
  {
    id: 44,
    title: 44,
    image: "src/assets/graduation23/44.jpg",
  },
  {
    id: 45,
    title: 45,
    image: "src/assets/graduation23/45.jpg",
  },
  {
    id: 46,
    title: 46,
    image: "src/assets/graduation23/46.jpg",
  },
  {
    id: 47,
    title: 47,
    image: "src/assets/graduation23/47.jpg",
  },
  {
    id: 48,
    title: 48,
    image: "src/assets/graduation23/48.jpg",
  },
  {
    id: 49,
    title: 49,
    image: "src/assets/graduation23/49.jpg",
  },
  {
    id: 50,
    title: 50,
    image: "src/assets/graduation23/50.jpg",
  },
  {
    id: 51,
    title: 51,
    image: "src/assets/graduation23/51.jpg",
  },
  {
    id: 52,
    title: 52,
    image: "src/assets/graduation23/52.jpg",
  },
  {
    id: 53,
    title: 53,
    image: "src/assets/graduation23/53.jpg",
  },
  {
    id: 54,
    title: 54,
    image: "src/assets/graduation23/54.jpg",
  },
  {
    id: 55,
    title: 55,
    image: "src/assets/graduation23/55.jpg",
  },
  {
    id: 56,
    title: 56,
    image: "src/assets/graduation23/56.jpg",
  },
  {
    id: 57,
    title: 57,
    image: "src/assets/graduation23/57.jpg",
  },
]);

const currentPhotoIndex = computed(() => {
  return selectedIndex.value !== null ? selectedIndex.value : 0;
});

const currentPhoto = computed(() => {
  return photos.value[currentPhotoIndex.value];
});

const openModal = (index) => {
  selectedIndex.value = index;
  showModal.value = true;
};

const closeModal = () => {
  selectedIndex.value = null;
  showModal.value = false;
};

const prevPhoto = () => {
  selectedIndex.value =
    (selectedIndex.value - 1 + photos.value.length) % photos.value.length;
};

const nextPhoto = () => {
  selectedIndex.value = (selectedIndex.value + 1) % photos.value.length;
};
</script>

<style>
/* Add your custom styles here */
</style>
