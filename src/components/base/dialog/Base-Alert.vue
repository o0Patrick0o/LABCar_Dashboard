<template>
  <BaseDialog :fullscreen="false" :activ="activ">
    
    <template v-slot:title v-if="title">
      {{ title }}
    </template>
    
    <template v-slot:content v-if="content">
      {{ content }}
    </template>
    
    <template v-slot:footer>
      <BaseButton class="md-primary" @click="active = false">{{ mdConfirmText }}</BaseButton>
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
      title: { type: String, default: 'Alert' },
      content: { type: String, default: 'Alert Test' },
      confirmText: { type: String, default: 'Ok' },
      activ: { type: Boolean, default: true },
    }
  }
</script>
