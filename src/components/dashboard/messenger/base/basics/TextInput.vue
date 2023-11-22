<template>
  <div>
    <div class="flex justify-start">
      <label v-if="props.label" :for="props.id" class="mb-3">
        <span class="w-13 text-sm text-black opacity-60 dark:text-white dark:opacity-70 font-semibold leading-4 tracking-[0.16px]">
          {{ props.label }}
        </span>
      </label>
    </div>

    <div class="relative">
      <input @input="$emit('valueChanged', ($event.target).value)" :type="props.type || 'text'" :id="props.id" :value="props.value" :class="classes" :placeholder="props.placeholder" />

      <div class="absolute top-0 right-0">
        <slot name="endAdornment"></slot>
      </div>
    </div>
  </div>
</template>



<script>

  import { mapState }           from 'pinia';
  import { useMessengerStore }  from "@/stores/Store-Messenger.js";

  export default {
    
    props: {
      id: String,
      type: String,
      label: String,
      value: String,
      placeholder: String,
      description: String,
      variant: String,
      class: String,
    },

    data() {
      return {
        baseClasses: 'max-w-full w-full h-8 p-4 rounded-sm content-center placeholder:text-black placeholder:opacity-40 text-opacity-70 dark:placeholder:text-white dark:placeholder:opacity-70 focus:outline-none transition duration-200 ease-out',
        classes: this.baseClasses,
      };
    },

    mounted() {},

    unmounted() {},

    methods: {},

    computed:{
      ...mapState(useMessengerStore, [
        'getActiveConversationId',
        'getLoading',
      ]),

      variantClasses() {
        if (this.variant === "bordered") {
          return `border border-gray-200 text-black bg-gray-50 dark:bg-gray-700 dark:text-white dark:bg-opacity-70 dark:focus:bg-opacity-0 focus:bg-opacity-0 focus:border-indigo-300 dark:border-gray-600`;
        } else {
          return `text-black bg-gray-50 dark:text-white border-opacity-0 dark:bg-gray-700 dark:bg-opacity-70 dark:border-opacity-70 dark:border-gray-700 focus:ring focus:ring-indigo-100 dark:focus:bg-opacity-0 focus:bg-opacity-0`;
        }
      },
    },
  }

</script>