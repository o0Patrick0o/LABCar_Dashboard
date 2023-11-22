<template>
  <div class="md-field" :class="{
    activeTheme, 
    'md-inline': inline, 
    'md-clearable': clearable, 
    'md-focused': hasfocused, 
    'md-highlight': ishighlighted, 
    'md-disabled': disabled, 
    'md-required': required, 
    'md-has-value': hasValue, 
    'md-has-placeholder': hasPlaceholder, 
    'md-has-textarea': isTextarea, 
    'md-has-password': isPasswordarea, 
    'md-has-file': isFilePicker, 
    'md-has-select': isSelect, 
    'md-autogrow': autogrow }" 
    @blur="onBlur">

    <slot />

    <input v-if="intputtyp == 'input'" :type="selectedtype" class="md-input" v-model="model" @focus="onFocus" @blur="onBlur">
    <textarea v-if="intputtyp == 'textarea'" class="md-textarea" :style="textareaStyles" v-model="model" @focus="onFocus" @blur="onBlur"></textarea>

    <span class="md-count">{{ valueLength }} / {{ maxlength || counter }}</span>

    <transition name="md-input-action">
      <BaseButton v-if="clearable" tabindex="-1" class="md-input-action md-clear" @click="clearInput"  :disabled="disabled">
        <font-awesome-icon icon="fa-solid fa-x" />
      </BaseButton>
    </transition>

    <transition name="md-input-action">
      <BaseButton v-if="isPasswordarea" tabindex="-1" class="md-input-action md-toggle-password" @click="togglePassword" >
        <font-awesome-icon icon="fa-solid fa-eye" v-if="showPassword"/>
        <font-awesome-icon icon="fa-solid fa-eye-slash" v-else/>
      </BaseButton>
    </transition>
  </div>
</template>

<script>

  // Components
  import BaseButton from '@/components/base/button/Base-Button.vue';

  // Util
  import Uuid from '@/utils/Uuid'

  export default {

    components: {
      BaseButton,
    },

    props: {
      // Optionen
      inline: { type: Boolean, default: true },
      clearable: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
      required: { type: Boolean, default: false },
      hascounter: { type: Boolean, default: true },
      autogrow: { type: Boolean, default: false },
      readonly: { type: Boolean, default: false },

      // Value
      placeholder: { type: String, default: '' },
      type: { type: String, default: 'text' },
      id: { type: String, default: () => 'field-' + Uuid() },
      maxlength: [String, Number],
      activeTheme: String,
      
      textareaHeight: { type: Boolean, default: false },
    },

    data() {
      return {
        // Optionen 
        hasPlaceholder: true,
        hasfocused: false,
        ishighlighted: false,
        hasValue: false,
        isTextarea: false,
        isPasswordarea: false,
        isFilePicker: false,
        isSelect: false,
        showPassword: false,
        clear: false,
        file: false,
        hasInvalidValue: false,
        intputtyp: 'input',
        selectedtype: '',

        // Value
        counter: null,
        value: undefined,
        
        
        localValue: '',
        
      };
    },
    
    mounted () {
      this.$nextTick().then(this.applyStyles)
      this.typeselect()
    },

    beforeUnmount() {
      this.removeFormResetListener()
      this.setPassword(false)
      this.setTextarea(false)
    },

    computed: {

      stringValue () {
        return (this.value || this.value === 0) && this.value.toString()
      },


      valueLength () {
        if (this.stringValue) {
          return this.stringValue.length
        }

        return 0
      },

      model: {
        get () {
          return this.localValue
        },
        set (value) {
          if (value.constructor.toString().match(/function (\w*)/)[1].toLowerCase() !== 'inputevent') {
            this.$nextTick(() => {
              this.localValue = value
            })
          }
        }
      },

      textareaStyles () {
        return {
          height: this.textareaHeight
        }
      },

    },

    methods: {

      typeselect() {
        if(this.type === 'textarea') {
          this.intputtyp = 'textarea';
          this.selectedtype = 'text';
        } else {
          this.intputtyp = 'input';
          this.selectedtype = this.type;
        }
      },

      clearInput() {
        this.clear = true
        this.$emit('md-clear')
        this.$nextTick().then(() => {
          this.clear = false
        })
      },

      clearField() {
        this.$el.value = ''
        this.model = ''
        this.setFieldValue()
      },
      
      onFocus () {
        this.hasfocused = true
      },

      onBlur () {
        this.hasfocused = false
        this.ishighlighted = false
      },

      calculateContentHeight (el, lineHeight) {
        const origHeight = el.style.height
        const height = el.offsetHeight
        const scrollHeight = el.scrollHeight

        el.style.overflow = 'hidden'

        if (height >= scrollHeight) {
          el.style.height = (height + lineHeight) + 'px'

          if (scrollHeight < el.scrollHeight) {
            el.style.height = origHeight

            return height
          }
        }

        return scrollHeight
      },

      getTextAreaLineSize () {
        const style = window.getComputedStyle(this.$el)

        return parseInt(style.lineHeight, 10)
      },

      setTextAreaSize (height) {
        let newHeight = height

        if (!height) {
          const size = this.getTextAreaLineSize()

          newHeight = this.calculateContentHeight(this.$el, size)
        }

        this.textareaHeight = newHeight + 'px'
      },

      applyStyles () {
        if (this.mdAutogrow) {
          this.setTextAreaSize(32)
          this.$nextTick().then(() => {
            this.setTextAreaSize()
            window.setTimeout(() => {
              this.$el.style.overflow = 'auto'
            }, 10)
          })
        }
      },

    },

    watch: {

      clear (clear) {
        if (clear) {
          this.clearField()
        }
      },

      placeholder () {
        this.setPlaceholder()
      },

      disabled () {
        this.setDisabled()
      },

      required () {
        this.setRequired()
      },

      maxlength () {
        this.setMaxlength()
      },

      mdCounter () {
        this.setMaxlength()
      },

      localValue (val) {
        this.$emit('input', val)
      },

      value (val) {
        this.localValue = val
      },

      type (toggle) {
        if (toggle) {
          this.setTypeText()
        } else {
          this.setTypePassword()
        }
      },
    },
  }

