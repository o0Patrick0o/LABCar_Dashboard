<template>
  <div class="col-span-full xl:col-span-6 bg-white shadow-xl border border-gray-300 rounded">
    <header class="px-5 py-4 border-b border-slate-100 ">
      <h2 class="font-semibold text-slate-800 ">Reason for Refunds</h2>
    </header>
    <div class="px-5 py-3">
      <div class="flex items-start">
        <div class="text-3xl font-bold text-slate-800  mr-2">449</div>
        <div class="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">-22%</div>
      </div>
    </div>
    <!-- Chart built with Chart.js 3 -->
    <div class="grow">
      <!-- Change the height attribute to adjust the chart height -->
      <BarChart :data="chartData" :width="595" :height="48" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import BarChart from '@/components/dashboard/charts/BarChart03.vue'

export default {
  name: 'DashboardCard11',
  components: {
    BarChart,
  },  
  setup() {
    const chartData = ref({
      labels: ['Reasons'],
      datasets: [
        {
          label: 'Having difficulties using the product',
          data: [131],
          backgroundColor: '#6366f1',
          hoverBackgroundColor: '#4f46e5',
          barPercentage: 1,
          categoryPercentage: 1,
        },
        {
          label: 'Missing features I need',
          data: [100],
          backgroundColor: '#3730a3',
          hoverBackgroundColor: '#312e81',
          barPercentage: 1,
          categoryPercentage: 1,
        },
        {
          label: 'Not satisfied about the quality of the product',
          data: [81],
          backgroundColor: '#38bdf8',
          hoverBackgroundColor: '#0ea5e9',
          barPercentage: 1,
          categoryPercentage: 1,
        },
        {
          label: 'The product doesn’t look as advertised',
          data: [65],
          backgroundColor: '#4ade80',
          hoverBackgroundColor: '#22c55e',
          barPercentage: 1,
          categoryPercentage: 1,
        },
        {
          label: 'Other',
          data: [72],
          backgroundColor: '#e5e7eb',
          hoverBackgroundColor: '#d1d5db',
          barPercentage: 1,
          categoryPercentage: 1,
        },
      ],
    })

    return {
      chartData,
    } 
  }
}
</script>