<template>
  <div class="mx-auto max-w-7xl py-10 px-5 max-md:mb-80">
    <div class="flex flex-col lg:grid grid-cols-9 gap-5">
      <div class="col-span-6 flex flex-col justify-center gap-9 text-lg">
        <P>
          To begin your application, simply
          <a href="path_to_your_pdf_file.pdf" download>
            <span class="underline capitalize font-semibold text-yellow-700"
              >Download the form.</span
            >
          </a>
          Take your time to fill it out accurately, ensuring that all the
          required information is provided. Once you have completed the form,
          scan it using a reliable scanner or a scanning app on your smartphone.
          This will ensure that the document is clear and legible, allowing our
          admissions team to review your application efficiently.</P
        ><P>
          We understand that embarking on a new educational journey can be both
          exciting and overwhelming. That's why our team is here to assist you
          every step of the way. If you have any questions or require further
          guidance during the application process, please don't hesitate to
          reach out to our friendly admissions staff. They will be more than
          happy to provide you with the support you need.
        </P>
        <p>
          Thank you for considering Midiff Institute of Professional Studies for
          your educational aspirations. We look forward to receiving your
          application and welcoming you to our esteemed institution
        </p>
        <BankDetails />
      </div>
      <div class="max-lg:hidden col-span-3 p-3">
        <img src="../../assets/courses.jpg" alt="" />
        <div class="p-5 border border-purple-500 rounded-lg">
          <p class="text-violet-800 text-xl font-semibold uppercase p-5">
            Contacts Us
          </p>
          <p class="text-lg">
            For Enquiries, please contact our admissions team;
          </p>
          <ul class="p-2 text-lg font-semibold">
            <li>&#9679; midiffinstitut@gmail.com</li>
            <li>&#9679; 0100 471070</li>
          </ul>
          <button class="text-white uppercase bg-yellow-700 text-center p-2">
            give us a call
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BankDetails from "../fees/bankDetails.vue";
</script>
