<template>
  <div class="p-2 border-gray-500 border shadow-md rounded">
    <ul class="flex flex-wrap justify-center sm:justify-start mb-8 sm:mb-0 -space-x-3 -ml-px">
      <li>
        <router-link class="block" to="#0">
          <img class="w-9 h-9 rounded-full" :src="placeholder" width="36" height="36" alt="User 01" />
        </router-link>
      </li>
      <li>
        <router-link class="block" to="#0">
          <img class="w-9 h-9 rounded-full" :src="placeholder" width="36" height="36" alt="User 02" />
        </router-link>
      </li>
      <li>
        <router-link class="block" to="#0">
          <img class="w-9 h-9 rounded-full" :src="placeholder" width="36" height="36" alt="User 03" />
        </router-link>
      </li>
      <li>
        <router-link class="block" to="#0">
          <img class="w-9 h-9 rounded-full" :src="placeholder" width="36" height="36" alt="User 04" />
        </router-link>
      </li>
      <li>
        <button class="flex justify-center items-center w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500 shadow-sm transition duration-150 ml-2">
          <span class="sr-only">Add new user</span>
          <font-awesome-icon icon="fa-solid fa-plus" class="w-4 h-4 fill-current"/>
        </button>
      </li>
    </ul>
  </div>
</template>



<script>

  import Placeholder from '@/assets/Images/Placeholder/user.png';

  export default {
    data() {
        return {
          placeholder: Placeholder,

        };
      },
  }
</script>