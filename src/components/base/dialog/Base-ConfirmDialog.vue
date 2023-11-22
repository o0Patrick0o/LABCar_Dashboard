<template>
  <BaseDialog :fullscreen="false" :activ="activ">
    
    <template v-slot:title v-if="title">
      {{ title }}
    </template>
    
    <template v-slot:content v-if="content">
      {{ content }}
    </template>
    
    <template v-slot:footer>
      <BaseButton @click="onCancel">{{ cancelText }}</BaseButton>
      <BaseButton class="md-primary" @click="onConfirm">{{ confirmText }}</BaseButton>
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
      title: String,
      content: String,
      confirmText: { type: String, default: 'Ok' },
      cancelText: { type: String, default: 'Cancel' }
    },

    methods: {

      onCancel () {
        this.$emit('md-cancel')
        this.$emit('update:mdActive', false)
      },

      onConfirm () {
        this.$emit('md-confirm')
        this.$emit('update:mdActive', false)
      }
    }
  }
</script>
