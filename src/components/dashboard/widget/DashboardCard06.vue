<template>
  <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-xl border border-gray-300 rounded">
    <header class="px-5 py-4 border-b border-slate-100 ">
      <h2 class="font-semibold text-slate-800">Top Countries</h2>
    </header>
    <!-- Chart built with Chart.js 3 -->
    <!-- Change the height attribute to adjust the chart height -->
    <DoughnutChart :data="chartData" width="389" height="260" />
  </div>
</template>

<script>
import { ref } from 'vue'
import DoughnutChart from '@/components/dashboard/charts/DoughnutChart.vue'

export default {
  name: 'DashboardCard06',
  components: {
    DoughnutChart,
  },
  setup() {
    const chartData = ref({
      labels: ['United States', 'Italy', 'Other'],
      datasets: [
        {
          label: 'Top Countries',
          data: [
            35, 30, 35,
          ],
          backgroundColor: [
            '#6366f1',
            '#60a5fa',
            '#3730a3',
          ],
          hoverBackgroundColor: [
            '#4f46e5',
            '#3b82f6',
            '#312e81',
          ],
          borderWidth: 0,
        },
      ],
    })

    return {
      chartData,
    } 
  }
}
</script>