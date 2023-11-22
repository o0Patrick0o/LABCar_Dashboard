<template>
  <BaseDialog :fullscreen="false" :activ="activ" @md-opened="setInputFocus">
    
    <template v-slot:title v-if="title">
      {{ title }}
    </template>
    
    <template v-slot:content>
      <div v-if="content">{{ content }}</div>

      <md-field>
        <md-input ref="input" v-model="inputValue" :id="mdInputId" :name="mdInputName" :maxlength="mdInputMaxlength" :placeholder="mdInputPlaceholder" v-on="native" @keydown.enter="onConfirm" />
      </md-field>
    </template>
    
    <template v-slot:footer>
      <BaseButton class="md-primary" @click="onCancel">{{ mdCancelText }}</BaseButton>
      <BaseButton class="md-primary" @click="onConfirm">{{ mdConfirmText }}</BaseButton>
    </template>
    
  </BaseDialog>
</template>

<script>

  import BaseButton from '@/components/base/button/Base-Button.vue';
  import BaseDialog from '@/components/base/dialog/Base-Dialog.vue';

  export default {
    
    components: {
      BaseButton,
      BaseDialog,
    },

    props: {
      value: {},
      mdTitle: String,
      mdInputName: String,
      mdInputId: String,
      mdInputMaxlength: [String, Number],
      mdInputPlaceholder: [String, Number],
      mdContent: String,
      mdConfirmText: {
        type: String,
        default: 'Ok'
      },
      mdCancelText: {
        type: String,
        default: 'Cancel'
      }
    },

    data: () => ({
      inputValue: null
    }),

    watch: {
      value () {
        this.inputValue = this.value
      }
    },

    methods: {
      onCancel () {
        this.$emit('md-cancel')
        this.$emit('update:mdActive', false)
      },
      onConfirm () {
        this.$emit('input', this.inputValue)
        this.$emit('md-confirm', this.inputValue)
        this.$emit('update:mdActive', false)
      },
      setInputFocus () {
        window.setTimeout(() => {
          this.$refs.input.$el.focus()
        }, 50)
      }
    },
    
    created () {
      this.inputValue = this.value
    }
  }
</script>
