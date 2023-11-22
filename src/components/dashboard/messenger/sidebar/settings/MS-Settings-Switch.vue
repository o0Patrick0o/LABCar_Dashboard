<template>
  <div class="w-full flex flex-col">
    <div class="flex">
      
      <!--label-->
      <div class="grow">
        <label for="last-seen" class="inline-block outline-none mb-4" tabindex="0">
          <Typography variant="heading-2" class="w-13">
            {{ title }}
          </Typography>
        </label>
      </div>

    
      <SwitchInput id="last-seen" :value="value" @switch-clicked="(value) => handleToggleSwitch(value)"/>
    </div>

    <Typography variant="body-2" class="help-block outline-none" tabindex="0">
      {{ description }}
    </Typography>

  </div>
</template>

<script>

  import SwitchInput  from "@/components/dashboard/messenger/base/basics/SwitchInput.vue";
  import Typography   from "@/components/dashboard/messenger/base/style/Base-P.vue";

  export default{

    components: {
      SwitchInput,
      Typography
    },

    props: {
      value: Boolean,
      title: String,
      description: String,
      handleToggleSwitch: Boolean,
    },

    data () {
      return {

      }
    },

    methods: {

    },

  }
</script>