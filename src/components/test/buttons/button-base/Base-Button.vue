<template>
  <button type="button" class="v-btn">

    <span class="v-btn__prepend">
      <font-awesome-icon v-if="prependIcon" :icon="prependIcon" />

      <slot v-if="!prependIcon" name="prepend"></slot>
    </span>

          <span class="v-btn__content">
            <font-awesome-icon v-if="icon" :icon="icon" />
            dsfgsdfgsdgsd
            <slot v-if="!icon" name="content"></slot>
          </span>

          <span key="append" class="v-btn__append">
            <font-awesome-icon v-if="appendIcon" :icon="appendIcon" />
           
            <slot v-if="!appendIcon" name="append"></slot>
          </span>

          <span v-if="loding" key="loader" class="v-btn__loader">
            test
          </span>

  </button>
</template>



<script>

  export default {
    
    props: {
      active: { type: Boolean,  default: undefined },
      flat: Boolean,
      icon: { type: String, default: 'fa-brands fa-phoenix-framework' },
      prependIcon: { type: String, default: 'fa-brands fa-phoenix-framework' },
      appendIcon: { type: String, default: 'fa-brands fa-phoenix-framework' },
      block: Boolean,
      stacked: Boolean,
      text: String,
      link: String,
      loding: Boolean
    },

    data() {
      return {
        color: 'red',
      }
    },

    mounted() {

    },

    computed: {

      isActive() {
        if (this.active !== undefined) {
          return this.active
        }
        
        if (this.link) {
          return this.link.isActive
        }
        
        return this.isSelected
      },
      
      isDisabled() { 
        return this.disabled
      },

      isElevated() {
        return ( this.variant === "elevated" &&  !(this.disabled || this.flat || this.border) )
      },
      
      valueAttr() {
        if (this.value === undefined) {
         return undefined
        }
        
        return Object(this.value) === this.value ? JSON.stringify(this.value, null, 0) : this.value
      },

    },
  };
</script>



<style scoped>


.v-btn {
    align-items: center;
    border-radius: 0.25rem;
    justify-content: center;
    line-height: normal;
    max-width: 100%;
    outline: none;
    position: relative;
    text-decoration: none;
    vertical-align: middle;
    border: 1px solid lightgray;
    color: black !important;
    background-color: white;
  }

  .v-btn::after {
    position: absolute;
    pointer-events: none;
    border: 2px solid currentColor;
    border-radius: inherit;
    opacity: 0;
    transition: opacity .2s ease-in-out;
  }

  .v-btn:focus-visible::after {
    opacity: 0.25;
  }

  .v-btn--icon {
    border-radius: 9999px;
    min-width: 0;
    padding: 0;
  }

  .v-btn--flat {
    box-shadow: none;
  }

  .v-btn--block {
    display: flex;
    flex: 1 0 auto;
    min-width: 100%;
  }

  .v-btn--disabled {
    pointer-events: none;
  }
      
  .v-btn--disabled.v-btn {
    color: rgba(red, 0.26) !important;
  }

  .v-btn--disabled .v-btn--variant-elevated, .v-btn--disabled .v-btn--variant-flat {
    box-shadow: none;
  }

  .v-btn__overlay { 
    opacity: 0.5;
  }

  .v-btn--loading {
    pointer-events: none;
  }

  .v-btn__content, .v-btn__prepend, .v-btn__append {
    opacity: 0;
  }

  .v-btn--stacked {
    grid-template-areas: "prepend" "content" "append";
    grid-template-columns: auto;
    grid-template-rows: max-content max-content max-content;
    justify-items: center;
    align-content: center;
  }

  .v-btn__content {
    flex-direction: column;
    line-height: 1.25;
    color: black;
  }

  .v-btn__prepend, .v-btn__append, .v-btn__content > .v-icon--start, .v-btn__content > .v-icon--end {
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  .v-btn__prepend, .v-btn__content > .v-icon--start {
    margin-bottom: 4px;
  }

  .v-btn__append, .v-btn__content > .v-icon--end {
    margin-top: 4px;
  }

  .v-btn__loader {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .v-btn__content, .v-btn__prepend, .v-btn__append {
    align-items: center;
    display: flex;
    transition: transform, opacity .2s;
  }

  .v-btn__prepend {
    grid-area: prepend;
    margin-inline-start: calc(5 / -9 );
    margin-inline-end: calc(5 / 4.5 );
  }

  .v-btn__append {
    grid-area: append;
    margin-inline-start: calc(5 / 4.5);
    margin-inline-end: calc(5 / -9);
  }

  .v-btn__content {
    grid-area: content;
    justify-content: center;
    white-space: nowrap;
  }

  .v-btn__content > .v-icon--start {
    margin-inline-start: calc(5/ -9);
    margin-inline-end: calc(5 / 4.5);
  }

  .v-btn__content > .v-icon--end {
    margin-inline-start: calc(5 / 4.5);
    margin-inline-end: calc(5 / -9);
  }

  .v-btn--stacked {
    white-space: normal;
  }

  .v-btn__overlay {
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    transition: opacity .2s ease-in-out;
  }

  .v-btn__overlay, .v-btn__underlay {
    position: absolute;
    pointer-events: none;
  }


</style>