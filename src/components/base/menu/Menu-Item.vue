<template>
  <li>
    <router-link class="font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center py-1 px-3" to="#0">
      <slot />                       
    </router-link>
  </li>
</template>

<script>

  export default {

    components: {

    },

    props: {
      disabled: Boolean,
      activeTheme: { type: String, default: ''},
    },

    data() {
      return {
        highlighted: false
      }
    },

    computed: {},

    methods: {},
  }
</script>
