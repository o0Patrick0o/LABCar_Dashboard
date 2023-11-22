<template>
  <div style="display: none;">{{ allTodaysEvent() }}</div>
  
  <div  v-if="!noevents" class="calendarevents">
      <div v-if="multievents">
        <div class="calendarevents-event" v-for="event in todaysEvent" :key="event.id">
            <span class="calendarevents-event-time">
              {{ timeFormat(event.time.start) }} - {{ timeFormat(event.time.end) }}
            </span>
            
            <div class="calendarevents-event-textcontainer">
              <div class="calendarevents-event-title">
                {{ event.title }}
              </div>
              
              <div class="calendarevents-event-subtext">
                  {{ event.keywords }}
              </div>
            </div>
        </div>
      </div>

      <div v-if="!multievents">
        <div class="calendarevents-multievent">
          <span class="calendarevents-multievent-textcontainer">
            {{ todaysEvent.length }}&nbsp;
            Events
          </span>
        </div>
      </div>
      
  </div>
</template>



<script>
   
  import { mapState }         from 'pinia';
  import { useCalendarStore } from '@/stores/calendar/Store-Calendar.js';
  
  export default {
  
    props: ['day'],
  
    data() {
      return { 
        todaysEvent: [],
        noevents: true,
        multievents: false,
      };
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
        if (this.getYear == temp[0] && this.getMonth + 1 == temp[1] && this.day == temp[2])
        {
          return true;
        }
          
        return false;
      },
        
      allTodaysEvent() {
        this.todaysEvent = [];

        this.getEvents.forEach((event) => {
          if (this.isEventToday(event.date.start)) 
          {
            this.todaysEvent.push(event);
          }
        });

        if(this.todaysEvent.length > 0)
        {
          if(this.todaysEvent.length == 1)
          {
            this.noevents = false;
            this.multievents = true;
          }
          else{
            this.noevents = false;
            this.multievents = false;
          }
          
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
          ]),
    },  
  }

</script>



<style scoped>

  .calendarevents{
    margin: 10px;
    padding: 5px;
    border: 1px solid lightgray;
    border-left: 4px solid red;
		border-radius: 0.25rem; 
	}
	
	.calendarevents-event{
    width: 100%;
    user-select: none; 
	}
	
	.calendarevents-event-time{
		display: block;
    text-align: left; 
		font-size: 0.7rem;
		font-weight: 600; 
		color: rgb(161 161 170 );
	}
	
	.calendarevents-event-textcontainer{
    display: block;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;  
	}
	
	.calendarevents-event-title{
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: capitalize; 
	}
	
	
	.calendarevents-event-subtext{
    font-size: 0.7rem;
    font-weight: 400; 
    color: rgb(161 161 170); 
	}
	
	.calendarevents-multievent{
    display: block; 
    text-align: left; 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; 
		user-select: none;
    padding: 0.5rem;
	}
	
	.calendarevents-multievent-textcontainer{
    font-size: 0.8rem;
    font-weight: 600; 
	}

</style>
