// Import Chart.js
import { Chart, Tooltip } from 'chart.js'

Chart.register(Tooltip)

// Define Chart.js default settings
Chart.defaults.font.family = '"Inter", sans-serif'
Chart.defaults.font.weight = '500'
Chart.defaults.plugins.tooltip.borderWidth = 1
Chart.defaults.plugins.tooltip.displayColors = false
Chart.defaults.plugins.tooltip.mode = 'nearest'
Chart.defaults.plugins.tooltip.intersect = false
Chart.defaults.plugins.tooltip.position = 'nearest'
Chart.defaults.plugins.tooltip.caretSize = 0
Chart.defaults.plugins.tooltip.caretPadding = 20
Chart.defaults.plugins.tooltip.cornerRadius = 4
Chart.defaults.plugins.tooltip.padding = 8

// Register Chart.js plugin to add a bg option for chart area
Chart.register({
  id: 'chartAreaPlugin',
  // eslint-disable-next-line object-shorthand
  beforeDraw: (chart) => {
    if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
      const ctx = chart.canvas.getContext('2d')
      const { chartArea } = chart
      ctx.save()
      ctx.fillStyle = chart.config.options.chartArea.backgroundColor
      // eslint-disable-next-line max-len
      ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top)
      ctx.restore()
    }
  },
})

export const chartColors = {
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
