<template> 
  <div class="grid-container">
    <div id="one">
      <TheHeader />
    </div> 

    <div id="two">
      <TheSidebar />
    </div>  

 
    <div id="three" class="h-screen">
      <slot />
    </div>  

  </div>
</template>
  
  
  
<script>
   
  import TheHeader  from "@/components/dashboard/layout/header/TheHeader.vue";
  import TheSidebar from "@/components/dashboard/layout/sidebar/TheSidebar.vue";
  //import TheFooter  from "@/components/dashboard/layout/footer/TheFooter-Auth.vue";
   
  export default {
    
    components: {
      TheHeader,
      TheSidebar,
      //TheFooter
    },
    
    data() {
      return {};
    },
    
    mounted() {},
    
    computed:{},
    
    methods: {}
  }
  
</script>
  
  
  
<style scoped>
  
  .grid-container {
    display: grid;
    grid-template-rows: 6vh 94vh;
    grid-template-columns: 256px auto auto auto auto auto;
    grid-template-areas:
    'header header header header header header'
    'aside content content content content content';

   
    background-color: rgb(30 41 59 / 1);
    overflow: hidden;
  }

.grid-container > div {
  background-color: rgb(255, 255, 255);
  text-align: center;
} 

#one { 
  grid-area: header; 
} 

#two { 
 grid-area: aside;

}

#three { 
  grid-area: content;
} 


  
</style>