<template>
    <div class="widget-message" v-for="cont in content" :key="cont.id">
      <div class="widget-card" v-for="meeting in cont.meeting" :key="meeting.id">
    <div class="widget-card-body">
      
        <div class="widget-card-item">
          <div class="widget-card-textleft">
            <ul class="widget-card-list">
              
              <li>
                <div class="widget-card-image">
                  <font-awesome-icon icon="fa-solid fa-clock" />
                </div>
              </li>
              
              <li class="widget-card-container">
                <span class="widget-card-timestamp">{{ meeting.appointment }}</span>
              </li>
              
              <li class="widget-card-container">
                <span class="widget-card-pasttime">{{ meeting.set }}</span>
              </li>
            
            </ul>
          </div>
          
          <div class="widget-card-textright">
            <h5>{{ meeting.Type }}</h5>
            <small>{{ meeting.topic }}</small>
          </div>
        </div>

    </div>
  </div>
</div> 
</template>



<script>

  export default {

    props:["content"],

    methods: {},

  }
  
</script>



<style scoped>

.widget-message{
      display: block;
  }

  .widget-card{
      display: flex; 
      flex-direction: column; 
      border: 1px solid lightgray;
      border-radius: 0.25rem; 
      background-color: #ffffff; 
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
      margin: 10px; 
      padding: 10px; 
  }

.widget-card-body{
  display: flex !important;
  align-items: center !important;
  flex: 1 1 auto;
}

  .widget-card-item{
    display: flex;
  }
  
  .widget-card-textleft{
    flex: 0 0 auto;
    width: 33.33333333%;
    width: 25%;
    text-align: right !important;
  }

  .widget-card-image{
    margin-top: 10px;
    margin-right: 10px;
  }
 
  .widget-card-list{
    padding-left: 0;
    list-style: none;
    margin-bottom: 0 !important;
  }
 

  .widget-card-container{
    margin-right: 0.5rem !important;
  }
  
  .widget-card-timestamp{
    font-size: 0.75em;
  }
  
  .widget-card-pasttime{
    font-size: 0.75em;
    color: rgba(23, 162, 184) !important;
    line-height: 1 !important;
    display: block !important;
  }
  
  .widget-card-textright{
    flex: 0 0 auto;
    width: 66.66666667%;

    flex: 0 0 auto;
    width: 75%;
    border-left: 1px solid lightgray !important;
    padding: 1rem !important;
  }

</style>