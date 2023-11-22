<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>


<script>

  export default {
    
    props: {
      variant: String,
    },

    data() {
      return {
        baseClasses: `group flex justify-center items-center outline-none rounded-full focus:outline-none transition-all duration-200`,
        classes: this.variantClasses,
      };
    },

    computed:{
      variantClasses() {
        if (this.variant === "ghost") {
          return "";
        } else {
          return "focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700 dark:focus:bg-gray-600";
        }
      },
    },
  }
</script>