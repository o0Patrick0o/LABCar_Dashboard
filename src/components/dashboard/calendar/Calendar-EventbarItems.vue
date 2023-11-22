<template>
  <div class="eventbarevents">
    <div v-if="noevents">
      <span class="eventbarevents-noeventtext" >Keine Events Heute!</span>
    </div>
    
    <div v-else>
      <div class="eventbarevents-event" v-for="event in todaysEvent" :key="event.id" role="button" @click="showEventDetails(event)">
        
        <div class="eventbarevents-event-timecontainer">
          <div class="eventbarevents-event-time">
            {{ timeFormat(event.time.start) }} - {{ timeFormat(event.time.end) }}
          </div>
          
          <div class="eventbarevents-event-textcontainer">
            
            <div class="eventbarevents-event-headline">
              {{ event.title }}
            </div>
            
            <div class="eventbarevents-event-subtext">
              {{ event.keywords }}
            </div>
          </div>
        </div>

      </div>
    </div>
  
  </div>

  <transition>
    <EventDetails v-if="edShow" @close-modal="closeEventDetails" :event="edEvent"/>
  </transition>

</template>



<script>
  import EventDetails         from '@/components/dashboard/calendar/Calendar-EventDetails.vue';
  
  import { mapState }         from 'pinia';
  import { useCalendarStore } from '@/stores/calendar/Store-Calendar.js';
  
  export default {
  
    components: {
      EventDetails
    },
    
    data() {
      return { 
        todaysEvent: [],
        noevents: true,
        edShow: false,
        edEvent: null,
      };
    },

    mounted() {
      this.allTodaysEvent();
    },
    
    methods: {

      showEventDetails(event) {
        this.edShow = true;
        this.edEvent = event
      },
      
      closeEventDetails() {
        this.edShow = false;
      },
   
      isEventToday(startdate) {
        var temp = startdate.split('-');
        if (this.getYear == temp[0] && this.getMonth + 1 == temp[1] && this.getSelectedDate.getDate() == temp[2])
        {
          return true;
        }
          
        return false;
      },
        
      allTodaysEvent() {
        this.getEvents.forEach((event) => {
          if (this.isEventToday(event.date.start)) 
          {
            this.todaysEvent.push(event);
          }
        });

        if(this.todaysEvent.length > 0)
        {
          this.noevents = false;
        }
        else{
          this.noevents = true;
        }
      },

      fixDateTime(date, time) {
        time = time || "00:00";
        const _time = time.split(":");

        const _date = new Date(
          Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
        );
        //
        _date.setHours(Number(_time[0]));
        _date.setMinutes(Number(_time[1]));

        return _date;
      },

      timeFormat(time) {
        const _nd = this.fixDateTime(new Date(), time);
        let options = {
          hour: "numeric",
          minute: "numeric",
        };
        
        return new Intl.DateTimeFormat("de-DE", options).format(_nd);
      },
    },
  
    computed:{
          ...mapState(useCalendarStore, [
            'getYear',
            'getMonth',
            'getEvents',
            'getSelectedDate',
          ]),
    },

    watch: {
      getSelectedDate: {
        handler() {
          this.todaysEvent = []; 
          this.allTodaysEvent();
        },
        deep: true,
      },
    },
  
  }
</script>



<style scoped>

    .eventbarevents{
			margin-bottom: 0.5rem;
			width: 100%; 
			user-select: none;		
		}
		
		.eventbarevents-noeventtext{
      font-size: 0.9rem;
      font-weight: 600; 
      color: black;
		}
		
		.eventbarevents-event{
			display: flex; 
			padding: 10px; 
      border: 1px solid lightgray;
      border-left: 4px solid red;
      border-radius: 0.25rem;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
			margin-bottom: 0.5rem; 
			margin-left: 0.5rem; 
			cursor: pointer; 
		}
  
    .eventbarevents-event:hover {
      border: 1px solid red;
      border-left: 4px solid red;
    }
		
		.eventbarevents-event-timecontainer{
			width: 100%; 
		}
		
		.eventbarevents-event-time{
      font-size: 0.7rem;
      font-weight: 600; 
      color: rgb(161 161 170 );
		}
		
		.eventbarevents-event-textcontainer{
      display: block; 
		}
		
		.eventbarevents-event-headline{
      display: flex;
      flex-wrap: wrap; 
      font-size: 0.8rem;    
      font-weight: 600;
      color: black;
		}
		
		.eventbarevents-event-subtext{
      display: flex;
      flex-wrap: wrap; 
      font-size: 0.7rem;    
      font-weight: 600; 
      color: rgb(161 161 170 );
		}
		
</style>
