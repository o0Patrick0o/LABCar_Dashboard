<template>
  <div class="flex flex-col col-span-full sm:col-span-6 bg-white shadow-xl border border-gray-300 rounded">
    <header class="px-5 py-4 border-b border-slate-100 flex items-center">
      <h2 class="font-semibold text-slate-800 ">Real Time Value</h2>
      <Tooltip class="ml-2">
        <div class="text-xs text-center whitespace-nowrap">Built with <a class="underline" href="https://www.chartjs.org/" target="_blank" rel="noreferrer">Chart.js</a></div>
      </Tooltip>
    </header>

    <RealtimeChart :data="chartData" width="595" height="248" />
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import Tooltip from '@/components/dashboard/dropdown/Tooltip.vue'
import RealtimeChart from '@/components/dashboard/charts/RealtimeChart.vue'


export default {
  
  components: {
    Tooltip,
    RealtimeChart,
  },

  setup() {

    const counter = ref(0)
    const range = ref(35)

    // Dummy data to be looped
    const sampleData = [
      57.81, 57.75, 55.48, 54.28, 53.14, 52.25, 51.04, 52.49, 55.49, 56.87,
      53.73, 56.42, 58.06, 55.62, 58.16, 55.22, 58.67, 60.18, 61.31, 63.25,
      65.91, 64.44, 65.97, 62.27, 60.96, 59.34, 55.07, 59.85, 53.79, 51.92,
      50.95, 49.65, 48.09, 49.81, 47.85, 49.52, 50.21, 52.22, 54.42, 53.42,
      50.91, 58.52, 53.37, 57.58, 59.09, 59.36, 58.71, 59.42, 55.93, 57.71,
      50.62, 56.28, 57.37, 53.08, 55.94, 55.82, 53.94, 52.65, 50.25,
    ]
    
    const slicedData = ref(sampleData.slice(0, range.value))

    // Generate fake dates from now to back in time
    const generateDates = () => {
      const now = new Date()
      const dates = []
      sampleData.forEach((v, i) => {
        dates.push(new Date(now - 2000 - i * 2000))
      })
      return dates
    }
    
    const slicedLabels = ref(generateDates().slice(0, range.value).reverse())

    // Fake update every 2 seconds
    const interval = ref(null)
    
    onMounted(() => {
      interval.value = setInterval(() => {
        counter.value++
      }, 2000)
    })

    onUnmounted(() => {
      clearInterval(interval)
    })

    // Loop through data array and update
    watch(counter, () => {
      range.value++;
      if (range.value >= sampleData.length) {
        range.value = 0;
      }
      slicedData.value.shift();
      slicedData.value.push(sampleData[range.value]);      
      slicedLabels.value.shift()
      slicedLabels.value.push(new Date())
    })

    const chartData = computed(() => {
      return {
        labels: slicedLabels.value,
        datasets: [
          {
            data: [...slicedData.value],
            fill: true,
            backgroundColor: '#3b82f6',
            borderColor: '#6366f1',
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: '#6366f1',
            clip: 20,
          },
        ],
      }
    })

    return {
      counter,
      range,
      slicedData,
      slicedLabels,
      interval,
      chartData,
    }  
  }  
}
</script>