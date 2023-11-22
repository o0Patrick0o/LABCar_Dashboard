<template>
  <Modal :open="openModal" :closeModal="closeModal">
    <template v-slot:content>
      <div class="w-[300px] bg-white dark:bg-gray-800 rounded py-6">
        <!--modal header-->
        <div class="flex justify-between items-center px-5">
          <Typography id="modal-title" variant="heading-1" class="default-outline" tabindex="0">
            Add Contact
          </Typography>

          <CButton variant="outlined" color="danger" @click="closeModal" typography="body-4">
            esc
          </CButton>
        </div>

        <!--text input-->
        <div class="px-5 pb-5 pt-6">
          <TextInput type="text" placeholder="Email" />
        </div>

        <!--submit button-->
        <div class="px-5">
          <CButton class="w-full py-4"> Add </CButton>
        </div>
      </div>
    </template>
  </Modal>
</template>



<script>
  import Typography from "@/components/dashboard/messenger/base/style/Base-P.vue";
  import CButton    from "@/components/dashboard/messenger/base/basics/Button.vue";
  import TextInput  from "@/components/dashboard/messenger/base/basics/TextInput.vue";
  import Modal      from "@/components/dashboard/messenger/modals/Modal.vue";

  export default {
    
    components: {
      Typography,
      CButton,
      TextInput,
      Modal,
    },

    props: {
      openModal: Boolean,
      closeModal: Function,
    },
  }
</script>