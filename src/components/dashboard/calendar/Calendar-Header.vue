<template>
  <div class="calendarheader">
    
    <div class="calendarheader-left"></div>
    
    <div class="calendarheader-middle">
      <div class="calendarheader-middle-container">
        
        <font-awesome-icon icon="fa-solid fa-angles-left" @click="this.decrementMonth(1)"/>
        
        <div class="calendarheader-middle-textcontainer">
          <span class="calendarheader-middle-text">
            {{ this.month }}
            <span class="mx-2">{{ this.getYear }}</span>
          </span>
          
        </div>
        
        <font-awesome-icon icon="fa-solid fa-angles-right" @click="this.incrementMonth(1)"/>
      </div>
    </div>
    
    <div class="calendarheader-right">
      <button type="button" class="calendarheader-right-button" @click="resetDate()">
        Heute
      </button>
    </div>

  </div>
</template>



<script>

  import { mapState }         from 'pinia';
  import { mapActions }       from 'pinia';
  import { useCalendarStore } from '@/stores/calendar/Store-Calendar.js';
  
  export default {
  
    data() {
      return { 
        monthStr: "",
        shortMonthStr: "",
      };
    },
    
    methods: {
        
      ...mapActions(useCalendarStore, [
        'decrementMonth',
        'incrementMonth',
        'resetDate',
      ]),
        
    },

    computed:{

      ...mapState(useCalendarStore, [
        'getYear',
        'getMonth',
        'getDay',
      ]),
      
      month() {
        return new Intl.DateTimeFormat("de-DE", { month: "long" }).format(new Date(this.getYear, this.getMonth, this.getDay));
      },
    },
  }

</script>



<style scoped>

.calendarheader{
    display: flex; 
		grid-column: span 7 / span 7;
		justify-content: space-between; 
		width: 100%;
    padding: 1rem;
    border: 1px solid lightgray;	
	}
	
	.calendarheader-left{
    display: flex;
		width: 33.333333%;
    align-items: center; 
	}
	
	.calendarheader-left-buttongrup{
		display: inline-flex;
	}
	
	.calendarheader-left-firstbutton{
		display: inline-block; 
    width: 100px;
		padding-top: 8px;
    padding-bottom: 8px; 
		border-top-left-radius: 0.25rem;
		border-bottom-left-radius: 0.25rem; 
		border: 2px solid black; 
		font-size: 0.8rem;
		font-weight: 600; 
		text-transform: uppercase; 
	}

  .calendarheader-left-firstbutton:hover{
		border-color: blue; 
	}
	
	.calendarheader-left-button{
    display: inline-block; 
    width: 100px;
		padding-top: 8px;
    padding-bottom: 8px; 
		border: 2px solid black; 
		font-size: 0.8rem;
		font-weight: 600; 
		text-transform: uppercase; 
		margin-left: -0.125rem; 
	}

  .calendarheader-left-button:hover{
		border-color: blue; 
	}

  .calendarheader-left-lastbutton{
		display: inline-block; 
    width: 100px;
		padding-top: 8px;
    padding-bottom: 8px; 
		border-top-right-radius: 0.25rem;
		border-bottom-right-radius: 0.25rem; 
		border: 2px solid black; 
		font-size: 0.8rem;
		font-weight: 600; 
		text-transform: uppercase;
    margin-left: -0.125rem; 
	}

  .calendarheader-left-lastbutton:hover{
		border-color: blue; 
	}

	
	.calendarheader-middle{
		display: flex; 
		justify-content: center; 
		align-items: center; 
		width: 33.333333%; 
	}
	
	.calendarheader-middle-container{
		display: flex; 
		align-items: center; 
	}
	
	.calendarheader-middle-textcontainer{
		display: inline-flex;
    width: 200px;
		font-size: 1.25rem;
		font-weight: 600;
	}

  .calendarheader-middle-text{
    display: flex;
    margin-left: auto;
    margin-right: auto;
    user-select: none;
  }
	
	.calendarheader-right{
		display: flex;
    align-items: center; 
		justify-content: flex-end;
		width: 33.333333%; 
	}

  .calendarheader-right-button{
    display: inline-block; 
    border-radius: 0.25rem;
    width: 100px;
		padding-top: 8px;
    padding-bottom: 8px; 
		border: 2px solid black; 
		font-size: 0.8rem;
		font-weight: 600; 
		text-transform: uppercase; 
	}

  .calendarheader-right-button:hover{
		border-color: blue; 
	}

</style>