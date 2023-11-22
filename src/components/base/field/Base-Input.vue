<template>
  <input :type="type" class="md-input" v-model="model" v-bind="attributes" @focus="onFocus" @blur="onBlur">
</template>

<script>

  import Uuid from '@/utils/Uuid'
  import FieldMixin from '@/components/base/field/Mixin-Field.js'

  export default {

    mixins: [FieldMixin],

    inject: ['Base-Field'],

    props: {
      id: { type: String, default: () => 'md-input-' + Uuid() },
      type: { type: String, default: 'text' }
    },

    computed: {

      toggleType () {
        return this.field.togglePassword
      },

      isPassword () {
        return this.type === 'password'
      },

      listeners () {
        var l = {...this.$listeners}
        delete l.input
        return l
      }
    },

    watch: {

      type (type) {
        this.setPassword(this.isPassword)
      },

      toggleType (toggle) {
        if (toggle) {
          this.setTypeText()
        } else {
          this.setTypePassword()
        }
      }
    },

    methods: {
      setPassword (state) {
        this.MdField.password = state
        this.MdField.togglePassword = false
      },
      setTypePassword () {
        this.$el.type = 'password'
      },
      setTypeText () {
        this.$el.type = 'text'
      }
    },

    created () {
      this.setPassword(this.isPassword)
    },

    beforeDestroy () {
      this.setPassword(false)
    }
  }

</script>
