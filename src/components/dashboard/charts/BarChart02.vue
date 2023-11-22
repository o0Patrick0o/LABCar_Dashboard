<template>
  <canvas id="barchart02" :data="data" :width="width" :height="height"></canvas>
</template>

<script>

import { Chart, BarController, BarElement, LinearScale, TimeScale, Tooltip, Legend, } from 'chart.js'
import 'chartjs-adapter-moment'

Chart.register(BarController, BarElement, LinearScale, TimeScale, Tooltip, Legend)

export default {
  
  props: ['data', 'width', 'height'],

  data() {
    return {
      chart: null,
      darkMode: false,
      legend: null,

      textColor: {
        light: '#94a3b8',
        dark: '#64748b'
      },

      gridColor: {
        light: '#f1f5f9',
        dark: '#334155'
      },

      backdropColor: {
        light: 'white',
        dark: '#1e293b'
      },

      tooltipTitleColor: {
        light: '#1e293b',
        dark: '#f1f5f9'
      },

      tooltipBodyColor: {
        light: '#1e293b',
        dark: '#f1f5f9'
      },

      tooltipBgColor: {
        light: 'white',
        dark: '#334155'
      },

      tooltipBorderColor: {
        light: '#e2e8f0',
        dark: '#475569'
      },

      chartAreaBg: {
        light: '#f8fafc',
        dark: `#0f172a`
      },
    }
  },
  
  mounted(){
    const ctx = document.getElementById('barchart02')

    this.chart = new Chart(ctx, {
        type: 'bar',
        data: this.data,
        options: {
          layout: {
            padding: {
              top: 12,
              bottom: 16,
              left: 20,
              right: 20,
            },
          },
          scales: {
            y: {
              stacked: true,
              border: {
                display: false,
              },
              beginAtZero: true,
              ticks: {
                maxTicksLimit: 5,
                callback: (value) => this.formatValue(value),
                color: this.darkMode ? this.textColor.dark : this.textColor.light,
              },
              grid: {
                color: this.darkMode ? this.gridColor.dark : this.gridColor.light,
              },              
            },
            x: {
              stacked: true,
              type: 'time',
              time: {
                parser: 'MM-DD-YYYY',
                unit: 'month',
                displayFormats: {
                  month: 'MMM YY',
                },
              },
              border: {
                display: false,
              },
              grid: {
                display: false,
              },
              ticks: {
                autoSkipPadding: 48,
                maxRotation: 0,
                color: this.darkMode ? this.textColor.dark : this.textColor.light,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                title: () => false, // Disable tooltip title
                label: (context) => this.formatValue(context.parsed.y),
              },
              bodyColor: this.darkMode ? this.tooltipBodyColor.dark : this.tooltipBodyColor.light,
              backgroundColor: this.darkMode ? this.tooltipBgColor.dark : this.tooltipBgColor.light,
              borderColor: this.darkMode ? this.tooltipBorderColor.dark : this.tooltipBorderColor.light,
            },
          },
          interaction: {
            intersect: false,
            mode: 'nearest',
          },
          animation: {
            duration: 200,
          },
          maintainAspectRatio: false,
          resizeDelay: 200,
        },
      })
    
  },

  unmounted(){
    this.chart.destroy()
  },

  methods: {
      
      formatValue(value) { 
        return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 3, notation: 'compact',}).format(value);
      },
    },

  watch: {
    darkMode: {
      handler() {
        if (this.darkMode) {
          this.chart.options.scales.x.ticks.color = this.textColor.dark
          this.chart.options.scales.y.ticks.color = this.textColor.dark
          this.chart.options.scales.y.grid.color = this.gridColor.dark
          this.chart.options.plugins.tooltip.bodyColor = this.tooltipBodyColor.dark
          this.chart.options.plugins.tooltip.backgroundColor = this.tooltipBgColor.dark
          this.chart.options.plugins.tooltip.borderColor = this.tooltipBorderColor.dark
        } else {
          this.chart.options.scales.x.ticks.color = this.textColor.light
          this.chart.options.scales.y.ticks.color = this.textColor.light
          this.chart.options.scales.y.grid.color = this.gridColor.light
          this.chart.options.plugins.tooltip.bodyColor = this.tooltipBodyColor.light
          this.chart.options.plugins.tooltip.backgroundColor = this.tooltipBgColor.light
          this.chart.options.plugins.tooltip.borderColor = this.tooltipBorderColor.light
        }
          this.chart.update('none')
        },
        deep: true,
      },
    },
}
</script>