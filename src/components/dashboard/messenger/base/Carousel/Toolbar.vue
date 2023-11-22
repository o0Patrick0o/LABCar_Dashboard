<template>
  <div class="w-full flex justify-end mb-5">
    <!--decrease zoom-->
    <IconButton title="decrease zoom" v-show="props.isImage" aria-label="decrease zoom" class="mr-5" variant="ghost" @click="props.handleDecreaseZoom()">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass-minus" class="md:w-6 md:h-6 xs:w-5 xs:h-5 text-white opacity-80 hover:opacity-100"/>
    </IconButton>

    <!--increase zoom-->
    <IconButton title="increase zoom" v-show="props.isImage" aria-label="increase zoom" class="mr-5" variant="ghost" @click="props.handleIncreaseZoom()">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass-plus" class="md:w-6 md:h-6 xs:w-5 xs:h-5 text-white opacity-80 hover:opacity-100"/>
    </IconButton>

    <!--delete media-->
    <IconButton aria-label="delete attachment" class="mr-5" variant="ghost" title="delete attachment">
      <font-awesome-icon icon="fa-solid fa-trash" class="md:w-6 md:h-6 xs:w-5 xs:h-5 text-white opacity-80 hover:opacity-100" />
    </IconButton>

    <!--close carousel-->
    <IconButton title="close carousel" aria-label="close carousel" @click="props.handleCloseCarousel()" variant="ghost">
      <font-awesome-icon icon="fa-solid fa-xmark" class="md:w-6 md:h-6 xs:w-5 xs:h-5 text-white opacity-80 hover:opacity-100" />
    </IconButton>
  </div>
</template>



<script>

  import IconButton from "@/components/dashboard/messenger/base/basics/IconButton.vue";

  export default {
    
    components: {
      IconButton,
    },

    props: {
      handleCloseCarousel: Function,
      handleIncreaseZoom: Function,
      handleDecreaseZoom: Function,
      isImage: Boolean,
    },
  }
</script>