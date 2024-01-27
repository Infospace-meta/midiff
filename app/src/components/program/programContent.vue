<template>
  <div class="mx-auto max-w-7xl px-5">
    <div class="flex flex-col-reverse md:grid grid-cols-7 gap-5">
      <div class="col-span-2 border p-4">
        <h1 class="text-xl font-bold text-white p-10 text-center bg-purple-700">
          OUR COURSES
        </h1>
        <ProgramList class="" />
      </div>
      <div class="col-span-5">
        <div class="flex flex-col justify-center max-w-7xl mx-auto">
          <h1 class="p-4 text-4xl">BACHELOR OF DENTAL SURGERY</h1>
          <div class="flex border-t-2 border-gray-300 border-r-2 flex-wrap">
            <div
              @click="selectCategory(catIndex)"
              v-for="(cat, catIndex) in category"
              :key="catIndex"
            >
              <h1
                :class="[
                  cat.color,
                  {
                    'text-yellow-700': currentCategoryIndex === catIndex,
                  },
                ]"
                :style="
                  currentCategoryIndex === catIndex
                    ? 'background-color: white;'
                    : ''
                "
                class="border-t border-r border-l border-gray-300 p-2 bg-gray-200 text-indigo-700 text-lg font-semibold flex relative"
              >
                {{ cat.name }}
                <div
                  v-if="currentCategoryIndex === catIndex"
                  class="absolute w-0 h-0 border-solid border-t-4 border-transparent border-white bottom-0 left-1/2 transform -translate-x-1/2"
                ></div>
              </h1>
            </div>
          </div>
          <div
            class="border-b-2 border-r-2 border-l-2 border-gray-300 p-5 relative"
          >
            <h1 class="text-2xl py-4">
              {{ category[currentCategoryIndex].name }}
            </h1>

            <div
              v-for="content in category[currentCategoryIndex].content"
              :key="content.type"
              class="overflow-auto"
            >
              <h1
                v-if="content.type === 'heading'"
                class="text-indigo-700 font-semibold text-lg py-2"
              >
                {{ content.text }}
              </h1>
              <p v-if="content.type === 'paragraph'" :style="content.style">
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
              <!-- Add more conditions for other content types if needed -->
            </div>
            <pre class="mt-20 font-sans">
    For enquiries, kindly contact us via:

    Email: dept-dental@uonbi.ac.ke

    Tel: +254-773 181 503 / +254 020 491 5901
            </pre>

            <!-- Add other headings and content here -->
          </div>
        </div>
        <div class="py-10">
          <BankDetails />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProgramList from "./programList.vue";
import BankDetails from "../fees/bankDetails.vue";

