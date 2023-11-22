<template>
  <div class="md-list-item-expand" :class="{'md-active': this.showContent}">

    <div class="md-list-item-content" :disabled="Disabled" @click="toggleExpand">
      <slot />

      <font-awesome-icon icon="fa-solid fa-angle-down" class="md-list-expand-icon"/>
    </div>

    <div class="md-list-expand" :style="expandStyles">
      <slot name="expand" />
    </div>
  </div>
</template>



<script>
 
  export default {
    
    props: {
      disabled: Boolean,
      Expanded: Boolean,
      ExpandSingle: { default: false }
    },

    data () {
      return {
        expandStyles: {},
        showContent: false,

        expandable: [],        
      }
    },

    created () {
      this.pushExpandable(this)
    },

    mounted () {
      if (this.mdExpanded) {
        this.open()
      }
    },

    beforeUnmount () {
      this.removeExpandable(this)
    },

    computed: {
      isDisabled () {
        return this.disabled
      },
    },

    methods: {

      getChildrenSize () {
        const expandEl = this.$refs.listExpand
        let size = 0

        Array.from(expandEl.children).forEach(child => {
          size += child.offsetHeight
        })

        return size
      },

      fetchStyle () {
        return new Promise(resolve => {
      
          let fullHeight = 0

          if (!this.showContent) {
            fullHeight = 'auto' // this.getChildrenSize() + 'px'
          }

          this.expandStyles = { height: fullHeight }
          resolve()

        })
      },

      toggleExpand () {
        this.fetchStyle().then(() => {
          this.showContent = !this.showContent
        })
      },

      open () {
        if (this.showContent) {
          return false
        }

        this.fetchStyle().then(() => [
          this.showContent = true
        ])
      },

      close () {
        if (!this.showContent) {
          return false
        }

        this.fetchStyle().then(() => {
          this.showContent = false
        })
      },

      expandATab (expandedListItem) {
        if (this.mdExpandSingle && expandedListItem) {
          const otherExpandableListItems = this.MdList.expandable.filter(target => target !== expandedListItem)
          otherExpandableListItems.forEach(expandableListItem => expandableListItem.close())
        }
      },

      pushExpandable (expandableListItem) {
        let expandableListItems = this.MdList.expandable

        if (!expandableListItems.find(target => target === expandableListItem)) {
          this.MdList.expandable = expandableListItems.concat([expandableListItem])
        }
      },

      removeExpandable (expandableListItem) {
        let expandableListItems = this.MdList.expandable

        if (expandableListItems.find(target => target === expandableListItem)) {
          this.MdList.expandable = expandableListItems.filter(target => target !== expandableListItem)
        }
      }
    },

    watch: {

      mdExpanded () {
        if (this.mdExpanded) {
          this.open()
        } else {
          this.close()
        }
      },

      showContent () {
        let expanded = this.showContent
        this.$emit('update:mdExpanded', expanded)
        this.$nextTick(() => this.$emit(expanded ? 'md-expanded' : 'md-collapsed'))

        if (expanded) {
          this.expandATab(this)
        }
      }
    },

    
    
  }
</script>



<style lang="scss" scoped>

  @import "../../../styles/base/Base-Variables";

  .md-list-item-expand {
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    transition: border .4s $md-transition-stand-timing;
    will-change: border;

    &.md-active {
      > .md-list-item-content > .md-list-expand-icon {
        perspective: 1000px;
        perspective-origin: 50% 50%;
        transform: rotateX(180deg);
      }

      .md-list-expand {
        opacity: 1;
        transform: translate3D(0, 0, 0);
      }
    }

    .md-list-expand {
      height: 0;
      opacity: 0;
      overflow: hidden;
      transform: translate3D(0, -24px, 0);
      transition: .4s $md-transition-stand-timing;
      transition-property: transform, opacity;
      will-change: transform, opacity;
    }

    .md-list-expand-icon {
      transition: transform .4s $md-transition-stand-timing;
      will-change: transform;
    }
  }
</style>
