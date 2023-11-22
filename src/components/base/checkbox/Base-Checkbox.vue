<template>
  <div class="md-checkbox" :class="{ activeTheme, 'md-checked': checked, 'md-disabled': disabled, 'md-required': required, 'md-indeterminate': indeterminate}">

    <div class="md-checkbox-container">

      <input :id="id" type="checkbox" :indeterminate="indeterminate" v-model="checked">

    </div>

    <label :for="id" class="md-checkbox-label">
      <slot />
    </label>
  </div>

</template>



<script>
 
  export default {

    props: {
      id: { type: String, default: 'base-checkbox' },
      ischecked: { type: Boolean, default: false },
      required: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
      indeterminate: { type: Boolean, default: true },
      activeTheme: String,
    },

    data() {
      return {
        checked: this.ischecked,
      };
    },

    computed: {

      isModelArray () {
        return Array.isArray(this.model)
      },

    },

    methods: { }
  }

</script>



<style lang="scss" scoped>

  @import "@/styles/base/Base-Variables";

  .md-checkbox {
    width: auto;
    margin: 16px 16px 16px 0;
    display: inline-flex;
    position: relative;

    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;

    &:not(.md-disabled) {
      cursor: pointer;

      .md-checkbox-label {
        cursor: pointer;
      }
    }

    .md-checkbox-container {
      width: 20px;
      min-width: 20px;
      height: 20px;
      position: relative;
      border-radius: 2px;
      border: 2px solid transparent;
      transition: $md-transition-stand;

      &:focus {
        outline: none;
      }

      &:before,
      &:after {
        position: absolute;
        transition: $md-transition-drop;
      }

      &:before {
        width: 48px;
        height: 48px;
        top: 50%;
        left: 50%;
        z-index: 11;
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }

      &:after {
        width: 6px;
        height: 13px;
        top: 0;
        left: 5px;
        z-index: 12;
        border: 2px solid transparent;
        border-top: 0;
        border-left: 0;
        opacity: 0;
        transform: rotate(45deg) scale3D(.15, .15, 1);
      }

    }

    .md-checkbox-label {
      height: 20px;
      padding-left: 16px;
      position: relative;
      line-height: 20px;
    }
  }

  .md-checkbox.md-indeterminate {
    .md-checkbox-container {
      &:after {
        width: 12px;
        height: 2px;
        top: 50%;
        left: 50%;
        z-index: 7;
        border-style: solid;
        border-width: 0 0 2px;
        opacity: 0;
        transform: translate(-50%, -50%) !important;
      }
    }
  }

  .md-checkbox.md-checked {
    .md-checkbox-container {
      &:after {
        opacity: 1;
        transform: rotate(45deg) scale3D(1, 1, 1);
        transition: $md-transition-stand;
      }
    }
  }

  .md-checkbox.md-disabled.md-checked {
    .md-checkbox-container {
      border-color: transparent !important;
    }
  }

  .md-checkbox.md-required {
    label:after {
      position: absolute;
      top: 2px;
      right: 0;
      transform: translateX(calc(100% + 2px));
      content: "*";
      line-height: 1em;
      vertical-align: top;
    }
  }
</style>
