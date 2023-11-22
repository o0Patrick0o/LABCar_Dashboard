<template>
  <div class="md-badge-content" v-if="hasDefaultSlot">
    <slot />
    <BadgeStandalone>
      <div>
        {{ Content }}
      </div>
    </BadgeStandalone>
  </div>
  <BadgeStandalone v-else>
    {{ Content }}
  </BadgeStandalone>
</template>



<script>

  import BadgeStandalone from '@/components/base/badge/Badge-Standalone.vue'

  export default {
 
    components: {
      BadgeStandalone
    },

    props: {
      Content: [String, Number],
      Position: {
        type: String,
        default: 'top',
      },
      mdDense: Boolean
    },

    computed: {
      hasDefaultSlot () {
        return !!this.$slots.default
      },

      badgeClasses () {
        const staticClass = this.getStaticClass()
        const dynamicClass = this.$vnode.data.class

        return {
          ['md-position-' + this.mdPosition]: true,
          'md-dense': this.mdDense,
          ...staticClass,
          ...dynamicClass
        }
      },

      styles () {
        const staticStyle = this.$vnode.data.staticStyle
        const style = this.$vnode.data.style
        return {
          ...staticStyle,
          ...style
        }
      }
    },

    methods: {
      getStaticClass () {
        const staticClass = this.$vnode.data.staticClass

        function filterClasses () {
          return staticClass.split(' ').filter(val => val).reduce((result, key) => {
            result[key] = true
            return result
          }, {})
        }

        return staticClass ? filterClasses() : {}
      }
    }
  }

</script>



<style lang="scss">

  @import "@/styles/base/Base-Variables";


  .md-badge-content {
    position: relative;
    display: inline-block;
    .md-position {
      &-top {
        top: -4px;
      }
      &-bottom {
        bottom: -4px;
      }
    }
  }
</style>