</script>



<style lang="scss" scoped>

  @import "@/styles/base/Base-Variables";

  $md-input-height: 32px;

  .md-field {
    width: 100%;
    min-height: 48px;
    margin: 4px 0 24px;
    padding-top: 16px;
    display: flex;
    position: relative;
    font-family: inherit;

    &:before,
    &:after {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 1;
      transition: border .3s $md-transition-default-timing,
                  opacity .3s $md-transition-default-timing,
                  transform 0s .3s $md-transition-default-timing;
      will-change: border, opacity, transform;
      content: " ";
    }

    &:after {
      height: 1px;
    }

    &:before {
      height: 2px;
      z-index: 2;
      opacity: 0;
      transform: scaleX(.12);
    }

    label {
      position: absolute;
      top: 23px;
      left: 0;
      pointer-events: none;
      transition: $md-transition-stand;
      transition-duration: .3s;
      font-size: 16px;
      line-height: 20px;
    }
    .md-suffix {
      font-size: 16px;
      line-height: 32px;
      align-self: center;
      justify-self: center;
    }

    .md-prefix {
      display: none;
      padding-right: 4px;
      font-size: 16px;
      line-height: 32px;
      align-self: center;
      justify-self: center;
    }

    &.md-focused, &.md-has-value {
      .md-prefix {
        display: block;
      }
    }

    .md-input,
    .md-textarea {
      height: $md-input-height;
      padding: 0;
      display: block;
      flex: 1;
      border: none;
      background: none;
      transition: $md-transition-stand;
      transition-property: font-size, padding-top, color;
      font-family: inherit;
      font-size: 16px;
      line-height: $md-input-height;

      &[type="date"] {
        font-size: 16px;
      }

      &[disabled] {
        cursor: default;
      }

      &:focus {
        outline: none;
      }

      &::-webkit-input-placeholder {
        font-size: 16px;
        text-shadow: none;
        -webkit-text-fill-color: initial;
        transition: $md-transition-stand;
        transition-property: font-size, color;
      }
    }

    .md-textarea {
      min-height: 32px;
      max-height: 230px;
      padding: 5px 0;
      resize: none;
      line-height: 1.3em;
    }

    .md-helper-text,
    .md-error,
    .md-count {
      height: 20px;
      position: absolute;
      bottom: -22px;
      font-size: 12px;
      transition: .3s $md-transition-default-timing;
    }

    .md-error {
      display: block !important;
      left: 0;
      opacity: 0;
      transform: translate3d(0, -8px, 0);
    }

    .md-count {
      right: 0;
    }

    .md-input-action {
      width: 32px;
      min-width: 32px;
      height: 32px;
      margin: 0;
      position: absolute;
      top: 16px;
      right: 0;
      transition: $md-transition-default;

      &.md-input-action-enter-active,
      &.md-input-action-leave-active {
        opacity: 0;
      }

      &.md-input-action-enter-to {
        opacity: 1;
      }
    }

    > .md-icon {
      margin: 4px auto;
      position: relative;
      z-index: 3;
      transition: $md-transition-stand;

      &:last-of-type:not(:first-child):after {
        display: none;
      }

      &:after {
        width: 37px;
        height: 4px;
        position: absolute;
        left: -1px;
        bottom: -5px;
        transition: .3s $md-transition-default-timing;
        content: "";
      }

      ~ {
        label {
          left: 36px;
        }

        .md-input,
        .md-textarea,
        .md-file {
          margin-left: 12px;
        }
      }
    }
  }

  .md-field {
    + .md-has-textarea:not(.md-autogrow) {
      margin-top: 36px;
    }

    &.md-has-placeholder {
      label {
        pointer-events: auto;
        top: 10px;
        opacity: 0;
        font-size: 12px;
      }

      .md-input,
      .md-textarea {
        font-size: 16px;
      }
    }

    &.md-has-textarea:not(.md-autogrow) {
      &:before,
      &:after {
        height: auto;
        pointer-events: none;
        top: 0;
        bottom: 0;
        transform: none;
        background: none !important;
        border: 1px solid transparent;
        border-radius: 3px;
      }

      &:before {
        border-width: 2px;
      }

      label {
        top: 16px;
        left: 16px;
      }

      .md-textarea {
        min-height: 100px;
        padding: 0 16px;
        resize: vertical;
      }

      > .md-icon {
        position: absolute;
        top: 6px;
        right: 6px;
        z-index: 3;
      }

      .md-count {
        right: 6px;
        bottom: 2px;
      }

      .md-clear {
        top: 6px;
        right: 6px;
      }

      &.md-focused,
      &.md-has-value {
        label {
          top: 6px;
        }

        .md-textarea {
          padding-top: 10px;
        }
      }
    }

    &.md-has-file {
      &:before,
      &:after,
      label {
        left: 36px;
      }

      .md-input {
        margin-left: 12px;
      }
    }

    &.md-focused,
    &.md-highlight {
      &:before {
        opacity: 1;
        transform: scaleX(1);
        transition: .3s $md-transition-default-timing;
        transition-property: border, opacity, transform;
      }
    }

    &.md-focused,
    &.md-has-value {
      label {
        pointer-events: auto;
        top: 0;
        opacity: 1;
        font-size: 12px;
      }

      .md-input,
      .md-textarea {
        font-size: 16px;
      }
    }

    &.md-inline {
      label {
        pointer-events: none;
      }

      &.md-focused {
        label {
          top: 23px;
          font-size: 16px;
        }
      }

      &.md-has-value {
        label {
          opacity: 0;
        }
      }
    }

    &.md-disabled {
      &:after {
        background: bottom left repeat-x;
        background-size: 4px 1px;
      }
    }

    &.md-has-password {
      .md-toggle-password {
        margin: 0;
        position: absolute;
        right: 0;
        bottom: -2px;

        svg {
          width: 22px;
          height: 22px;
        }
      }
    }

    &.md-clearable {
      .md-input {
        padding-right: 30px;
      }
    }

    &.md-invalid {
      @keyframes md-invalid-shake {
        10%, 90% {
          transform: translate3d(-1px, 0, 0);
        }

        30%, 70% {
          transform: translate3d(-4px, 0, 0);
        }

        40%, 60% {
          transform: translate3d(4px, 0, 0);
        }
      }

      &.md-has-value label:not(:focus) {
        animation: md-invalid-shake .4s $md-transition-default-timing both;
        backface-visibility: hidden;
        perspective: 1000px;
      }

      &.md-has-textarea:not(.md-autogrow) {
        &:before {
          border-width: 2px;
        }
      }

      .md-error {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }

      .md-helper-text {
        opacity: 0;
        transform: translate3d(0, -8px, 0);
      }
    }

    &.md-required {
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
  }
</style>
