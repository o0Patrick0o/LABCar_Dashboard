<template>
  <div class="relative" @mouseenter="tooltipOpen = true"  @mouseleave="tooltipOpen = false" @focusin="tooltipOpen = true" @focusout="tooltipOpen = false" >
    <slot />
    <div class="z-10 absolute" :class="positionOuterClasses(position)">
      <transition >
        <div v-show="tooltipOpen" class="rounded border overflow-hidden shadow-lg" :class="[ colorClasses(bg), sizeClasses(size), positionInnerClasses(position) ]" >
          {{ tooltiptext }}
        </div>
      </transition>
    </div>
  </div>
</template>


<script>
import { ref } from 'vue'

export default {

  props: ['bg', 'size', 'position', 'tooltiptext'],
  
  setup() {

    const tooltipOpen = ref(false)

    const positionOuterClasses = (position) => {
      switch (position) {
        case 'right':
          return 'left-full top-1/2 -translate-y-1/2';
        case 'left':
          return 'right-full top-1/2 -translate-y-1/2';
        case 'bottom':
          return 'top-full left-1/2 -translate-x-1/2';
        default:
          return 'bottom-full left-1/2 -translate-x-1/2';
      }
    }
    
    const sizeClasses = (size) => {
      switch (size) {
        case 'lg':
          return 'min-w-72  p-3';
        case 'md':
          return 'min-w-56 p-3';
        case 'sm':
          return 'min-w-44 p-2';
        default:
          return 'p-2';
      }
    }

    const colorClasses = (bg) => {
      switch (bg) {
        case 'light':
          return 'bg-white text-slate-600 border-slate-200'
        case 'dark':
          return 'bg-slate-700 text-slate-100 border-slate-600'
        default:
          return 'text-slate-600 bg-white dark:bg-slate-700 dark:text-slate-100 border-slate-200 dark:border-slate-600'
      }
    }      

    const positionInnerClasses = (position) => {
      switch (position) {
        case 'right':
          return 'ml-2';
        case 'left':
          return 'mr-2';
        case 'bottom':
          return 'mt-2';
        default:
          return 'mb-2';
      }
    }    

    return {
      tooltipOpen,
      positionOuterClasses,
      sizeClasses,
      colorClasses,
      positionInnerClasses,
    }
  }
}
</script>