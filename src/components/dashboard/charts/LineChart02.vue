<template>
  <div class="px-5 py-3">
    <div class="flex flex-wrap justify-between items-end">
      <div class="flex items-start">
        <div class="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">$1,482</div>
        <div class="text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full">-22%</div>
      </div>
      <div class="grow ml-2 mb-1">
        <ul id="legend02" class="flex flex-wrap justify-end"></ul>
      </div>
    </div>
  </div>
  <!-- Chart built with Chart.js 3 -->
  <div class="grow">
    <canvas id="LineChart02" :data="data" :width="width" :height="height"></canvas>
  </div>  
</template>

<script>

import { Chart, LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip } from 'chart.js'
import 'chartjs-adapter-moment'

Chart.register(LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip)

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
    const ctx = document.getElementById('LineChart02')

    this.chart = new Chart(ctx, {
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
          maintainAspectRatio: false,
          resizeDelay: 200,
        },
        plugins: [{
          id: 'htmlLegend',
          afterUpdate(c, args, options) {
            const ul = document.getElementById('legend02')
            if (!ul) return
            // Remove old legend items
            while (ul.firstChild) {
              ul.firstChild.remove()
            }
            // Reuse the built-in legendItems generator
            const items = c.options.plugins.legend.labels.generateLabels(c)
            items.slice(0, 2).forEach((item) => {
              const li = document.createElement('li')
              li.style.marginLeft = '0.75rem'
              // Button element
              const button = document.createElement('button')
              button.style.display = 'inline-flex'
              button.style.alignItems = 'center'
              button.style.opacity = item.hidden ? '.3' : ''
              button.onclick = () => {
                c.setDatasetVisibility(item.datasetIndex, !c.isDatasetVisible(item.datasetIndex))
                c.update()
              }
              // Color box
              const box = document.createElement('span')
              box.style.display = 'block'
              box.style.width = '0.75rem'
              box.style.height = '0.75rem'
              box.style.borderRadius = '9999px'
              box.style.marginRight = '0.5rem'
              box.style.borderWidth = '3px'
              box.style.borderColor = c.data.datasets[item.datasetIndex].borderColor
              box.style.pointerEvents = 'none'
              // Label
              const label = document.createElement('span')
              label.classList.add('text-slate-500', 'dark:text-slate-400')
              label.style.fontSize = '0.875rem'
              label.style.lineHeight = '1.5715'
              const labelText = document.createTextNode(item.text)
              label.appendChild(labelText)
              li.appendChild(button)
              button.appendChild(box)
              button.appendChild(label)
              ul.appendChild(li)
            })
          },
        }],
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