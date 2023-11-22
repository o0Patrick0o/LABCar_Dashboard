<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <div class="monthlyview">
    <div class="calendermodel-grid">
      
      <div v-for="day in getWeekDays" :key="day.id" class="calendarmodel-header">
        {{ day.short }}
      </div>
      
      <div v-if="!emptystartcells" v-for="day in this.getFirstDayOfMonth" :key="day" class="calendarmodel-blancodays"/>   
      
      <div v-for="day in this.getDaysInMonth" :key="day" class="calendarmodel-day" :class="{'calendarmodel-today': isToday(day),'calendarmodel-nottoday': !isToday(day), }">
        <div class="calendarmodel-daycontainer" @click="selectday(day)">
          {{ day }}
          <Events :day="day"/>
        </div>
      </div>
      
      <div v-if="emptyendcells" v-for="day in lastEmptyCells" :key="day" class="calendarmodel-blancodays"/>

    </div>
  </div>
  
</template>



<script>

  import Events               from '@/components/dashboard/calendar/Calendar-Events.vue';

  import { mapState }         from 'pinia';
  import { mapActions }       from 'pinia';
  import { useCalendarStore } from '@/stores/calendar/Store-Calendar.js';

  export default {

    components: {
      Events
    },

    data() {
      return { 
        lastEmptyCells: 0,
        emptystartcells: false,
        emptyendcells: false,

        modalEvents: [],
      };
    },

    mounted() {
      this.getDaysInMonth;
      this.getFirstDayOfMonth;
      this.lastCalendarCells();
      this.emptyStartCells()
      this.emptyEndCells();
    },

    updated() {
      this.getFirstDayOfMonth;
      this.lastCalendarCells();
      this.emptyStartCells()
      this.emptyEndCells();
    },

    methods: {
      ...mapActions(useCalendarStore, [
        'addTask',
        'setSelectedDate',
      ]),
      
      lastCalendarCells() {
        if(this.getFirstDayOfMonth > 5){
          this.lastEmptyCells = 42 - this.getDaysInMonth - this.getFirstDayOfMonth;
        } else{
          this.lastEmptyCells = 35 - this.getDaysInMonth - this.getFirstDayOfMonth;
        }
      },

      emptyStartCells() {
        if(this.lastEmptyCells > 0){
          this.emptyendcells = true;
        }
        else{
          this.emptyendcells = false;
        }
      }, 

      emptyEndCells() {
        if(this.lastEmptyCells > 0){
          this.emptyendcells = true;
        }
        else{
          this.emptyendcells = false;
        }
      }, 

      selectday(day) {
        this.setSelectedDate(day);
      },
      
      isToday(day) {
        let today = new Date();
        if (this.getYear == today.getFullYear() && this.getMonth == today.getMonth() && day == today.getDate())
        {
          return true;
        }
        
        return false;
      },    
    },

    computed:{
        ...mapState(useCalendarStore, [
          'getEvents',
          'getYear',
          'getMonth',
          'getDay',
          'getDayofWeek',
          'getDaysInMonth',
          'getFirstDayOfMonth',
          'getWeekDays',
        ]),
    },

  }

</script>



<style scoped>
  .monthlyview{
    color: black;
    background: white; 
  }

  .calendermodel-grid{
    display: grid; 
    grid-template-columns: repeat(7, minmax(0, 1fr)); 
    width: 100%; 
  }

  .calendarmodel-header{    
    text-align: center;
    margin-top: -0.1rem; 
    border: 1px solid lightgray;
    font-weight: 600; 
    font-size: 1rem;
  }

  .calendarmodel-blancodays{
    border: 1px solid lightgray;
    width: 100%; 
    height: 9rem; 
  }

  .calendarmodel-day{
    border: 1px solid lightgray;
    width: 100%;
    height: 9rem; 
  }

  .calendarmodel-daycontainer{
    text-align: center;
    width: 100%; 
    height: 100%; 
    font-size: 1rem;
    color: black;
  }

  .calendarmodel-today{
    font-weight: 700; 
    border: 2px solid red;
  }

  .calendarmodel-today:hover{
    cursor: pointer;
  }

  .calendarmodel-nottoday:hover{
    cursor: pointer;
    border: 1px solid blue;
  }
</style>
