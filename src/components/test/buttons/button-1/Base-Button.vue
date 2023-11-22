<template>
  <button class="flex items-center cursor-pointer shadow hover:shadow-lg" :type="type" :class="btnClasses">
    <slot />
  </button>
</template>



<script>

export default {
  props: ['type', 'gibtcolor', 'size', 'outline', 'icon', 'round'],

  data() {
    return {
      color: 'red',
    }
  },

  mounted() {

  },

  computed: {

    colorClasses() {
      const baseClasses = 'bg-blue-600 text-' + this.color + '-100 border-' + this.color + '-600 hover:bg-'+ this.color +'-700 hover:border-'+ this.color +'-700';
      const outlineClasses = 'outline';
      
      return this.outline ? outlineClasses : baseClasses;
    },

    sizeClasses() {
      const isIcon = this.icon;
      const sizeMappings = {
        sm: `h-8 text-sm ${isIcon ? "px-2" : "px-4"}`,
        md: `h-10 ${isIcon ? "px-3" : "px-6"}`,
        lg: `text-lg h-12 ${isIcon ? "px-4" : "px-12"}`
      };

      return sizeMappings[this.size] || sizeMappings.md;
    },

    btnClasses() {
      const borderRadiusClasses = this.round ? "rounded-full" : "rounded";
      return `${this.colorClasses} ${this.sizeClasses} ${borderRadiusClasses}`;
    },

  },
};
</script>



<style scoped>

  .outline{
    border: 0.1rem solid;
    color: v-bind(color);
    border-color: v-bind(color); 
    color: v-bind(color); 
    background-color: #ffffff;
  }

  .outline:hover {
    border-color: v-bind(color); 
    color: #ffffff; 
    background-color: v-bind(color);
  }

</style>