<template>
  <div class="relative bg-white p-4 sm:p-6 rounded mb-8 shadow-xl border border-gray-300">

    <!-- Background-->
    <div class="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
      <div style="height: 198; width: 319; background-color: rgb(255, 255, 255);"></div>
    </div>

    <!-- Content -->
    <div class="relative">
      <h1 class="text-2xl md:text-3xl text-slate-800 font-bold mb-1">{{ salutation }} Max Musterman.</h1>
      <p class="">{{ message }}</p>
    </div>

  </div>
</template>



<script>

  export default {
   
    props: {
      userid: {type: Number, default: 1},
      salutation: { type: String, default: 'Guten Tag,'},
      message: { type: String, default: 'Hier erfährst du, was heute mit Ihren Projekten passiert:'}
    },

    data() {
      return {

      };
    },
  }

</script>