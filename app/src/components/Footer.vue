<template>
  <footer
    aria-label="Site Footer"
    class="bg-footer bg-no-repeat bg-cover bg-center bg-fixed bg"
  >
    <div class="relative inset-0 bg-black opacity-80">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div
          class="flex flex-col items-center gap-4 rounded-lg bg-violet-900 p-6 shadow-lg sm:flex-row sm:justify-between"
        >
          <strong class="text-xl text-white sm:text-xl">
            Grab an opportunity by enrolling
          </strong>
          <a
            href="#"
            target="_blank"
            class="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-violet-900 hover:bg-transparent hover:text-white focus:outline-none active:bg-violet-500"
          >
            <span class="text-sm font-medium"> Enroll </span>

            <svg
              class="h-5 w-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        <div
          class="mt-16 flex flex-col gap-8 md:flex-row justify-evenly items-center"
        >
          <div class="text-center sm:text-left">
            <p class="text-lg font-medium text-orange-300">Explore</p>

            <nav aria-label="Footer About Nav" class="mt-8">
              <ul class="space-y-4 text-sm">
                <li>
                  <router-link
                    :to="{ name: 'home' }"
                    class="text-gray-100 transition hover:text-orange-400"
                  >
                    About us
                  </router-link>
                </li>

                <li>
                  <router-link
                    :to="{ name: 'home' }"
                    class="text-gray-100 transition hover:text-orange-400"
                  >
                    Our Courses
                  </router-link>
                </li>

                <li>
                  <router-link
                    :to="{ name: 'home' }"
                    class="text-gray-100 transition hover:text-orange-400"
                  >
                    News and Updates
                  </router-link>
                </li>

                <li>
                  <router-link
                    :to="{ name: 'home' }"
                    class="text-gray-100 transition hover:text-orange-400"
                  >
                    Contact
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>

          <div class="text-center sm:text-left">
            <p class="text-lg font-medium text-orange-300">Departments</p>

            <nav aria-label="Footer Services Nav" class="mt-8">
              <ul class="space-y-4 text-sm">
                <li>
                  <router-link
                    :to="{ name: 'home' }"
                    class="text-gray-100 transition hover:text-orange-400"
                  >
                    Business Studies
                  </router-link>
                </li>

                <li>
                  <router-link
                    :to="{ name: 'home' }"
                    class="text-gray-100 transition hover:text-orange-400"
                  >
                    Fashion Design
                  </router-link>
                </li>

                <li>
                  <router-link
                    :to="{ name: 'home' }"
                    class="text-gray-100 transition hover:text-orange-400"
                  >
                    Hospitality
                  </router-link>
                </li>
                <li>
                  <router-link
                    :to="{ name: 'home' }"
                    class="text-gray-100 transition hover:text-orange-400"
                  >
                    Cosmetology
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div class="mt-16">
          <ul class="flex justify-center gap-6 sm:justify-end">
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                class="text-orange-400 transition hover:text-grey-100"
              >
                <span class="sr-only">Facebook</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                class="text-orange-400 transition hover:text-grey-100"
              >
                <span class="sr-only">Instagram</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>

          <div class="mt-16 sm:flex sm:items-center sm:justify-between">
            <p
              class="mt-4 text-center text-sm text-gray-200 sm:mt-0 sm:text-right"
            >
              Copyright &copy; Midiff Institute
              {{ new Date().getFullYear() }}. All rights reserved. <br />Created
              by Infospace-meta
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
