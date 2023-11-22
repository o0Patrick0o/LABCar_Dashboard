<template>
  <div class="grow flex flex-col justify-center">
    <div>
      <canvas id="DoughnutChart" :data="data" :width="width" :height="height"></canvas>
    </div>
    <div class="px-5 pt-2 pb-6">
      <ul id="legendDoughnut" class="flex flex-wrap justify-center -m-1"></ul>
    </div>
  </div>  
</template>

<script>

import { Chart, DoughnutController, ArcElement, TimeScale, Tooltip } from 'chart.js'
import 'chartjs-adapter-moment'

Chart.register(DoughnutController, ArcElement, TimeScale, Tooltip)

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
    const ctx = document.getElementById('DoughnutChart')

    this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: this.data,
        options: {
          cutout: '80%',
          layout: {
            padding: 24,
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
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
          animation: {
            duration: 500,
          },
          maintainAspectRatio: false,
          resizeDelay: 200,
        },
        plugins: [{
          id: 'htmlLegend',
          afterUpdate(c, args, options) {
            const ul = document.getElementById('legendDoughnut')
            if (!ul) return
            // Remove old legend items
            while (ul.firstChild) {
              ul.firstChild.remove()
            }
            // Reuse the built-in legendItems generator
            const items = c.options.plugins.legend.labels.generateLabels(c)
            items.forEach((item) => {
              const li = document.createElement('li')
              li.style.margin = '0.25rem'
              // Button element
              const button = document.createElement('button')
              button.classList.add('btn-xs', 'bg-white', 'dark:bg-slate-800', 'text-slate-500', 'dark:text-slate-400', 'border', 'border-slate-200', 'dark:border-slate-700', 'shadow-md')
              button.style.opacity = item.hidden ? '.3' : ''
              button.onclick = () => {
                c.toggleDataVisibility(item.index, !item.index)
                c.update()
              }
              // Color box
              const box = document.createElement('span')
              box.style.display = 'block'
              box.style.width = '0.5rem'
              box.style.height = '0.5rem'
              box.style.backgroundColor = item.fillStyle
              box.style.borderRadius = '0.125rem'
              box.style.marginRight = '0.25rem'
              box.style.pointerEvents = 'none'
              // Label
              const label = document.createElement('span')
              label.style.display = 'flex'
              label.style.alignItems = 'center'
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
            this.chart.options.plugins.tooltip.titleColor = this.tooltipTitleColor.dark
            this.chart.options.plugins.tooltip.bodyColor = this.tooltipBodyColor.dark
            this.chart.options.plugins.tooltip.backgroundColor = this.tooltipBgColor.dark
            this.chart.options.plugins.tooltip.borderColor = this.tooltipBorderColor.dark
        } else {
          this.chart.options.plugins.tooltip.titleColor = this.tooltipTitleColor.light
          this.chart.options.plugins.tooltip.bodyColor = this.tooltipBodyColor.light
          this. chart.options.plugins.tooltip.backgroundColor = this.tooltipBgColor.light
          this.chart.options.plugins.tooltip.borderColor = this.tooltipBorderColor.light
        }
        this.chart.update('none')
        },
        deep: true,
      },
    },

}
</script>