const category = ref([
  {
    name: "Overview",
    content: [
      {
        type: "heading",
        text: "BACKGROUND",
        style: { color: "black" },
      },
      {
        type: "paragraph",
        text: "Dentistry is the evaluation, diagnosis, prevention and/or treatment (nonsurgical, surgical or related procedures) of diseases, disorders and/or conditions of the oral cavity, maxillofacial area and/or the adjacent and associated structures and their impact on the human body. The diseases or conditions may be of hard and soft tissues and include tooth decay, infections, malformations, malocclusion, tumours and traumatic injuries. These conditions cause pain, discomfort, and morphological defects and impede normal function in the head and neck region. They may be debilitating and affect the social well-being of individuals thus impacting negatively on the quality of life.",
        style: { color: "black" },
      },

      {
        type: "heading",
        text: "COURSE OBJECTIVES",
        style: { color: "black" },
      },

      {
        type: "paragraph",
        text: "‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  1. To equip the student with knowledge, skills and competencies in patient management.",
        style: { color: "black" },
      },
      {
        type: "paragraph",
        text: "‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  2. To equip the student with knowledge, skills and critical thinking to enable them to conduct ethical research.",
        style: { color: "black" },
      },
      {
        type: "paragraph",
        text: "‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  3. To instil in the student integrity and professionalism in the management of patients and interaction with professional peers.",
        style: { color: "black" },
      },

      // Add more paragraphs or elements as needed
    ],
  },
  {
    name: "Structure",
    content: [
      {
        type: "heading",
        text: "COURSE STRUCTURE",
        style: { color: "black" },
      },
      {
        type: "paragraph",
        text: "Each academic year shall comprise two semesters within a period of 36 weeks. Courses will be taught for 18 weeks during the first semester and 15 weeks during the second semester. Formative assessments shall be conducted at specified time points during the semesters while summative assessments shall be conducted during the last three weeks of the second semester.",
        style: { color: "black" },
      },
      {
        type: "heading",
        text: "‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ First Year (36 Weeks)",
        style: { color: "black" },
      },
      {
        type: "paragraph",
        text: "‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Students will take a minimum of five (5) course units in the first year.",
        style: { color: "black" },
      },
      {
        type: "heading",
        text: "‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Second Year (36 Weeks)",
        style: { color: "black" },
      },
      {
        type: "paragraph",
        text: "‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Students will take a minimum of eight (8) course units in the second year.",
        style: { color: "black" },
      },
      {
        type: "heading",
        text: "‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Third Year (36 Weeks)",
        style: { color: "black" },
      },
      {
        type: "paragraph",
        text: "‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Students will take a minimum of eight (8) course units in the first year.",
        style: { color: "black" },
      },
      {
        type: "heading",
        text: "‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Fourth Year (36 Weeks)",
        style: { color: "black" },
      },
      {
        type: "paragraph",
        text: "‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Students will take a minimum of ten (10) course units in the first year.",
        style: { color: "black" },
      },
      {
        type: "heading",
        text: "‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Fifth Year (36 Weeks)",
        style: { color: "black" },
      },
      {
        type: "paragraph",
        text: "‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Students will take a minimum of six (6) course units in the first year.",
        style: { color: "black" },
      },

      {
        type: "heading",
        text: "MODE OF DELIVERY",
        style: { color: "black" },
      },
      {
        type: "paragraph",
        text: "The programme is delivered through face-to-face and online mode that includes:",
        style: { color: "black" },
      },
      {
        type: "paragraph",
        text: "‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 1. Lectures",
        style: { color: "black" },
      },
      {
        type: "paragraph",
        text: "‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 2. Presentations",
        style: { color: "black" },
      },
      {
        type: "paragraph",
        text: "‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 3. Practical demonstrations in specialized laboratories",
        style: { color: "black" },
      },
      {
        type: "paragraph",
        text: "‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 4. Clinic rotations",
        style: { color: "black" },
      },
      {
        type: "paragraph",
        text: "‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 5. Tutorials",
        style: { color: "black" },
      },

      // Add more paragraphs or elements as needed
    ],
  },
  {
    name: "Admission requiremnts",
    content: [
      {
        type: "heading",
        text: "Minimum Admission Requirements",
        style: { color: "black" },
      },
      {
        type: "paragraph",
        text: "1.  Holders of KCSE with a Mean Grade of C+ with passes at C or above in Biology, Chemistry, Maths or Physics or Geography, and one of the following subjects: - English, Kiswahili, Physics (if not included above), History and Government, Geography (if not included above), CRE, Computer Studies, German, Music, Islamic Religious Education, Hindu Religious Education, Home Science, Art & Design, Agriculture, Aviation Technology, French, Arabic, Business Studies.",
        style: { color: "black" },
      },
    ],
  },
  {
    name: "Careers",
    content: [
      {
        type: "heading",
        text: "CAREER PROSPECTS",
        style: { color: "black" },
      },
      {
        type: "paragraph",
        text: "Graduates of this program can take up careers as dentists in  public  or  private  health  institutions, oral  healthcare  product  managers  in  dentally allied manufacturing companies or teaching at universities and colleges. It also prepares learners for postgraduate studies. The program also imparts skills to graduates who may wish to venture out as entrepreneurs",
        style: { color: "black" },
      },
    ],
  },
  {
    name: "Fees and Funding",
    content: [
      {
        type: "heading",
        text: "COURSE STRUCTURE",
        style: { color: "black" },
      },
      {
        type: "table",
        data: {
          headers: ["Year", "Semester 1", "Semester 2", "Total"],
          rows: [
            ["1", "325,000", "288,000", "613,000"],
            ["2", "324,000", "288,000", "612,000"],
            ["3", "324,000", "288,000", "612,000"],
            ["4", "324,000", "288,000", "612,000"],
            ["total", "", "", "3,048,000"],
            // Add more rows as needed
          ],
        },
      },
    ],
  },
  {
    name: "Exam Regulation",
    content: [
      {
        type: "heading",
        text: "COURSE STRUCTURE",
        style: { color: "black" },
      },
    ],
  },
  // Add more categories as needed
]);

const currentCategoryIndex = ref(0);

const selectCategory = (categoryIndex) => {
  currentCategoryIndex.value = categoryIndex;
  // Remove the line below if selectedTrack is not defined or not needed
  // selectedTrack.value = null;
};
</script>
