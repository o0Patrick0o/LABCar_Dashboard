<template>
  <!--collapsed region-->
  <Transition name="collapse">
    <div v-if="!collapsed" class="w-full flex flex-col px-5" :aria-hidden="collapsed">
      <slot></slot>
    </div>
  </Transition>
</template>

<script>

  export default {  
    props: {
      collapsed: Boolean,
    },
  }
</script>



<style scoped>
.collapse-enter-active {
  animation: collapse reverse 300ms ease;
}

.collapse-leave-active {
  animation: collapse 300ms ease;
}

@keyframes collapse {
  100% {
    max-height: 0px;
    opacity: 0;
  }

  50% {
    max-height: 400px;
  }

  0% {
    opacity: 1;
  }
}
</style>
