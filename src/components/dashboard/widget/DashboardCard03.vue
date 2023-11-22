<template>
  <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-xl border border-gray-300 rounded">
    <div class="px-5 pt-5">
      <header class="flex justify-between items-start mb-2">
        <!-- Icon -->
        <EditMenu align="right" class="relative inline-flex">
          <li>
            <a class="font-medium text-sm text-slate-600 hover:text-slate-800  flex py-1 px-3" href="#0">Option 1</a>
          </li>
          <li>
            <a class="font-medium text-sm text-slate-600 hover:text-slate-800  flex py-1 px-3" href="#0">Option 2</a>
          </li>
          <li>
            <a class="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" href="#0">Remove</a>
          </li>
        </EditMenu>
      </header>
      <h2 class="text-lg font-semibold text-slate-800 mb-2">Acme Professional</h2>
      <div class="text-xs font-semibold text-slate-400 uppercase mb-1">Sales</div>
      <div class="flex items-start">
        <div class="text-3xl font-bold text-slate-800 mr-2">$9,962</div>
        <div class="text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full">+29%</div>
      </div>
    </div>
    <!-- Chart built with Chart.js 3 -->
    <div class="grow max-sm:max-h-[128px] xl:max-h-[128px]">
      <!-- Change the height attribute to adjust the chart height -->
      <LineChart :data="chartData" width="389" height="128" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import LineChart from '@/components/dashboard/charts/LineChart04.vue'
import EditMenu from '@/components/dashboard/dropdown/Dropdown-EditMenu.vue'

export default {
  name: 'DashboardCard01',
  components: {
    LineChart,
    EditMenu,
  },
  setup() {
    const chartData = ref({
      labels: [
        '12-01-2020', '01-01-2021', '02-01-2021',
        '03-01-2021', '04-01-2021', '05-01-2021',
        '06-01-2021', '07-01-2021', '08-01-2021',
        '09-01-2021', '10-01-2021', '11-01-2021',
        '12-01-2021', '01-01-2022', '02-01-2022',
        '03-01-2022', '04-01-2022', '05-01-2022',
        '06-01-2022', '07-01-2022', '08-01-2022',
        '09-01-2022', '10-01-2022', '11-01-2022',
        '12-01-2022', '01-01-2023',
      ],
      datasets: [
        // Indigo line
        {
          data: [
            540, 466, 540, 466, 385, 432, 334,
            334, 289, 289, 200, 289, 222, 289,
            289, 403, 554, 304, 289, 270, 134,
            270, 829, 344, 388, 364,
          ],
          fill: true,
          backgroundColor: '#3b82f6',
          borderColor: '#6366f1',
          borderWidth: 2,
          tension: 0,
          pointRadius: 0,
          pointHoverRadius: 3,
          pointBackgroundColor: '#6366f1',
          pointHoverBackgroundColor: '#6366f1',
          pointBorderWidth: 0,
          pointHoverBorderWidth: 0,          
          clip: 20,
        },
        // Gray line
        {
          data: [
            689, 562, 477, 477, 477, 477, 458,
            314, 430, 378, 430, 498, 642, 350,
            145, 145, 354, 260, 188, 188, 300,
            300, 282, 364, 660, 554,
          ],
          borderColor: '#64748b',
          borderWidth: 2,
          tension: 0,
          pointRadius: 0,
          pointHoverRadius: 3,
          pointBackgroundColor: '#64748b',
          pointHoverBackgroundColor: '#64748b',
          pointBorderWidth: 0,
          pointHoverBorderWidth: 0,               
          clip: 20,
        },
      ],
    })

    return {
      chartData,
    } 
  }
}
</script>