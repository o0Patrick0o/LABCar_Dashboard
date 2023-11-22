<template>
  <div class="relative inline-flex p-1 border-gray-500 border shadow-md rounded">
    <div class="eventbar-datepicker-container w-[15.5rem]">
      <span class="eventbar-datepicker-text font-medium">
        {{ selectedDate }}
      </span>
      <font-awesome-icon icon="fa-solid fa-calendar" class="eventbar-datepicker-icon"/>
      <input class="eventbar-datepicker" v-model="selectedDate" type="date" @change="dateselected()"/>
    </div> 
  </div>
</template>

<script>

export default {

  props: ['align'],
  
  data() {
    return {
      selectedDate: '',
      today: new Date(),        
    }
  }, 

  mounted() {
    this.setToday();
  },

  methods: {
      
    setToday() { 
      var temp = new Date();
      this.selectedDate = '';
      this.selectedDate  = temp.toLocaleDateString(); 
      console.log(this.selectedDate)  
    },

    dateselected() {
      var temp = this.selectedDate.split('-');
      this.selectedDate = temp[2] +'.'+ temp[1] +'.'+ temp[0];
      console.log(this.selectedDate)   
    },
            
  },
}
</script>

<style scoped>

.eventbar-datepicker-container{
		display: flex; 
		position: relative; 
		flex-wrap: nowrap; 
		justify-content: space-between; 
		align-items: center; 
		user-select: none;
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

</style>