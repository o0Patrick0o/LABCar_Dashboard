<template>
  <div class="grow flex flex-col justify-center">
    <div>
      <canvas id="barchart03" :width="width" :height="height"></canvas>
    </div>
    <div class="px-5 pt-2 pb-2">
      <ul id="legendb03" class="text-sm divide-y divide-slate-100 dark:divide-slate-700"></ul>
      <ul class="text-sm divide-y divide-slate-100 dark:divide-slate-700"></ul>
    </div>
  </div>  
</template>

<script>
 
  import { Chart, BarController, BarElement, LinearScale, CategoryScale, Tooltip, Legend, } from 'chart.js'
  //import 'chartjs-adapter-moment'

  Chart.register(BarController, BarElement, LinearScale, CategoryScale, Tooltip, Legend)

  export default {

    props: ['data', 'width', 'height'],

    data() {
      return {
        chart: null,
        darkMode: false,
        legend: null,

        values: this.data.datasets,

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
      const ctx = document.getElementById('barchart03')

      this.chart = new Chart(ctx, {
          type: 'bar',
          data: this.data,
          options: {
            indexAxis: 'y',
            layout: {
              padding: {
                top: 12,
                bottom: 12,
                left: 20,
                right: 20,
              },
            },
            scales: {
              x: {
                stacked: true,
                display: false,
                max: this.max(),
              },
              y: {
                stacked: true,
                display: false,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  title: () => false, // Disable tooltip title
                  label: (context) => context.parsed.x,
                },
                bodyColor: this.darkMode ? this.tooltipBodyColor.dark : this.tooltipBodyColor.light,
                backgroundColor: this.darkMode ? this.tooltipBgColor.dark : this.tooltipBgColor.light,
                borderColor: this.darkMode ? this.tooltipBorderColor.dark : this.tooltipBorderColor.light,               
              },
            },
            interaction: {
              intersect: false,
              mode: 'nearest'
            },
            animation: {
              duration: 500,
            },
            maintainAspectRatio: false,
            resizeDelay: 200,
          },
          /*plugins: [{
            id: 'htmlLegend',
            afterUpdate(c, args, options) {
              const ul = document.getElementById('legendb03')
              if (!ul) return
              // Remove old legend items
              while (ul.firstChild) {
                ul.firstChild.remove()
              }
              // Reuse the built-in legendItems generator
              const items = c.options.plugins.legend.labels.generateLabels(c)
              items.forEach((item) => {
                const li = document.createElement('li')
                li.style.display = 'flex'
                li.style.justifyContent = 'space-between'
                li.style.alignItems = 'center'
                li.style.paddingTop = '0.625rem'
                li.style.paddingBottom = '0.625rem'
                const wrapper = document.createElement('div')
                wrapper.style.display = 'flex'
                wrapper.style.alignItems = 'center'
                const box = document.createElement('div')
                box.style.width = '0.75rem'
                box.style.height = '0.75rem'
                box.style.borderRadius = '0.125rem'
                box.style.marginRight = '0.75rem'
                box.style.backgroundColor = item.fillStyle
                const label = document.createElement('div')
                const value = document.createElement('div')
                value.style.fontWeight = '500'
                value.style.marginLeft = '0.75rem'
                value.style.color = item.text === 'Other' ? '#9ca3af' : item.fillStyle
                const theValue = c.data.datasets[item.datasetIndex].data.reduce((a, b) => a + b, 0)
                const valueText = document.createTextNode(`${parseInt(theValue / this.value.length * 100)}%`)
                const labelText = document.createTextNode(item.text)
                value.appendChild(valueText)
                label.appendChild(labelText)
                ul.appendChild(li)
                li.appendChild(wrapper)
                li.appendChild(value)
                wrapper.appendChild(box)
                wrapper.appendChild(label)
              })
            },
          }],*/     
        })
      
    },

    unmounted(){
      this.chart.destroy()
    },

    methods: {
        
      formatValue(value) { 
        return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 3, notation: 'compact',}).format(value);
      },

      reducer(accumulator, currentValue) { 
        return accumulator + currentValue;
      },

      max() {
        return this.values.reduce(this.reducer);
      },
    },

    watch: {
      darkMode: {
        handler() {
          if (this.darkMode) {
            this.chart.options.plugins.tooltip.bodyColor = this.tooltipBodyColor.dark
            this.chart.options.plugins.tooltip.backgroundColor = this.tooltipBgColor.dark
            this.chart.options.plugins.tooltip.borderColor = this.tooltipBorderColor.dark
          } else {
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