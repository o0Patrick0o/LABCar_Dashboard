<template>
  <div class="eventbar">
          
    <header class="eventbar-header">
      <div class="eventbar-header-headline">Events</div>
    </header>

  
    <div class="eventbar-datepicker-container">
      <span class="eventbar-datepicker-text">
        {{ selectedDate }}
      </span>
      <font-awesome-icon icon="fa-solid fa-calendar" class="eventbar-datepicker-icon"/>
      <input class="eventbar-datepicker" v-model="selectedDate" type="date" @change="dateselected()"/>
    </div>


    <div class="eventbar-date">
      {{ weekday + ", " + "den" + " " + selectedDate }}
    </div>

    <div class="eventbar-event-conatiner">
      <Events />
    </div>

    <div class="eventbar-newevent">
      <button type="button" class="eventbar-newevent-button" @click="showNewEvent()">
        <font-awesome-icon icon="fa-solid fa-plus" />
      </button>
    </div>
  </div>

  <transition>
    <NewEvent v-if="neShow" @close-modal="closeNewEvent" />
  </transition>
</template>



<script>

  import Events               from '@/components/dashboard/calendar/Calendar-EventbarItems.vue';
  //import NewEvent             from '@/components/dashboard/calendar/Calender-NewEvent.vue';

  import { mapState }         from 'pinia';
  import { mapActions }       from 'pinia';
  import { useCalendarStore } from '@/stores/calendar/Store-Calendar.js';

  export default {

    components: {
      Events,
      //NewEvent,
    },
    
    data() {
      return { 
        selectedDate: '',
        selectedday: new Date(),
        date: new Date(),
        neShow: false,
      };
    },

    mounted() {
      this.setToday();
    },

    methods: {

      ...mapActions(useCalendarStore, [
        'setSelectedDate2',
      ]),

      showNewEvent() {
        this.neShow = true;
      },
      
      closeNewEvent() {
        this.neShow = false;
      },
      
      setToday() {
        var temp = this.getToday;
        this.selectedDate  = temp.toLocaleDateString()
        this.date = this.getToday;
      },

      dateselected() {
        var temp = this.selectedDate.split('-');
        this.selectedDate = temp[2] +'.'+ temp[1] +'.'+ temp[0];   
        var result = temp.map(function (x) { return parseInt(x, 10);});
        this.setSelectedDate2(result[0], result[1] - 1, result[2]);
      },
      
      setSelectedDate() {
        var temp = this.getSelectedDate;
        this.selectedDate  = temp.toLocaleDateString()
        this.date = this.getSelectedDate;
      },
      
    },
    
    computed:{
      ...mapState(useCalendarStore, [
        'getToday',
        'getSelectedDate',
      ]),

      weekday() {
        return new Intl.DateTimeFormat("de-DE", { weekday: "long" }).format(this.date)
      },
    },

    watch: {
      getSelectedDate: {
        handler() {
          this.setSelectedDate();
        },
        deep: true,
      },
    },
  }

</script>



<style scoped>

  .eventbar{
    padding: 1rem;
    border: 1px solid lightgray;
    width: 100%; 
    max-width: 20rem;
    margin-top: -0.1rem;
  }

  .eventbar-header{    
    display: flex;
    border-radius: 0.25rem;  
    background: lightgray;
    padding: 1rem;
  }
  
  .eventbar-header-headline{
    font-size: 18px;
    font-weight: 600; 
  }

  .eventbar-datepicker-container{
		display: flex; 
		position: relative; 
		flex-wrap: nowrap; 
		justify-content: space-between; 
		align-items: center; 
		border-radius: 0.25rem; 
		border: 1px solid black; 
    height: 2rem;
		user-select: none;
    margin-top: 1rem;
	}
	
	.eventbar-datepicker-text{
		display: block; 
		padding: 0.5rem; 
		font-size: 1rem;
		color: black;		
	}
	
	.eventbar-datepicker-icon{
		margin-right: 0.5rem; 
		font-size: 1rem;
		color: black;		
	}
	
	.eventbar-datepicker{
		position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    box-sizing: border-box;
    cursor: pointer;
	}
	
	.eventbar-date{
		margin-top: 1rem
	}
	
	.eventbar-event-conatiner{
		overflow-y: auto; 
		margin-top: 0.5rem;
    margin-left: 1rem;
	}

  .eventbar-newevent{
    display: flex;
    position: relative;
    left: 250px;
    top: 490px;
  }

  .eventbar-newevent-button{
    display: inline-block; 
    border-radius: 50%;
    width: 40px;
    height: 40px;
		border: 2px solid black; 
		font-size: 0.8rem;
		font-weight: 600; 
  }

  .eventbar-newevent-button:hover{
    border: 2px solid blue; 
    user-select: none;
  }
  
</style>
