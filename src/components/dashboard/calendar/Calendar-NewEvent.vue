<template>
    <div class="eventdetailsmodal-mask">
      <div class="eventdetailsmodal-wrapper">
        <div class="eventdetailsmodal-container">
          
          <div class="eventdetailsmodal-header">
            
            <div class="eventdetailsmodal-header-text">
              {{ weekday + ", " + "dem" + " " + getSelectedDate.getDate() + ". " + eventmonth }}
              <div  class="eventbar-datepicker-container">
                <font-awesome-icon icon="fa-solid fa-calendar" class="eventbar-datepicker-icon"/>
                <input class="eventbar-datepicker" v-model="selectedDate" type="date" @change="dateselected()"/>
              </div>
            </div>
            
            <div class="eventdetailsmodal-header-icon">
              <font-awesome-icon icon="fa-solid fa-x" class="eventdetailsmodal-header-close" @click="close()"/>
            </div>
          </div>
  
          <div class="eventdetailsmodal-body">
            
            <div class="eventdetailsmodal-body-header">
              <input type="text" name="title" class="eventdetailsmodal-bodyedit-title" v-model="title" placeholder="Title">
            </div>
            
            <div class="eventdetailsmodal-body-body">
  
  
              <div class="eventdetailsmodal-body-body-firstline">
                
                <div class="grid grid-cols-6 gap-4 w-full">
                  
                  <div class="col-start-1 col-end-4">
                    <div class="eventdetailsmodal-body-body-time">
                      <font-awesome-icon icon="fa-solid fa-clock" />
                      <div class="ml-3">
                        <input type="time" name="start" class="eventdetailsmodal-bodyedit-timeinput" v-model="timestart">
                        -
                        <input type="time" name="end" class="eventdetailsmodal-bodyedit-timeinput" v-model="timeend">
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-end-7 col-span-3">
                    <div class="eventdetailsmodal-body-body-keyword">
                      <font-awesome-icon icon="fa-solid fa-key" />
                      <div class="ml-2">
                        <input type="text" name="keyword" class="eventdetailsmodal-bodyedit-keyword" v-model="keywords" placeholder="Schlüsselwort / Hashtag">
                      </div>
                    </div>
                  </div>
                
                </div> 
              
              </div>
  
              <div class="eventdetailsmodal-body-body-secondline">
                
                <div class="grid grid-cols-6 gap-4 w-full">
                  
                  <div class="col-start-1 col-end-7">
                    <div class="eventdetailsmodal-body-body-location">
                      <font-awesome-icon icon="fa-solid fa-location-dot" />
                      <div class="ml-4">
                        <input type="text" name="location" class="eventdetailsmodal-bodyedit-location" v-model="location" placeholder="Standort">
                      </div>
                    </div>
                  </div>
                      
                </div>
              
              </div>
              
              <div class="eventdetailsmodal-body-descriptioncontainer">
                <div class="eventdetailsmodal-body-description-headline">Notizen / Beschreibung</div>
                <div class="eventdetailsmodal-body-description">
                  <textarea name="description" cols="67" rows="4" v-model="description"></textarea>
                </div>
              </div>
              
              <div class="eventdetailsmodal-bodyedit-buttoncontainer">
                <button type="button" class="eventdetailsmodal-bodyedit-cancelbutton" @click="edit()">Abbrechen</button>
                <button type="button" class="eventdetailsmodal-bodyedit-okbutton" @click="submit()">OK</button>
              </div>
              
            </div>
          
          </div>
  
        </div>
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
          editmode: false,
          title: '',
          timestart: '',
          timeend: '',
          keywords: '',
          location: '',
          description: '',
          selectedDate: '',
        };
      },
  
      methods: {
        ...mapActions(useCalendarStore, [
          'editevent',
          'deleteevent',
        ]),
        
        edit() {
          this.editmode = !this.editmode;
        },
  
        close() {
          this.$emit('closeModal')
        },
  
        submit() {
          this.editevent(this.event.id, this.title, this.timestart, this.timeend, this.keywords, this.location, this.description);
          this.close();
        },
  
        deletee() {
          this.deleteevent(this.event)
          this.close();
        }
      },
      
      computed:{
        ...mapState(useCalendarStore, [
          'getSelectedDate',
        ]),
  
        weekday() {
          return new Intl.DateTimeFormat("de-DE", { weekday: "long" }).format(this.getSelectedDate);
        },
  
        eventmonth() {
          return new Intl.DateTimeFormat("de-DE", { month: "long" }).format(this.getSelectedDate);
        },
      },
    }
  
