<template>
  <div class="flex flex-wrap gap-20 border p-5">
    <div v-for="detail in details" :key="detail.name">
      <h1
        v-if="isHeading(detail)"
        class="text-indigo-700 font-semibold text-lg py-2"
      >
        {{ detail.content[0]?.text }}
      </h1>
      <table v-if="isList(detail)">
        <tbody>
          <tr v-for="(item, index) in detail.content[1]?.items" :key="index">
            <td v-html="formatListItem(item)"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const details = ref([
  {
    name: "Overview",
    content: [
      {
        type: "heading",
        text: "KCB BANK",
        style: { color: "black" },
      },
      {
        type: "list",
        items: [
          "BRANCH: FLAMINGO",
          "ACCOUNT NAME: MIDIFF INSTITUTE OF PROFESSIONAL",
          "ACCOUNT NO.: 1295060760",
        ],
      },
    ],
  },
]);

// Computed property to check if the detail is a heading
const isHeading = (detail) => detail.content[0]?.type === "heading";

// Computed property to check if the detail is a list
const isList = (detail) => detail.content[1]?.type === "list";

// Function to format list item
const formatListItem = (item) => {
  const parts = item.split(":");
  return parts.length === 2
    ? `${parts[0]}: <span style="font-weight: bold;">${parts[1]}</span>`
    : item;
};
</script>
