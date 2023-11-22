<template>
  <div class="radio" :class="{activeTheme, 'checked': ischecked, 'disabled': disabled, 'required': required}">
    <div class="radio-container">
      <input type="radio" :id="id" :name="name" :disabled="disabled" :required="required" v-model="ischecked"  >
    </div>
    <input type="radio" :id="id" :name="name" :disabled="disabled" :required="required" v-model="ischecked"  >

    <label :for="id" class="radio-label" v-if="$slots.default" @click.prevent="toggleCheck">
      <slot />
    </label>
  </div>
</template>



<script>

  // Util
  import Uuid from '@/utils/Uuid.js'

  export default {
    

    components: { },

    props: {
      model: [String, Number, Boolean, Object],
      value: { type: [String, Number, Boolean, Object],  default: 'on' },
      id: { type: String, default: () => 'radio-' + Uuid() },
      name: [String, Number],
      required: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
    },

    data() {
      return {
        ischecked: false,
      };
    },

    computed: {},

    methods: {}
  }

</script>



<style lang="scss" scoped>

  @import "../../../styles/base/Base-Variables";

  $md-radio-size: 20px;
  $md-radio-touch-size: 48px;

  .radio {
    width: auto;
    margin: 16px 16px 16px 0;
    display: inline-flex;
    position: relative;

    &:not(.disabled) {
      cursor: pointer;

      .radio-label {
        cursor: pointer;
      }
    }

    .radio-container {
      width: $md-radio-size;
      min-width: $md-radio-size;
      height: $md-radio-size;
      position: relative;
      border: 2px solid black;
      border-radius: 50%;
      transition: $md-transition-stand;
      //background-color: white;
     

      &:focus {
        outline: none;
      }

      &:before,
      &:after {
        position: absolute;
        transition: $md-transition-drop;
      }

      &:before {
        width: $md-radio-touch-size;
        height: $md-radio-touch-size;
        top: 50%;
        left: 50%;
        z-index: 11;
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }

      &:after {
        position: absolute;
        top: 3px;
        right: 3px;
        bottom: 3px;
        left: 3px;
        border-radius: 50%;
        opacity: 0;
        transform: scale3D(.38, .38, 1);
      }

      .md-ripple {
        width: $md-radio-touch-size !important;
        height: $md-radio-touch-size !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%);
        border-radius: 50%;
      }

      input {
        position: absolute;
        left: -999em;
      }
    }

    .radio-label {
      height: $md-radio-size;
      padding-left: 16px;
      position: relative;
      line-height: $md-radio-size;
    }
  }

  .radio.checked {
    .radio-container {
      &:after {
        opacity: 1;
        transform: scale3D(1, 1, 1);
        transition: $md-transition-stand;
      }
    }
  }

  .radio.required {
    label:after {
      position: absolute;
      top: 2px;
      right: 0;
      transform: translateX(calc(100% + 2px));
    
      line-height: 1em;
      vertical-align: top;
    }
  }
</style>
