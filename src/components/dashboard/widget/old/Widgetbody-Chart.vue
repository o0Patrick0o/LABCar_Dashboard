<template>
    <div class="container">  
      <canvas :id="chartid"></canvas>
    </div> 
</template>
  
  
  
<script>
  import Chart from "chart.js/auto";

  export default {
    
    props:["content"],

    data() {
      return {
        chartid: 0,
        conifg:'',
      };
    },

    mounted () {
      
      for(let i = 0 ; i < this.content; i++ )
      {
        this.chartid = this.content[i].chartid;
        this.conifg = this.content[i].config;
      }

      this.draw(this.chartid, this.config);
    },

    methods: {
      async draw(id, config) {
        document.getElementById(0).remove();
 
        let chartStatus = Chart.getChart(id);
        if (chartStatus != undefined) {
          chartStatus.destroy();
        }
        new Chart(document.getElementById(id), config);
      }
    },
  };
</script>

<style scoped>

.container{
  position: relative;  
  padding: 1rem;  
  flex: 1 1 auto;
}

</style>