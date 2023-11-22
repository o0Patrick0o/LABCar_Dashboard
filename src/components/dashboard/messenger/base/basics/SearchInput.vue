<template>
  <div class="relative">
    test
    <i class="absolute left-0 top-[10.5px] ml-3 text-center">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="w-5 h-5 stroke-2 text-black opacity-40 dark:text-white dark:opacity-70"/>
    </i>
    <input ref="input" type="text" placeholder="Search.." :class="classes" @input="$event => { $emit('update:modelValue', $event.target.value) }" />
    <div class="absolute top-0 right-0">
      <slot name="endAdornment">
        <IconButton v-if="input && input.value" @click="($event) => {if (input) input.value = ''; $emit('update:modelValue', ''); }" title="clear text" aria-label="clear text" class="m-[8px] p-2">
          <font-awesome-icon icon="fa-regular fa-circle-xmark" class="w-5 h-5 text-black opacity-40 dark:text-white dark:opacity-60"/>
        </IconButton>
      </slot>
    </div>
  </div>
</template>


<script>

import IconButton from "@/components/dashboard/messenger/base/basics/IconButton.vue";

export default {
    
    components: {
      IconButton,
    },

    props: {
      variant: String,
      class: String,
    },

    data() {
      return {
        baseClasses: `w-full h-8 py-3 px-7 border outline-none rounded-sm text-black dark:text-white dark:opacity-70 placeholder:text-black placeholder:opacity-40 dark:placeholder:text-white dark:placeholder:opacity-70 focus:outline-none focus:ring focus:ring-indigo-100 duration-200 transition ease-out text-opacity-70`,
        classes: this.baseClasses,
        input: null,
      };
    },


    computed:{

      variantClasses() {
        if (this.variant === "outline") {
          return "bg-transparent border-gray-100 dark:border-gray-600";
        } else {
          return "border-none bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-800";
        }
      },

    },
  }
</script>