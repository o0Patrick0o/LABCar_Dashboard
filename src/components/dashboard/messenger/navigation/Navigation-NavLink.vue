<template>
  <li>
    <div class="xs:mb-0 md:mb-6">
      <button class="group relative focus:outline-none" :title="title" :aria-label=" notifications ? title + ' ' + notifications + ' new notifications' : title ">
        <!--icon-->
        <font-awesome-icon :icon="icon" class="w-7 h-6 group-focus:text-indigo-400 hover:text-indigo-400 active:text-indigo-400 active:scale-110 dark:text-gray-500 transition ease-out duration-200" :class="active ? ['text-indigo-400', 'dark:text-indigo-400'] : [' text-gray-300']"/>

        <!--notification pill-->
        <div v-if="notifications" class="absolute right-0 top-3 w-5 h-5 flex items-center justify-center outline-none bg-indigo-400 text-xs text-white border border-white dark:border-gray-800 rounded-full transition duration-500">
          {{ notifications }}
        </div>
      </button>
    </div>
  </li>
</template>


<script>

  export default {
  
    props: {
      icon: String,
      title: String,
      notifications: Number,
      active: Boolean,
    },

    computed: { },

    methods: { }
  }
</script>