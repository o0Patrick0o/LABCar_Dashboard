<template>
  <input min="0" max="100" ref="range" type="range" class="slider" :id="props.id" :value="value" @input="$event => { changeBarStyle();  $emit('valueChange', $event.target.value) }"/>
</template>



<script>

  export default {
    
    props: {
      id: String,
      self: Boolean,
      initialValue: Number,
      percentage: Number,
    },

    data() {
      return {
         range: null,
         style: document.createElement("style"),
         value: this.initialValue,
      };
    },

    mounted() {
      document.head.appendChild(this.style);
      this.changeBarStyle();
    },

    methods: {
      changeBarStyle() {
        if (this.style && this.range) {
          const value = ((this.range.value - this.range.min) / (this.range.max - this.range.min)) *  100;
          this.style.textContent = ` #${this.id}::-webkit-slider-runnable-track { background: linear-gradient( to right, rgb(165 180 252) 0%, rgb(165 180 252) ${value}%, rgba(255, 255, 255, 0.4) ${value}%, rgba(255, 255, 255, 0.4) 100%); }`;
        }
      },
    },

    watch: {

      percentage: {
        handler() {
          if (this.percentage) {
            this.value = this.percentage;
            this.changeBarStyle();
          }
        },
        deep: true
      },

    },
  }

</script>