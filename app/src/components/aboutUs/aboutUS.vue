<template>
  <div class="">
    <div class="flex flex-col lg:flex-row mx-auto max-w-7xl">
      <div class="lg:grid grid-cols-6">
        <div class="flex col-span-4 justify-center items-center">
          <div class="p-8 py-12">
            <div v-for="content in contents" :key="content.type">
              <h1
                v-if="content.type === 'heading'"
                class="text-indigo-700 font-semibold text-lg py-2"
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
              <table
                v-if="content.type === 'table'"
                class="border-collapse w-full mt-4"
              >
                <thead>
                  <tr>
                    <th
                      v-for="(header, index) in content.data.headers"
                      :key="index"
                      class="border border-gray-400 px-4 py-2"
                    >
                      {{ header }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, rowIndex) in content.data.rows"
                    :key="rowIndex"
                  >
                    <td
                      v-for="(cell, cellIndex) in row"
                      :key="cellIndex"
                      class="border border-gray-400 px-4 py-2"
                    >
                      {{ cell }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          class="flex col-span-2 span flex-col p-6 divide-y lg:p-10 divide-gray-700"
        >
          <div class="pt-6 pb-4 space-y-2">
            <a
              rel="noopener noreferrer"
              href="#"
              class="inline-flex items-center py-2 space-x-2 text-xl text-slate-800"
            >
              <span>Vision, Mission & Core Values</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div class="pt-6 pb-4 space-y-2">
            <a
              rel="noopener noreferrer"
              href="#"
              class="inline-flex items-center py-2 space-x-2 text-xl text-slate-800"
            >
              <span>Contacts</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div class="pt-6 pb-4 space-y-2">
            <a
              rel="noopener noreferrer"
              href="#"
              class="inline-flex items-center py-2 space-x-2 text-xl text-slate-800"
            >
              <span>Leadership </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const contents = ref([
  {
    type: "paragraph",
    text: "At Midiff Institute of Professional Studies, we pride ourselves on being a leading vocational education and training institution dedicated to empowering individuals for successful and fulfilling careers. Our firm belief in the transformative power of technical and vocational education has positioned us at the forefront of providing high-quality training programs across various disciplines. Recognizing the dynamic nature of industries and the job market, we have tailored our offerings to cater to evolving needs, ensuring our students are equipped with the latest skills and knowledge demanded by today's competitive workforce.",
    style: { color: "black" },
  },
  {
    type: "paragraph",
    text: "Our commitment extends to crafting industry-relevant programs that incorporate real-world applications, fostering a learning environment that prepares students for the challenges of their chosen fields. The experienced faculty at Midiff Institute brings a wealth of industry knowledge, providing invaluable insights and mentorship to our students. This synergy between academic expertise and practical experience ensures a comprehensive education that goes beyond theoretical learning.",
    style: { color: "black" },
  },
]);
</script>
