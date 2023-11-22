<template>
  <textarea :class="classes" id="textarea" :value="props.value"  @input="$event =>{handleAutoResize(); $emit('update:modelValue', ($event.target).value)}"></textarea>
</template>



<script>

  export default {
    
    props: {
      class: undefined,
      variant: String,
      value: String,
      autoResize: Boolean,
    },

    data() {
      return {
        baseClasses: `max-w-full w-full px-5 py-4 rounded-sm content-center outline-none text-sm placeholder:text-black placeholder:opacity-40 text-opacity-70 dark:placeholder:text-white dark:placeholder:opacity-70 focus:outline-none transition duration-200 ease-out`,
        classes: this.baseClasses,
      };
    },

    methods: {
      
      handleAutoResize() {
        const textarea = document.getElementById('textarea')

        if (this.autoResize && textarea.value) {
          textarea.value.style.height = "auto";
          textarea.value.style.height = textarea.value.scrollHeight + "px";
        }
      },

    },

    computed:{
      
      variantClasses() {
        if (this.variant === "bordered") {
          return `border border-gray-200 text-black bg-gray-50 dark:bg-gray-700 dark:text-white dark:bg-opacity-70 dark:focus:bg-opacity-0 focus:bg-opacity-0 focus:border-indigo-300 dark:border-gray-600`;
        } else {
          return `text-black bg-gray-50 dark:text-white border-opacity-0 dark:bg-gray-700 dark:bg-opacity-70 dark:border-opacity-70 dark:border-gray-700`;
        }
      },
    },
  }
</script>