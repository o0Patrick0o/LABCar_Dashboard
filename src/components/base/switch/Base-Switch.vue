<template>

  <div class="switch" @click="isCheckt">
    <input :id="id" type="checkbox" v-model="toggleCheck">
    <span class="slider round"></span>
  </div>


  <label class="md-switch-label" @click="isCheckt">
    <slot />
  </label>

</template>



<script>
 
  import Uuid from '@/utils/Uuid.js'

  export default {

    props: {
      id: { type: String, default: () => 'md-switch-' + Uuid() },
      activeTheme: { type: String, default: ''},
    },

    data() {
      return {
        toggleCheck: false,
      };
    },

    methods: {
      isCheckt() {
        console.log(this.toggleCheck)
        this.toggleCheck = !this.toggleCheck;
        console.log('after')
        console.log(this.toggleCheck)
      }
     }
  }
</script>



<style lang="scss" scoped>

@import "../../../styles/base/Base-Variables";
@import "../../../styles/base/Elevation-Mixins";

  $md-switch-width: 34px;
  $md-switch-height: 14px;
  $md-switch-size: 20px;
  $md-switch-touch-size: 48px;

  .switch {
    
    position: relative; 
    width: 32px;
    height: 17px;
    display: inline-block;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    @include md-elevation(1);
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    border: 1px solid lightgray;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

 

  input:checked + .slider:before {
    -webkit-transform: translateX(13px);
    -ms-transform: translateX(13px);
    transform: translateX(13px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .md-switch-label {
    height: $md-switch-size;
    padding-left: 16px;
    position: relative;
    line-height: $md-switch-size;
  }
  
</style>
