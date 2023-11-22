<template>
  <!--account settings-->
  <AccordionButton id="account-settings-toggler" class="w-full flex px-5 py-6 mb-3 rounded focus:outline-none" :collapsed="props.collapsed" chevron aria-controls="account-settings-collapse"
    @click="handleToggle()">
    <Typography variant="heading-2" class="mb-4"> Account </Typography>
    <Typography variant="body-2"> Update your profile details</Typography>
  </AccordionButton>

  <Collapse id="account-settings-collapse" :collapsed="props.collapsed">
    <TextInput label="First name" class="mb-7" :value="accountValues?.firstName" @value-changed="(value) => (accountValues.firstName = value)" />
    <TextInput label="Last name" class="mb-7" :value="accountValues?.lastName" @value-changed="(value) => (accountValues.lastName = value)" />
    <DropFileUpload label="Avatar" class="mb-7" accept="image/*" :value="accountValues.avatar" @value-changed="(value) => (accountValues.avatar = value)" />
    <CButton class="w-full py-4" @click="handleSubmit" :loading="loading">
      Save Settings
    </CButton>
  </Collapse>
</template>



<script>

  import AccordionButton  from "@/components/dashboard/messenger/base/collapse/CollapseButton.vue";
  import Typography       from "@/components/dashboard/messenger/base/style/Base-P.vue";
  import Collapse         from "@/components/dashboard/messenger/base/collapse/Collapse.vue";
  import TextInput        from "@/components/dashboard/messenger/base/basics/TextInput.vue";
  import DropFileUpload   from "@/components/dashboard/messenger/base/basics/DropFileUpload.vue";
  import CButton          from "@/components/dashboard/messenger/base/basics/Button.vue";

  export default{

    components: {
      AccordionButton,
      Typography,
      Collapse,
      TextInput,
      DropFileUpload,
      CButton,
    },

    props: {
      collapsed: Boolean,
      handleToggle: undefined,
    },

    data () {
      return {
        loading: false,
        accountValues: {
          firstName: store.user?.firstName,
          lastName: store.user?.lastName,
          avatar: undefined,
        },
      }
    },

    computed: {

    },

    methods: {

      // (event) handle submitting the values of the form.
      handleSubmit() {
        this.loading = true;

        store.$patch({
          user: {
            ...store.user,
            firstName: this.accountValues.value.firstName,
            lastName: this.accountValues.value.lastName,
          },
        });

        setTimeout(() => {
          this.loading = false;
        }, 2000);
      },

    },
  }

</script>