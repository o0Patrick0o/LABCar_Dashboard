<template>
  <canvas id="linechart04" :data="data" :width="width" :height="height"></canvas>
</template>

<script>
import { Chart, LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip, } from 'chart.js'
import 'chartjs-adapter-moment'

Chart.register(LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip)

  export default {

    props: ['data', 'width', 'height'],

    data() {
        return {
          chart: null,
          darkMode: '',
           
        };
      },

    mounted(){
      const ctx = document.getElementById('linechart04')

      this.chart = new Chart(ctx, {
            type: 'line',
            data: this.data,
            options: {
              chartArea: {
                backgroundColor: '#f8fafc',
              },
              layout: {
                padding: 20,
              },
              scales: {
                y: {
                  display: false,
                  beginAtZero: true,
                },
                x: {
                  type: 'time',
                  time: {
                    parser: 'MM-DD-YYYY',
                    unit: 'month',
                  },
                  display: false,
                },
              },
              plugins: {
                tooltip: {
                  callbacks: {
                    title: () => false, // Disable tooltip title
                    label: (context) => this.formatValue(context.parsed.y),
                  },
                  bodyColor: '#1e293b',
                  backgroundColor: '#ffffff',
                  borderColor: '#e2e8f0',
                },
                legend: {
                  display: false,
                },
              },
              interaction: {
                intersect: false,
                mode: 'nearest',
              },
              maintainAspectRatio: false,
              resizeDelay: 200,
            },
          },)
    },

    unmounted(){
      this.chart.destroy()
    },
      
    methods: {
      
      formatValue(value) { 
        return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 3, notation: 'compact',}).format(value);
      },

      async draw(id, config) {
  
 
        let chartStatus = Chart.getChart(id);
        if (chartStatus != undefined) {
          chartStatus.destroy();
        }
        this.chart = new Chart(document.getElementById(id), config);
      }
    },

    watch: {
      darkMode: {
        handler() {
          if (this.darkMode.valueOf) {
            this.chart.options.chartArea.backgroundColor = '#0f172a'
            this.chart.options.plugins.tooltip.bodyColor = '#f1f5f9'
            this.chart.options.plugins.tooltip.backgroundColor = '#334155'
            this.chart.options.plugins.tooltip.borderColor = '#475569'
          } else {
            this.chart.options.chartArea.backgroundColor = '#f8fafc'
            this.chart.options.plugins.tooltip.bodyColor = '#f1f5f9'
            this.chart.options.plugins.tooltip.backgroundColor = '#ffffff'
            this.chart.options.plugins.tooltip.borderColor = '#e2e8f0'
          }
          this.chart.update('none')
        },
        deep: true,
      },
    },
  }
</script>