</script>
  
  
  
  
<style scoped>
  
    .eventdetailsmodal-mask {
      position: fixed;
      z-index: 9999;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: table;
      transition: opacity 0.3s ease;
    }
  
    .eventdetailsmodal-wrapper {
      display: table-cell;
      vertical-align: middle;
    }
  
    .eventdetailsmodal-container {
      width: 600px;
      margin: 0px auto;
      padding: 10px;
      background-color: #fff;
      border-radius: 0.25rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.3s ease;
      font-family: Helvetica, Arial, sans-serif;
    }
  
    .eventdetailsmodal-header{
      display: flex; 
      width: 100%; 
      border-bottom-width: 2px; 
      padding: 10px;
    }
  
    .eventdetailsmodal-header-text{
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      font-weight: 600; 
      text-align: left; 
    }

  .eventbar-datepicker-container{
		display: flex; 
		position: relative; 
		align-items: center; 
    justify-content: center;
    align-items: center;
    border-radius: 9999px;
    width: 2rem;
    height: 2rem;
    border: 1px solid #2f3640; 
		user-select: none;
    margin-left: 10px;
	}
	
	.eventbar-datepicker-icon{
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
  
    .eventdetailsmodal-header-icon{
      display: flex;
      margin-right: 0;
      margin-left: auto;
    }
  
    .eventdetailsmodal-header-edit{
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  
    .eventdetailsmodal-header-edit:hover{
      color: red;
    }
  
    .eventdetailsmodal-header-close{
      width: 20px;
      height: 20px;
    }
  
    .eventdetailsmodal-header-close:hover{
      color: red;
    }
  
    .eventdetailsmodal-body{
      color: black;
      padding: 10px;
    }
  
    .eventdetailsmodal-body-header{
      display: block;
      margin-bottom: 1rem;
      border-radius: 0.5rem;
      padding: 10px;
      padding-left: 20px;
      background-color: lightgray;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); 
    }
  
    .eventdetailsmodal-body-body{
      display: block;
      padding: 10px;
    }
  
    .eventdetailsmodal-body-body-firstline{
      display: flex;
      align-items: center; 
      margin-bottom: 1rem;  
    }
  
    .eventdetailsmodal-body-body-time{
      display: flex;
      align-items: center; 
      font-size: 1rem;
      font-weight: 600;
    }
  
    .eventdetailsmodal-body-body-hashtag{
      display: flex;
      align-items: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 1rem;
      font-weight: 600;
    }
  
    .eventdetailsmodal-body-body-secondline{
      display: flex;
      align-items: center; 
      margin-bottom: 2rem;  
    }
  
    .eventdetailsmodal-body-body-location{
      display: flex;
      align-items: center; 
      font-size: 1rem;
      font-weight: 600;
    }
  
    .eventdetailsmodal-body-body-keyword{
      display: flex;
      align-items: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 1rem;
      font-weight: 600;
    }
  
    .eventdetailsmodal-body-descriptioncontainer{
      display: inline-flex;
      width: 100%; 
    }
  
    .eventdetailsmodal-body-description{
      display: flex;
      width: 100%; 
      font-size: 1rem;
      font-weight: 400;
      border: 1px solid lightgray;
      border-radius: 0.25rem;
      padding: 10px;
      padding-top: 20px;
    }
  
    .eventdetailsmodal-body-description-headline{
      position: absolute;
      margin-top: -7px;
      line-height: 1rem;
      background-color: white !important;
    }
  
    .eventdetailsmodal-bodyedit-title{
      padding: 5px;
      padding-left: 10px;
      width: 520px;
    }
  
    .eventdetailsmodal-bodyedit-timeinput{
      margin-left: 5px;
      margin-right: 5px;
      border: 1px solid lightgray;
      padding: 5px;
      padding-left: 10px;
      width: 92px;
    }
  
    .eventdetailsmodal-bodyedit-hashtag{
      margin-left: 5px;
      margin-right: 5px;
      border: 1px solid lightgray;
      padding: 5px;
      padding-left: 10px;
      width: 100%;
    }
  
    .eventdetailsmodal-bodyedit-location{
      margin-left: 5px;
      margin-right: 5px;
      border: 1px solid lightgray;
      padding: 5px;
      padding-left: 10px;
      width: 100%;
    }
  
    .eventdetailsmodal-bodyedit-keyword {
      margin-left: 5px;
      margin-right: 5px;
      border: 1px solid lightgray;
      padding: 5px;
      padding-left: 10px;
      width: 100%;
    }
  
    .eventdetailsmodal-bodyedit-buttoncontainer{
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      vertical-align: middle;
      margin-top: 10px;
    }
  
    .eventdetailsmodal-bodyedit-cancelbutton{
      border: 1px solid blue;
      border-radius: 0.25rem;
      padding: 3px;
      width: 120px;
    }
  
    .eventdetailsmodal-bodyedit-okbutton{
      margin-right: 0;
      margin-left: auto;
      border: 1px solid blue;
      border-radius: 0.25rem;
      padding: 3px;
      width: 120px;
    }
  
  </style>