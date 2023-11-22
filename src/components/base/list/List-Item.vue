<template>
  <li :id="id" class="md-list-item">
    <div class="md-list-item-container">
      
      <!-- Default -->
      <div v-if="selected() === 'DefaultItem'" class="md-list-item-default" @click="toggleControl">
        <div class="md-list-item-content">1
          <slot />
        </div>
      </div>

      <!-- Button -->
      <button v-if="selected() === 'ButtonItem'" type="button" class="md-list-item-button">
        <div class="md-list-item-content">2
          <slot />
        </div>
      </button>

      <!-- FakeButton -->
      <div v-if="selected() === 'FakeButtonItem'" class="md-list-item-fake-button">
        <div class="md-list-item-content">3
          <slot />
        </div>
      </div>

      <!-- Link -->
      <a v-if="selected() === 'LinkItem'" class="md-list-item-link" :href="link" v-bind:[type]="typevalue">
        <div class="md-list-item-content" >4
          <slot />
        </div>
      </a>

      <!-- RouterLink -->
      <router-link v-if="selected() === 'RouterItem'" class="md-list-item-router" :to="href">
        <div class="md-list-item-content" >5
          <slot />
        </div>
      </router-link>

      <!-- Expand -->
      <div v-if="selected() === 'ExpandItem'" class="md-list-item-expand" :class="{'md-active': this.showContent}">

        <div class="md-list-item-content"  @click="toggleExpand">6
          <slot />

          <font-awesome-icon icon="fa-solid fa-angle-down" class="md-list-expand-icon"/>
        </div>

        <div class="md-list-expand" :style="expandStyles">
          <slot name="expand" />
        </div>
      </div>

    </div>
  </li>
</template>



<script>

  // Util
  import Uuid from '@/utils/Uuid';

  export default {
    
    props: {
      id: { type: String, default: () => 'Listitem-' + Uuid() },
      disabled: { type: Boolean, default: false},
      itemtype: { type: String },
      content: { type: String },
      type: { type: String },
      typevalue: { type: String },
      link: { type: String },
      href: { type: String, default: '/'},
      Expanded: Boolean,
      ExpandSingle: { default: false }
    },

    data() {
      return {
        
        typelist: ['download', 'hreflang', 'media', 'ping', 'referrerpolicy', 'rel', 'target', 'type'],

        expandStyles: {},
        showContent: false,

        expandable: [],   

      };
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
      selected() {
        console.log('startItem')
        if(this.itemtype === 'FakeButtonItem') {
          return 'FakeButtonItem'
        } else if (this.itemtype === 'ButtonItem') {
          return 'ButtonItem'
        } else if (this.itemtype === 'LinkItem') {
          return 'ListLinkItem'
        } else if (this.itemtype === 'RouterItem') {
          return 'RouterItem'
        } else if (this.itemtype === 'ExpandItem') {
          return 'ExpandItem'
        } else {
          console.log('end')
          return 'DefaultItem'
        }
        
      },

      toggleControl () {
        const control = this.$el.querySelector('.md-checkbox-container, .md-switch-container, .md-radio-container')

        if (control) {
          control.click()
        }
      },

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
          const otherExpandableListItems = this.expandable.filter(target => target !== expandedListItem)
          otherExpandableListItems.forEach(expandableListItem => expandableListItem.close())
        }
      },

      pushExpandable (expandableListItem) {
        let expandableListItems = this.expandable

        if (!expandableListItems.find(target => target === expandableListItem)) {
          this.expandable = expandableListItems.concat([expandableListItem])
        }
      },

      removeExpandable (expandableListItem) {
        let expandableListItems = this.expandable

        if (expandableListItems.find(target => target === expandableListItem)) {
          this.expandable = expandableListItems.filter(target => target !== expandableListItem)
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

  .md-list-item {
    height: auto;
    position: relative;
    z-index: 2;

    &.md-inset {
      .md-list-item-content {
        padding-left: 72px;
      }
    }

    .md-icon {
      margin: 0;
      transition-property: color, margin-right;
    }
  }

  .md-list-item-container {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    text-transform: none;

    &:not(.md-list-item-default):not([disabled]) {
      > .md-list-item-content {
        user-select: none;
        cursor: pointer;
      }
    }

    &.md-button-clean:hover {
      opacity: 1;
      text-decoration: none;
    }
  }

  .md-list-item-content {
    min-height: 48px;
    padding: 4px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: padding .4s $md-transition-stand-timing;
    will-change: padding;

    .md-list.md-dense & {
      min-height: 40px;
      font-size: 13px;

      > .md-avatar {
        margin-top: 0;
        margin-bottom: 0;

        &:not(.md-small) {
          width: 36px;
          min-width: 36px;
          height: 36px;
        }

        &:first-child {
          margin-right: 20px;
        }
      }
    }

    .md-list.md-double-line & {
      min-height: 72px;
    }

    .md-list.md-double-line.md-dense & {
      min-height: 60px;
    }

    .md-list.md-triple-line & {
      min-height: 88px;
    }

    .md-list.md-triple-line.md-dense & {
      min-height: 76px;
    }

    .md-list-action {
      margin: 0 -10px 0 0;

      &:last-of-type {
        margin: 0 -10px 0 16px;

        .md-list.md-triple-line & {
          align-self: flex-start;
        }
      }
    }

    > .md-icon:first-child {
      margin-right: 32px;
    }

    > .md-icon:last-child {
      margin-left: 16px;
    }

    > .md-checkbox,
    > .md-radio {
      margin: 0;

      &:first-child {
        margin-right: 36px;
      }
    }

    > .md-switch {
      margin: 0;

      &:first-child {
        margin-right: 22px;
      }
    }

    > .md-avatar {
      margin: 4px 0;

      &:first-child {
        margin-right: 16px;
      }
    }
  }

  .md-list-item-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    line-height: 1.25em;
    white-space: nowrap;

    .md-list.md-dense & {
      font-size: 13px;
    }

    * {
      width: 100%;
      margin: 0;
      overflow: hidden;
      line-height: 1.25em;
      text-overflow: ellipsis;
    }

    :nth-child(2),
    :nth-child(3) {
      font-size: 14px;
    }

    .md-list.md-dense & * {
      font-size: 13px;
    }
  }

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
