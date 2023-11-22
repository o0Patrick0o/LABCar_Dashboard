<template>
  
  <BaseField class="md-chips" :class="[$mdActiveTheme, chipsClasses]">
    <slot />

    <BaseChip v-for="(chip, key) in value" :key="chip" :deletable="!mdStatic" :clickable="!mdStatic" :duplicated="duplicatedChip === chip"
      @keydown.enter="$emit('md-click', chip, key)" @click.native="$emit('md-click', chip, key)" @md-delete.stop="removeChip(chip)">
      <slot name="md-chip" :chip="chip" v-if="$scopedSlots['md-chip']">{{ chip }}</slot>
      <template v-else>{{ chip }}</template>
    </BaseChip>

    <BaseInput ref="input" v-model.trim="inputValue" v-if="!mdStatic && modelRespectLimit" :type="mdInputType" :id="id" :placeholder="mdPlaceholder"  @input="handleInput"
      @keydown.enter="insertChip" @keydown.8="handleBackRemove" @focusout="handleFocusOut">
    </BaseInput>
    
  </BaseField>

</template>



<script>

  // Components
  import BaseField from '@/components/base/MdField/MdField'
  import BaseChip from '@/components/base/chips/Base-Chip.vue'
  import BaseInput from '@/components/base/MdField/MdInput/MdInput'

  // Util
  import Uuid from '@/utils/Uuid.js'
  import Propvalidator from '@/utils/Propvalidator.js'

  export default {
  
    components: {
      BaseField,
      BaseChip,
      BaseInput,
    },

    props: {
      value: Array,
      id: { type: [String, Number],  default: () => 'base-chip-' + Uuid()},
      inputtype: { type: [String, Number],  ...Propvalidator('input-type', ['email', 'number', 'password', 'search', 'tel', 'text', 'url']) },
      mdPlaceholder: [String, Number],
      mdStatic: Boolean,
      mdAutoInsert: { type: Boolean, default: false },
      mdLimit: Number,
      mdCheckDuplicated: { type: Boolean, default: false },
      mdFormat: { type: Function }
    },

    data: () => ({
      inputValue: '',
      duplicatedChip: null
    }),

    computed: {
      chipsClasses () {
        return {
          'md-has-value': this.value && this.value.length
        }
      },

      modelRespectLimit () {
        return !this.mdLimit || this.value.length < this.mdLimit
      },

      formattedInputValue () {
        if (!this.mdFormat) {
          return this.inputValue
        }
        return this.mdFormat(this.inputValue)
      },

      randomid() {
        return Math.random().toString(36).slice(4)
      }
    },

    methods: {
      insertChip ({ target }) {
        let inputValue = this.formattedInputValue

        if (!inputValue || !this.modelRespectLimit) {
          return
        }

        if (this.value.includes(inputValue)) {
          this.duplicatedChip = null
          // to trigger animate
          this.$nextTick(() => {
            this.duplicatedChip = inputValue
          })
          return
        }

        this.value.push(inputValue)
        this.$emit('input', this.value)
        this.$emit('md-insert', inputValue)
        this.inputValue = ''
      },
      removeChip (chip) {
        const index = this.value.indexOf(chip)

        this.value.splice(index, 1)
        this.$emit('input', this.value)
        this.$emit('md-delete', chip, index)
        this.$nextTick(() => this.$refs.input.$el.focus())
      },

      handleBackRemove () {
        if (!this.inputValue) {
          this.removeChip(this.value[this.value.length - 1])
        }
      },

      handleInput () {
        if (this.mdCheckDuplicated) {
          this.checkDuplicated()
        } else {
          this.duplicatedChip = null
        }
      },

      handleFocusOut ({ target }) {
        if (this.mdAutoInsert) {
          this.insertChip(target)
        }
      },

      checkDuplicated () {
        if (!this.value.includes(this.formattedInputValue)) {
          this.duplicatedChip = null
          return false
        }

        if (!this.mdCheckDuplicated) {
          return false
        }

        this.duplicatedChip = this.formattedInputValue
      }
    },

    watch: {
      value () {
        this.checkDuplicated()
      }
    }
  }

</script>



<style lang="scss" scoped>

  @import "@/styles/base/Base-Variables";

  .md-chips.md-field {
    padding-top: 12px;
    flex-wrap: wrap;

    &.md-has-value {
      label {
        top: -6px;
      }
    }

    .md-chip {
      margin-bottom: 4px;

      &:last-of-type {
        margin-right: 8px;
      }
    }

    .md-input {
      min-width: 128px;
    }
  }
</style>
