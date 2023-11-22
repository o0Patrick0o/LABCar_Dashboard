<template>
  <div class="v-banner" :class="{'v-banner--stacked': stacked || mobile, 'v-banner--sticky': sticky, [`v-banner--{{lines}}-line`]: !!lines ,
              borderClasses, densityClasses, elevationClasses, positionClasses, roundedClasses, themeClasses }"
      :style="{dimensionStyles, locationStyles, style}" role="banner">
        
      <div key="prepend" class="v-banner__prepend">
        <slot name="prepend">
          <VAvatar key="prepend-avatar" color={color.value} density={density.value} icon={props.icon} image={props.avatar} />
        </slot>
         
        <VDefaultsProvider key="prepend-defaults" disabled={!hasPrependMedia} defaults={{ VAvatar: { color: color.value, density: density.value, icon: props.icon, image: props.avatar } }}/>
      </div>

      <div class="v-banner__content">
        <div v-if="hasText">
          <VBannerText key="text"></VBannerText>
        </div> 
             
        <div v-if="!hasText">
          <slot name="actions"></slot>
        </div>
      </div>

      <slot name="actions">
          <VBannerActions key="actions"/>
      </slot>
      
  </div>
</template>



<script>

  export default {

    props: {
      avatar: String,
      color: String,
      icon: { type: String, default: "fa-brands fa-phoenix-framework"},
      lines: String,
      stacked: Boolean,
      sticky: Boolean,
      text: String,
    },

    data() {
      return {
        inheritAttrs: false,
      };
    },


    methods: {},

  };

</script>



<style scoped>

/* @use 'sass:math'
@use '../../styles/tools'
@use './variables' as * */

  .v-banner {
    display: grid;
    flex: 1 1;
    font-size: 20px;
    grid-template-areas: "prepend content actions";
    grid-template-columns: max-content auto max-content;
    grid-template-rows: max-content max-content;
    line-height: 1;
    overflow: hidden;
    padding-inline-start: 16px;
    padding-inline-end: 8px;
    padding-top: 8px * 2;
    padding-bottom: 8px * 2;
    position: relative;
    width: 100%;
  }

  .v-banner-text {
    padding-inline-end: 36px;
  }

  .v-banner-actions {
    margin-bottom: -8px;
  }

  .v-banner--one-line {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .v-banner-actions {
    margin-bottom: 0;
  }
      
  .v-banner--one-line {
    padding-top: 8px + 2;
  }

  .v-banner--two-line {
    padding-top: 8px * 2;
    padding-bottom: 8px * 2;
  }

  .v-banner--three-line {
    padding-top: 8px * 3;
    padding-bottom: 8px * 2;
  }
  
  .v-banner--two-line, .v-banner--three-line .v-banner-actions {
    margin-top: 20px;
  }

  .v-banner--sticky {
    top: 0;
  }

  .v-banner__content {
    align-items: center;
    display: flex;
    grid-area: content;
  }

  .v-banner__prepend {
    align-self: flex-start;
    grid-area: prepend;
    margin-inline-end: 24px;
  }

  .v-banner-actions {
    align-self: flex-end;
    display: flex;
    flex: 0 1;
    grid-area: actions;
    justify-content: flex-end;
  }

  .v-banner--two-line, .v-banner--three-line {
    margin-top: 20px;
  }

  .v-banner-text {
    display: vertical;
    padding-inline-end: 90px;
    overflow: hidden;
  }


  .v-banner--two-line, .v-banner--three-line {
    align-self: flex-start;
  }

</style>