<template>
  <Layout>
    <div class="h-[94%] overflow-y-scroll transition-all duration-200 ease-in-out">
    <header class="dashbord-header">
      <div class="widget-header-left">
        <div class="widget-header-left-headline">Tabelle</div>
      </div>
    </header>

    <div class="calendar">
      <BaseTable />
    </div>

    </div>
  </Layout>
</template>
  


<script>

  import Layout from '@/layouts/Layout-Auth-Grid.vue';
  import BaseTable  from '@/components/dashboard/table/Base-Table.vue';

  export default {
    components: {
      Layout,
      BaseTable,
    },

    data() {
      return {
  
      };
    },
    
    methods: {},
  }
</script>
  
  
  
<style scoped>
    
  .calendar{
    display: flex; 
    justify-content: center; 
    align-items: center; 
    padding: 20px;
  }

  .dashbord-header{    
    display: flex; 
    padding: 10px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1), -1px 0 2px rgba(0, 0, 0, 0.05) !important;
    background-color: white !important;
    padding: 1rem;
    z-index: 25;
  }

  .widget-header-left{
    margin-left: 0;
    margin-right: auto;
  }
  
  .widget-header-left-headline{
    font-size: 18px;
    font-weight: 600; 
  }

</style>