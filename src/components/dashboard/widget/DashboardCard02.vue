<template>
  <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-xl border border-gray-300 rounded">
    <div class="px-5 pt-5">
      <header class="flex justify-between items-start mb-2">
        <!-- Icon -->
        <div></div>
        <EditMenu align="right" class="relative inline-flex">
          <li>
            <a class="font-medium text-sm text-slate-600  hover:text-slate-800  flex py-1 px-3" href="#0">Option 1</a>
          </li>
          <li>
            <a class="font-medium text-sm text-slate-600  hover:text-slate-800  flex py-1 px-3" href="#0">Option 2</a>
          </li>
          <li>
            <a class="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" href="#0">Remove</a>
          </li>
        </EditMenu>
      </header>
      <h2 class="text-lg font-semibold text-slate-800 mb-2">Acme Advanced</h2>
      <div class="text-xs font-semibold text-slate-400 uppercase mb-1">Sales</div>
      <div class="flex items-start">
        <div class="text-3xl font-bold text-slate-800 mr-2">$17,489</div>
        <div class="text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full">-14%</div>
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
import LineChart from '@/components/dashboard/charts/LineChart03.vue'
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
            622, 622, 426, 471, 365, 365, 238,
            324, 288, 206, 324, 324, 500, 409,
            409, 273, 232, 273, 500, 570, 767,
            808, 685, 767, 685, 685,
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
          732, 610, 610, 504, 504, 504, 349,
          349, 504, 342, 504, 610, 391, 192,
          154, 273, 191, 191, 126, 263, 349,
          252, 423, 622, 470, 532,
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