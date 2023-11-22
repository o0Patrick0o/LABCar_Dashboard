<template>
  <div class="flex flex-col col-span-full sm:col-span-6 bg-white shadow-xl border border-gray-300 rounded">
    <header class="px-5 py-4 border-b border-slate-100 flex items-center">
      <h2 class="font-semibold text-slate-800">Sales VS Refunds</h2>
      <Tooltip class="ml-2" size="lg">
        <div class="text-sm">Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div>
      </Tooltip>
    </header>
    <div class="px-5 py-3">
      <div class="flex items-start">
        <div class="text-3xl font-bold text-slate-800 mr-2">+$6,796</div>
        <div class="text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full">-34%</div>
      </div>
    </div>
    <!-- Chart built with Chart.js 3 -->
    <div class="grow">
      <!-- Change the height attribute to adjust the chart height -->
      <BarChart :data="chartData" width="595" height="248" />
    </div>
  </div>  
</template>

<script>
import { ref } from 'vue'
import Tooltip from '@/components/dashboard/dropdown/Tooltip.vue'
import BarChart from '@/components/dashboard/charts/BarChart02.vue'

export default {
  name: 'DashboardCard09',
  components: {
    Tooltip,
    BarChart,
  },
  setup() {
    const chartData = ref({
      labels: [
        '12-01-2020', '01-01-2021', '02-01-2021',
        '03-01-2021', '04-01-2021', '05-01-2021',
      ],
      datasets: [
        // Light blue bars
        {
          label: 'Stack 1',
          data: [
            6200, 9200, 6600, 8800, 5200, 9200,
          ],
          backgroundColor: '#6366f1',
          hoverBackgroundColor: '#4f46e5',
          barPercentage: 0.66,
          categoryPercentage: 0.66,
        },
        // Blue bars
        {
          label: 'Stack 2',
          data: [
            -4000, -2600, -5350, -4000, -7500, -2000,
          ],
          backgroundColor: '#c7d2fe',
          hoverBackgroundColor: '#a5b4fc',
          barPercentage: 0.66,
          categoryPercentage: 0.66,
        },
      ],
    })

    return {
      chartData,
    } 
  }
}
</script>