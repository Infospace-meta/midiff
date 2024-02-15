
import BankDetails from '../fees/bankDetails.vue';
<template>
  <div class="mx-auto max-w-7xl py-10 px-5">
    <div class="flex flex-col-reverse md:grid grid-cols-9 gap-5">
      <div class="col-span-6 h-screen flex flex-col gap-5 text-lg">
        <P>
          To begin your application, simply download the form. Take your time to
          fill it out accurately, ensuring that all the required information is
          provided. Once you have completed the form, scan it using a reliable
          scanner or a scanning app on your smartphone. This will ensure that
          the document is clear and legible, allowing our admissions team to
          review your application efficiently.</P
        ><P>
          We understand that embarking on a new educational journey can be both
          exciting and overwhelming. That's why our team is here to assist you
          every step of the way. If you have any questions or require further
          guidance during the application process, please don't hesitate to
          reach out to our friendly admissions staff. They will be more than
          happy to provide you with the support you need.
        </P>
        <p>
          Thank you for considering Kabarak University TVET Institute for your
          educational aspirations. We look forward to receiving your application
          and welcoming you to our esteemed institution
        </p>
        <BankDetails />
      </div>
      <div class="col-span-3 h-screen p-3">
        <img src="../../assets/courses.jpg" alt="" />
        <div class="p-5 border border-purple-500 rounded-lg">
          <p class="text-violet-800 text-xl font-semibold uppercase p-5">
            Contacts Us
          </p>
          <p class="text-lg">
            For Enquiries, please contact our admissions team;
          </p>
          <ul class="p-2 text-lg">
            <li>midiffinstitut@gmail.com</li>
            <li>0100 471070</li>
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
import BankDetails from '../fees/bankDetails.vue';
</script>
