<template>
  <!--accordion toggle button-->
  <button role="listitem" :aria-expanded="!collapsed">
    <!--title-->
    <div class="grow text-start">
      <slot></slot>
    </div>
    <!--dropdown button icon-->

    <font-awesome-icon icon="fa-solid fa-chevron-right" v-if="chevron" class="w-5 h-5 stoke-1 text-black opacity-70 dark:text-white dark:opacity-70 transition-all duration-300" :class="{ 'rotate-90': !collapsed }"/>
  </button>
</template>



<script>

  export default {  
    props: {
      collapsed: Boolean,
      chevron: Boolean,
    },
  }
  
</script>