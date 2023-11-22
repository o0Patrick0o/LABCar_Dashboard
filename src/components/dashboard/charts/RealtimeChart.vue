<template>
  <div class="px-5 py-3">
    <div class="flex items-start">
      <div class="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2 tabular-nums">$<span>{{ chartValue }}</span></div>
      <div class="text-sm font-semibold text-white px-1.5 rounded-full" :style="{'background-color': chartDeviationbgcolor}">{{ chartDeviation }}</div>
    </div>
  </div>
  <div class="grow">
    <canvas id="realtimechart" :width="width" :height="height"></canvas>
  </div>
</template>

<script>

import { Chart, LineController, LineElement, PointElement, LinearScale, TimeScale, Tooltip } from 'chart.js'
//import 'chartjs-adapter-moment'

Chart.register(LineController, LineElement, PointElement, LinearScale, TimeScale, Tooltip)

export default {
  
  props: ['data', 'width', 'height'],

  data() {
    return {
      chart: null,
      darkMode: false,
      legend: null,
      chartValue: 57.81,
      chartDeviation: null,
      chartDeviationbgcolor: '',

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
    const ctx = document.getElementById('realtimechart')

    this.chart  = new Chart(ctx, {
        type: 'line',
        data: this.data,
        options: {
          layout: {
            padding: 20,
          },
          scales: {
            y: {
              border: {
                display: false,
              },
              suggestedMin: 30,
              suggestedMax: 80,
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
              type: 'time',
              time: {
                parser: 'hh:mm:ss',
                unit: 'second',
                tooltipFormat: 'MMM DD, H:mm:ss a',
                displayFormats: {
                  second: 'H:mm:ss',
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
              titleFont: {
                weight: '600',
              },
              callbacks: {
                label: (context) => this.formatValue(context.parsed.y),
              },
              titleColor: this.darkMode ? this.tooltipTitleColor.dark : this.tooltipTitleColor.light,
              bodyColor: this.darkMode ? this.tooltipBodyColor.dark : this.tooltipBodyColor.light,
              backgroundColor: this.darkMode ? this.tooltipBgColor.dark : this.tooltipBgColor.light,
              borderColor: this.darkMode ? this.tooltipBorderColor.dark : this.tooltipBorderColor.light,               
            },
          },
          interaction: {
            intersect: false,
            mode: 'nearest',
          },
          animation: false,
          maintainAspectRatio: false,
        },
      })
      // output header values
      this.handleHeaderValues(this.data)
    
  },

  unmounted(){
    this.chart.destroy()
  },

  methods: {
      
      formatValue(value) { 
        return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 3, notation: 'compact',}).format(value);
      },

      // function that updates header values
      handleHeaderValues(data) {
        const currentValue = data.datasets[0].data[data.datasets[0].data.length - 1]
        const previousValue = data.datasets[0].data[data.datasets[0].data.length - 2]
        const diff = ((currentValue - previousValue) / previousValue) * 100
        this.chartValue = data.datasets[0].data[data.datasets[0].data.length - 1]
        if (diff < 0) {
          this.chartDeviationbgcolor = '#f59e0b'
        } else {
          this.chartDeviationbgcolor = '#10b981'
        }
        this.chartDeviation = `${diff > 0 ? '+' : ''}${diff.toFixed(2)}%`
      }    
    
    },

    watch: {
      data: {
        handler() {
          // update chart
          this.chart.data = this.data
          this.chart.update()
          // update header values
          this.handleHeaderValues(this.data, this.chartValue, this.chartDeviation)  
        },
        deep: true,
      },

      darkMode: {
        handler() {
          if (this.darkMode) {
            this.chart.options.scales.x.ticks.color = this.textColor.dark
            this.chart.options.scales.y.ticks.color = this.textColor.dark
            this.chart.options.scales.y.grid.color = this.gridColor.dark
            this.chart.options.plugins.tooltip.titleColor = this.tooltipTitleColor.dark
            this.chart.options.plugins.tooltip.bodyColor = this.tooltipBodyColor.dark
            this.chart.options.plugins.tooltip.backgroundColor = this.tooltipBgColor.dark
            this.chart.options.plugins.tooltip.borderColor = this.tooltipBorderColor.dark
        } else {
          this.chart.options.scales.x.ticks.color = this.textColor.light
          this.chart.options.scales.y.ticks.color = this.textColor.light
          this.chart.options.scales.y.grid.color = this.gridColor.light
          this.chart.options.plugins.tooltip.titleColor = this.tooltipTitleColor.light
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