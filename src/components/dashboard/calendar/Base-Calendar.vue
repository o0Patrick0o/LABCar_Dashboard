<template>
  <div class="multicalendar">
      <!-- Main Navbar-->
      <CalendarHeader />
        
      <div class="multicalendar-content"> 

        <Eventbar />
          
        <div class="multicalendar-subcontent">
          
          <CalendarView />
          
        </div>
      </div>
  </div>
</template>



<script>

import CalendarHeader from '@/components/dashboard/calendar/Calendar-Header.vue';
import Eventbar       from '@/components/dashboard/calendar/Calendar-Eventbar.vue';
import CalendarView   from '@/components/dashboard/calendar/Calendar-Body.vue';

export default {
  
  components: {
    CalendarHeader,
    Eventbar,
    CalendarView,
  },

}

</script>



<style scoped>
  
  .multicalendar {
    overflow-x: hidden;
    background: white;
    padding: 1rem;
    width: 100%;
  }

  .multicalendar-content{
    display: flex !important;
    align-items: stretch !important;
  }

  .multicalendar-subcontent {
    position: relative;
    width: 100% !important;
  }

</style>
