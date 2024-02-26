<template>
  <div class="mx-auto max-w-7xl">
    <div class="lg:grid grid-cols-6">
      <div class="col-span-4 p-10">
        <div v-for="content in contents" :key="content.type">
          <h1
            v-if="content.type === 'heading'"
            class="text-indigo-700 font-bold text-2xl py-2 uppercase"
          >
            {{ content.text }}
          </h1>
          <p
            v-if="content.type === 'paragraph'"
            :style="content.style"
            class="text-lg lg:pb-5"
          >
            {{ content.text }}
          </p>
        </div>
        <div class="">
          <h1 class="capitalize text-center text-lg font-semibold p-5">
            Follow us on our social
          </h1>
          <div class="flex flex-wrap gap-4 max-lg:max-w-lg md:mx-auto">
            <!-- <div class="grid grid-col-3"> -->
            <SocialMedia
              v-for="(card, index) in cards"
              :key="index"
              :card="card"
            />
          </div>
        </div>
      </div>
      <div class="col-span-2 p-4">
        <div class="bg-purple-200 p-10 flex flex-col gap-5">
          <h1 class="text-lg uppercase font-semibold text-purple-900">
            Get in toucher
          </h1>
          <p class="text-yellow-700">
            <span class="capitalize font-semibold text-purple-900"
              >email address: </span
            >midiffinstitut@gmail.com
          </p>
          <p class="capitalize text-yellow-700">
            <span class="font-semibold text-purple-900"> Location:</span> Gibcom
            Hse, Kenyatta Avenue, Nakuru, 2nd Floor
          </p>
          <p class="capitalize text-yellow-700">
            <span class="font-semibold text-purple-900">call us here :</span
            >+254100 471070
          </p>
        </div>
      </div>
    </div>
    <div class="lg:grid grid-cols-6 bg-gray-50">
      <div class="col-span-4">
        <EmailForm />
      </div>
      <div class="col-span-2">
        <div class="py-10 max-md:hidden">
          <iframe
            src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fmidiffinstitute&width=600&colorscheme=light&show_faces=true&border_color&stream=true&header=true&height=435"
            scrolling="yes"
            style="
              border: 1px;
              overflow: auto;
              width: 500px;
              height: 430px;
              background: white;
              float: right;
            "
            allowtransparency="true"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SocialMedia from "./socialMedia.vue";
import EmailForm from "./emailForm.vue";

const contents = ref([
  {
    type: "heading",
    text: "Contact",
    style: { color: "black" },
  },
  {
    type: "paragraph",
    text: "For any inquiry or additional information reach us on ",
    style: { color: "black" },
  },
]);

const cards = ref([
  {
    name: "instagram",
    imageURL: "src/assets/linkedin.png",
    linkURL: "",
  },

  {
    name: "instagram",
    imageURL: "src/assets/youtube.gif",
    linkURL: "",
  },
  {
    name: "instagram",
    imageURL: "src/assets/twitter.png",
    linkURL: "",
  },
  {
    name: "instagram",
    imageURL: "src/assets/facebook.png",
    linkURL: "",
  },
  {
    name: "instagram",
    imageURL: "src/assets/whatsapp.gif",
    linkURL: "",
  },
  {
    name: "instagram",
    imageURL: "src/assets/instagram.png",
    linkURL: "",
  },
]);
</script>
