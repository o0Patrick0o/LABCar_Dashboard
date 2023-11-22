<template>
  <div class="flex justify-between">
    <!--people-->
    <div class="pb-[5px] border-b transition-colors duration-200" :class="[ active === 'people' ? 'border-indigo-400 rounded-1' : 'border-transparent', ]">
      <IconButton @click="$emit('tab-change', 'people')" variant="ghost" title="people and smiles" aria-label="people and smiles">
        <font-awesome-icon icon="fa-regular fa-face-smile" class="w-5 h-5 transition-colors duration-200" :class="[ active === 'people' ? ['text-indigo-400 dark:text-indigo-400'] : ['text-gray-500 dark:text-white dark:opacity-60'] ]" />
      </IconButton>
    </div>

    <!--nature-->
    <div class="pb-[5px] border-b transition-colors duration-200" :class="[ active === 'nature' ? 'border-indigo-400 rounded-1' : 'border-transparent' ]">
      <IconButton title="nature" aria-label="nature" @click="$emit('tab-change', 'nature')" variant="ghost">
        <font-awesome-icon icon="fa-solid fa-fire-flame-curved" class="w-5 h-5 transition-colors duration-200" :class="[ active === 'nature' ? ['text-indigo-400 dark:text-indigo-400'] : ['text-gray-500 dark:text-white dark:opacity-60'] ]" />
      </IconButton>
    </div>

    <!--food-->
    <div class="pb-[5px] border-b transition-colors duration-200" :class="[ active === 'food' ? 'border-indigo-400 rounded-1' : 'border-transparent' ]">
      <IconButton title="food" aria-label="food" @click="$emit('tab-change', 'food')" variant="ghost">
        <font-awesome-icon icon="fa-solid fa-cake-candles" class="w-5 h-5 transition-colors duration-200" :class="[ active === 'food' ? ['text-indigo-400 dark:text-indigo-400'] : ['text-gray-500 dark:text-white dark:opacity-60'] ]"/>
      </IconButton>
    </div>

    <!--activity-->
    <div class="pb-[5px] border-b transition-colors duration-200" :class="[ active === 'activity' ? 'border-indigo-400 rounded-1' : 'border-transparent' ]">
      <IconButton @click="$emit('tab-change', 'activity')" variant="ghost" title="activities and sports" aria-label="activities and sports">
        <font-awesome-icon icon="fa-solid fa-rocket" class="w-5 h-5 transition-colors duration-200" :class="[ active === 'activity' ? ['text-indigo-400 dark:text-indigo-400'] : ['text-gray-500 dark:text-white dark:opacity-60'] ]"/>
      </IconButton>
    </div>

    <!--objects-->
    <div class="pb-[5px] border-b transition-colors duration-200" :class="[ active === 'objects' ? 'border-indigo-400 rounded-1' : 'border-transparent' ]">
      <IconButton @click="$emit('tab-change', 'objects')" variant="ghost">
        <font-awesome-icon icon="fa-regular fa-lightbulb" class="w-5 h-5 transition-colors duration-200" :class="[ active === 'objects' ? ['text-indigo-400 dark:text-indigo-400'] : ['text-gray-500 dark:text-white dark:opacity-60'] ]"/>
      </IconButton>
    </div>

    <!--travel-->
    <div class="pb-[5px] border-b transition-colors duration-200" :class="[ active === 'travel' ? 'border-indigo-400 rounded-1' : 'border-transparent', ]">
      <IconButton @click="$emit('tab-change', 'travel')" variant="ghost" title="travel" aria-label="travel">
        <font-awesome-icon icon="fa-solid fa-earth-europe" class="w-5 h-5 transition-colors duration-200" :class="[ active === 'travel' ? ['text-indigo-400 dark:text-indigo-400'] : ['text-gray-500 dark:text-white dark:opacity-60'] ]"/>
      </IconButton>
    </div>

    <!--flags-->
    <div class="pb-[5px] border-b transition-colors duration-200" :class="[ active === 'flags' ? 'border-indigo-400 rounded-1' : 'border-transparent', ]">
      <IconButton title="flags" aria-label="flags" @click="$emit('tab-change', 'flags')" variant="ghost">
        <font-awesome-icon icon="fa-regular fa-flag" class="w-5 h-5 transition-colors duration-200" :class="[ active === 'flags' ? ['text-indigo-400 dark:text-indigo-400'] : ['text-gray-500 dark:text-white dark:opacity-60'] ]"/>
      </IconButton>
    </div>
  </div>
</template>


<script>
import IconButton from "@/components/dashboard/messenger/base/basics/IconButton.vue";


  export default {
    
    components: {
      IconButton,
    },

    props: {
      active: String,
    },
  }
</script>