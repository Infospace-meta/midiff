<template>
  <div class="mx-auto max-w-7xl px-5">
    <div class="p-8 py-12">
      <div
        class="flex items-center text-indigo-700 gap-5 text-3xl justify-center py-5 font-semibold"
      >
        <h1>COURSES</h1>
        <hr class="w-full border-r-2 border-indigo-700" />
      </div>

      <div
        v-for="content in contents"
        :key="content.type"
        class="overflow-auto"
      >
        <p
          v-if="content.type === 'paragraph'"
          :style="content.style"
          class="text-lg"
        >
          {{ content.text }}
        </p>
        <h1
          v-if="content.type === 'heading'"
          class="text-indigo-700 font-semibold text-lg py-2"
        >
          {{ content.text }}
        </h1>
        <table
          v-if="content.type === 'table'"
          class="border-collapse w-full mt-4 overflow-auto text-lg"
        >
          <thead>
            <tr>
              <th
                v-for="(header, index) in content.data.headers"
                :key="index"
                :colspan="header.colspan || 1"
                :rowspan="header.rowspan || 1"
                class="bg-slate-200 px-4 py-2 l"
              >
                {{ header.text || header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rowIndex) in content.data.rows" :key="rowIndex">
              <td
                v-for="(cell, cellIndex) in row"
                :key="cellIndex"
                :colspan="cell.colspan || 1"
                :rowspan="cell.rowspan || 1"
                class="border border-gray-200 px-4 py-2"
              >
                <!-- Check if the cell has a 'clickable' property -->
                <a v-if="cell.clickable" class="hover:text-yellow-600">
                  {{ cell.text || cell }}
                </a>
                <!-- If not clickable, just display the text -->
                <span v-else>
                  {{ cell.text || cell }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
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
    text: "Scroll >>>",
    style: { color: "red", padding: "30px" },
  },
  {
    type: "table",
    data: {
      headers: [
        { text: "Level", rowspan: 2, colspan: 2 },
        { text: "Course", rowspan: 2 },
        { text: "Duration", rowspan: 2 },
        { text: "Tution Fee (Per Semester)", rowspan: 2 },
        { text: "Intake", rowspan: 2 },
        { text: "Exam Body", rowspan: 2 },
      ],
      rows: [
        [
          { text: "1", rowspan: 7 },
          {
            text: "DIPLOMA",
            clickable: true,
            style: {
              "font-weight": "bold",
              cursor: "pointer",
              transition: "color 0.3s ease-in-out",
            },
            rowspan: 7,
          },
          {
            text: "Electrical and Electronic Engineering (Power Option) ",
          },
          {
            text: "7 Terms ",
          },
          {
            text: "22,500",
          },
          {
            text: "Jan May September",
          },
          {
            text: "NITA",
          },
        ],
        [
          {
            text: "Automative Engineering ",
          },
          {
            text: "7 Terms ",
          },
          {
            text: "22,500",
          },
          {
            text: "Jan May September",
          },
          {
            text: "NITA",
          },
        ],
        [
          {
            text: "Plumbing",
          },
          {
            text: "7 Terms ",
          },
          {
            text: "30,500",
          },
          {
            text: "Jan May September",
          },
          {
            text: "NITA",
          },
        ],
        [
          {
            text: "Fashion and Design",
          },
          {
            text: "6 Terms ",
          },
          {
            text: "15,500",
          },
          {
            text: "Jan May September",
          },
          {
            text: "NITA",
          },
        ],
        [
          {
            text: "Hairdressing and Beauty Therapy",
          },
          {
            text: "6 Terms ",
          },
          {
            text: "22,500",
          },
          {
            text: "Jan May September",
          },
          {
            text: "NITA",
          },
        ],
        [
          {
            text: "Food and Beverage",
          },
          {
            text: "3 Terms ",
          },
          {
            text: "18,000",
          },
          {
            text: "Jan May September",
          },
          {
            text: "Institution",
          },
        ],
        [
          {
            text: "Catering",
          },
          {
            text: "2 Terms ",
          },
          {
            text: "18,000",
          },
          {
            text: "Jan May September",
          },
          {
            text: "Institution",
          },
        ],

        // Certificate Courses
        [
          { text: "2", rowspan: 9 },
          {
            text: "CERTIFICATE",
            clickable: true,
            style: {
              "font-weight": "bold",
              cursor: "pointer",
              transition: "color 0.3s ease-in-out",
            },
            rowspan: 9,
          },
          {
            text: "Hairdressing",
          },
          {
            text: "6 Months ",
          },
          {
            text: "10,500",
          },
          {
            text: "Jan May September",
          },
          {
            text: "NITA",
          },
        ],
        [
          {
            text: "Beauty Therapy",
          },
          {
            text: "6 Months ",
          },
          {
            text: "10,500",
          },
          {
            text: "Jan May September",
          },
          {
            text: "NITA",
          },
        ],
        [
          {
            text: "Baking Technology",
          },
          {
            text: "3 Months ",
          },
          {
            text: "12,500",
          },
          {
            text: "Jan May September",
          },
          {
            text: "Institution",
          },
        ],
        [
          {
            text: "Pastry making",
          },
          {
            text: "3 Months ",
          },
          {
            text: "12,500",
          },
          {
            text: "Jan May September",
          },
          {
            text: "Institution",
          },
        ],
        [
          {
            text: "Food Technology",
          },
          {
            text: "6 Months ",
          },
          {
            text: "12,500",
          },
          {
            text: "Jan May September",
          },
          {
            text: "Institution",
          },
        ],
        [
          {
            text: "Fashion & Design",
          },
          {
            text: "9 Months ",
          },
          {
            text: "15,500",
          },
          {
            text: "Jan May September",
          },
          {
            text: "Institution",
          },
        ],
        [
          {
            text: "Plumbing",
          },
          {
            text: "6 Months ",
          },
          {
            text: "18,000",
          },
          {
            text: "Jan May September",
          },
          {
            text: "NITA",
          },
        ],
        [
          {
            text: "Electrical Installation",
          },
          {
            text: "6 Months ",
          },
          {
            text: "10,500",
          },
          {
            text: "Jan May September",
          },
          {
            text: "NITA",
          },
        ],
        [
          {
            text: "Motor Vehicle Mechanic",
          },
          {
            text: "6 Months ",
          },
          {
            text: "10,500",
          },
          {
            text: "Jan May September",
          },
          {
            text: "NITA",
          },
        ],

        // Short Courses
        [
          { text: "2", rowspan: 9 },
          {
            text: "SHORT COURSES",
            clickable: true,
            style: {
              "font-weight": "bold",
              cursor: "pointer",
              transition: "color 0.3s ease-in-out",
            },
            rowspan: 9,
          },
        ],
        [
          {
            text: "Computer Packages",
          },
          {
            text: "1 Month ",
          },
          {
            text: "6,500",
          },
          {
            text: "Jan May September",
          },
          {
            text: "Institution",
          },
        ],
        [
          {
            text: "Artificial Intelligence (AI)",
          },
          {
            text: "1 Month ",
          },
          {
            text: "15,000",
          },
          {
            text: "Jan May September",
          },
          {
            text: "Institution",
          },
        ],
        [
          {
            text: "Forex Trading & Securities",
          },
          {
            text: "1 Month ",
          },
          {
            text: "10,500",
          },
          {
            text: "Jan May September",
          },
          {
            text: "Institution",
          },
        ],
        [
          {
            text: "Artisan Courses",
          },
          {
            text: "3 Months ",
          },
          {
            text: "12,500",
          },
          {
            text: "Jan May September",
          },
          {
            text: "Institution",
          },
        ],
      ],
    },
  },
]);
</script>
