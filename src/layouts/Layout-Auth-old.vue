<template>
    <div class="page-layout">
  
      <TheHeader />
        
      <div class="page-content fixed overflow-scroll"> 

        <TheSidebar />
          
        <div class="content-inner">
          
          <slot />
          
          <TheFooter />
        </div>
      </div>
    </div>
    
</template>
  
  
  
<script>
   
  import TheHeader  from "@/components/dashboard/layout/header/TheHeader.vue";
  import TheSidebar from "@/components/dashboard/layout/sidebar/TheSidebar.vue";
  import TheFooter  from "@/components/dashboard/layout/footer/TheFooter-Auth.vue";
   
  export default {
    
    components: {
      TheHeader,
      TheSidebar,
      TheFooter
    },
    
    data() {
      return {};
    },
    
    mounted() {},
    
    computed:{},
    
    methods: {}
  }
  
</script>
  
  
  
<style scoped>
  
  .page-layout {
    overflow-x: hidden;
    background: #EEF5F9;
  }

  .page-content{
    display: flex !important;
    align-items: stretch !important;
  }

  .content-inner {
    position: relative;
    min-height: calc(100vh - 70px);
    padding-bottom: 60px;
    width: 100% !important;
  }

  
  
</style>