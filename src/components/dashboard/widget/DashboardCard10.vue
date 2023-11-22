<template>
  <div class="col-span-full xl:col-span-6 bg-white shadow-xl border border-gray-300 rounded">
    <header class="px-5 py-4 border-b border-slate-100 ">
      <h2 class="font-semibold text-slate-800 ">Customers</h2>
    </header>
    <div class="p-3">

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <!-- Table header -->
          <thead class="text-xs font-semibold uppercase bg-slate-50 ">
            <tr>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-left">Name</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-left">Email</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-left">Spent</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-center">Country</div>
              </th>
            </tr>
          </thead>
          <!-- Table body -->
          <tbody class="text-sm divide-y divide-slate-100">
            <tr v-for="customer in customers" :key="customer.id">
              <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                    <img class="rounded-full" :src="placeholder" width="40" height="40" :alt="customer.name" />
                  </div>
                  <div class="font-medium text-slate-800">{{customer.name}}</div>
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-left">{{customer.email}}</div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium text-green-500">{{customer.spent}}</div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-lg text-center">{{customer.location}}</div>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  </div>
</template>

<script>


import Placeholder from '@/assets/Images/Placeholder/user.png';

export default {
  data() {
    return {
      placeholder: Placeholder,
      customers: [
        {
          id: '0',
          name: 'Alex Shatov',
          email: 'alexshatov@gmail.com',
          location: '🇺🇸',
          spent: '$2,890.66',
        },
        {
          id: '1',
          name: 'Philip Harbach',
          email: 'philip.h@gmail.com',
          location: '🇩🇪',
          spent: '$2,767.04',
        },
        {
          id: '2',

          name: 'Mirko Fisuk',
          email: 'mirkofisuk@gmail.com',
          location: '🇫🇷',
          spent: '$2,996.00',
        },
        {
          id: '3',

          name: 'Olga Semklo',
          email: 'olga.s@cool.design',
          location: '🇮🇹',
          spent: '$1,220.66',
        },
        {
          id: '4',
          name: 'Burak Long',
          email: 'longburak@gmail.com',
          location: '🇬🇧',
          spent: '$1,890.66',
        },      
      ]
    };
  },
}
</script>