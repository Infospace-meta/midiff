<template>
  <div class="mx-auto max-w-7xl py-10 px-5">
    <div class="flex flex-col-reverse md:grid grid-cols-9 gap-5">
      <div class="col-span-6 h-screen flex flex-col gap-5 text-lg">
        <div
          class="flex items-center text-indigo-700 gap-5 text-3xl justify-center py-5 font-semibold"
        >
          <h1>ENTRY REQUIREMENTS</h1>
          <hr class="w-full border-r-2 border-indigo-700" />
        </div>
        <P
          >To gain admission to the Kabarak University TVET Institute, you must
          satisfy any of the following minimum requirements:</P
        >
        <ul class="p-2 text-lg font-semibold">
          <li>&#9679; Admission fee: 2,500/=</li>
          <li>&#9679; Copy of ID</li>
          <li>&#9679; Copy of Form 4 leaving Certificate</li>
          <li>&#9679; 2 Passport photos</li>
        </ul>
        <h1 class="text-2xl">DIPLOMA</h1>

        <P
          >&#9679; You must hold a KCSE Qualification (or equivalent examination
          ) with an aggregate C- (Minus) and above.</P
        >
        <h1 class="text-2xl">CERTIFICATE</h1>
        <p>
          &#9679; You must hold a KCSE Qualification (or equivalent examination)
          with an aggregate D Plain and above.
        </p>
        <BankDetails />
      </div>
      <div class="col-span-3 h-screen p-3">
        <img src="../../assets/apply.jpg" alt="" />
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
