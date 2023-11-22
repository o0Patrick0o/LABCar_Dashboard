<template>
  <Layout>
    <header class="dashbord-header">
      <div class="widget-header-left">
        <div class="widget-header-left-headline">Kalender</div>
      </div>
    </header>

    <div class="calendar">
      <Calendar />
    </div>

  </Layout>
</template>



<script>

  import Layout     from '@/layouts/Layout-Auth-Grid.vue';
  import Calendar   from '@/components/dashboard/calendar/Base-Calendar.vue';


  export default {
    components: {
      Layout,
      Calendar,
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