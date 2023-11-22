<template>
  <div class="card" :class="{ActiveTheme, 'md-with-hover': this.withHover, 'md-expand-active': this.expand}">
    
    <!-- Header -->
    <div class="md-card-header">
      <div class="md-title">
        <slot name="header" />
      </div>
      
      <div class="md-subhead">
        <slot name="subheader" />
      </div> 

    </div>
    
    <!-- Body -->
    <div class="md-card-content">
      <slot name="content" />
    </div>

    <!-- Footer -->
    <div class="md-card-actions" :class="`md-alignment-${mdAlignment}`">
      <slot name="footer" />
    </div>

  </div>
</template>



<script>

  export default{

    props: {
      withHover: { type: Boolean, default: false},
      ActiveTheme: String,
      alignment: { type: String, default: 'right'},
    },

    data() {
      return {
        expand: true
      };
    },

    computed: {},

  }

</script>



<style lang="scss" scoped>

  @import "@/styles/base/Base-Variables";
  @import "@/styles/base/Elevation-Mixins";

  .card {
   
    position: relative;
    z-index: 1;
    border-radius: 0.25rem;
    transition: .3s $md-transition-default-timing;
    transition-property: color, background-color;
    will-change: color, background-color;
    @include md-elevation(3);
 
    padding: 10px;
    border: 1px solid lightgray;



    &.md-with-hover {
      cursor: pointer;
      transition: background-color .3s $md-transition-default-timing,
                  box-shadow .4s $md-transition-stand-timing;
      will-change: background-color, box-shadow;

      &:hover {
        z-index: 2;
        @include md-elevation(8);
      }
    }

    &.md-expand-active {
      .md-card-expand-trigger.md-icon-button {
        transform: rotate(180deg);
      }
    }

    .md-subhead,
    .md-title,
    .md-subheading {
      margin: 0;
      font-weight: 400;
    }

  }

  .md-card-header {
    padding: 16px;

    &:first-child {
      > .md-title:first-child,
      > .md-card-header-text > .md-title:first-child {
        margin-top: 8px;
      }
    }

    &:last-child {
      margin-bottom: 8px;
    }

    &.md-card-header-flex {
      display: flex;
      justify-content: space-between;
    }

    + .md-card-content {
      padding-top: 0;
    }

    + .md-card-actions:not(:last-child) {
      padding: 0 8px;
    }

    > img {
      border-radius: 50%;
    }

    > img,
    .md-avatar {
      margin-right: 16px;
      float: left;

      ~ .md-title {
        font-size: 14px;
      }

      ~ .md-title,
      ~ .md-subhead {
        font-weight: 500;
        line-height: 20px;
      }
    }

    .md-button {
      margin: 0;

      &:last-child {
        margin-right: -4px;
      }

      + .md-button {
        margin-left: 8px;
      }
    }

    .md-card-header-text {
      flex: 1;
    }

    .md-card-media {
      $size: 80px;

      width: $size;
      height: $size;
      margin-left: 16px;
      flex: 0 0 $size;

      &.md-medium {
        $size: 120px;

        width: $size;
        height: $size;
        flex: 0 0 $size;
      }

      &.md-big {
        $size: 160px;

        width: $size;
        height: $size;
        flex: 0 0 $size;
      }
    }
  }
.md-subhead {
      opacity: .54;
      font-size: 14px;
      letter-spacing: .01em;
      line-height: 20px;

      + .md-title {
        margin-top: 4px;
      }
    }

    .md-title {
      font-size: 24px;
      letter-spacing: 0;
      line-height: 32px;
    }
  .md-card-content {
    padding: 16px;
    font-size: 14px;
    line-height: 22px;

    &:last-of-type {
      padding-bottom: 24px;
    }
  }

  .md-card-actions {
    padding: 8px;
    display: flex;
    align-items: center;

    &.md-alignment-right {
      justify-content: flex-end;
    }

    &.md-alignment-left {
      justify-content: flex-start;
    }

    &.md-alignment-space-between {
      justify-content: space-between;
    }

    .md-button {
      margin: 0;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      + .md-button {
        margin-left: 4px;
      }
    }
  }
</style>
