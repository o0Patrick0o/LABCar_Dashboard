<template>
  <div class="wrapper-steppy" :style="cssVars">
    
    <div class="steppy">
      <div class="steppy-item" :class="{ current: tab === index + 1 }" v-for="(item, index) in tabs" :key="index">
        <div class="steppy-item-counter" @click="tab = index + 1">
          <span class="number">{{ index + 1 }}</span>
          <span class="steppy-item-title">{{ item.title }}</span>
        </div>
      </div>
    </div>

    <div class="steppy-content" v-for="index in tabs.length" :key="index">
      <div class="steppy-pane" v-if="tab === index">
        <slot :name="index"></slot>
      </div>
    </div>

    <div class="controls">
      
      <button class="btn" type="button" @click="decrementStep()" v-if="tab !== 1">
        {{ backText }}
      </button>
      
      <button class="btn btn--default-2" type="button" @click="incrementStep()" v-if="tab !== tabs.length" :disabled="!tabs[tab - 1].isValid">
        {{ nextText }}
      </button>
      
      <button class="btn btn--default-2" type="button" @click="finalize" v-else :disabled="!tabs[tab - 1].isValid || loading">
        <span v-if="loading" class="loader"></span>
        <span v-else>{{ doneText }}</span>   
      </button>

    </div>

  </div>
</template>



<script>
  import { reactive } from "vue";

  export default {
   

    props: {
      step: { type: Number, default: 1 },
      tabs: { type: Array, default: reactive([ 
        { title: "Step 1", iconSuccess: null, isValid: true, },
        { title: "Step 2", iconSuccess: null, isValid: true, },
        { title: "Step 3", iconSuccess: null, isValid: true, },
        ]),
      },

      finalize: { type: Function, default: function () { return {}; },},
      backText: { type: String, default: "Back" },
      nextText: { type: String, default: "Next" },
      doneText: { type: String, default: "Done" },
      loading: { type: Boolean, default: false },
      primaryColor1: { type: String, default: "green" },
      primaryColor2: { type: String, default: "#ffffff" },
      circleSize: { type: Number, default: 68 },

    },

    data () {
      return {
        tab: this.step,
      }
    },

    

    computed:{  

      cssVars() {
        return {
          "--primaryColor1": this.primaryColor1,
          "--primaryColor2": this.primaryColor2,
          "--circleSize": `${this.circleSize}px`,
        }
      },

      steppyProgress() {
        return (100 / (this.tabs.length - 1)) * (this.step - 1) + "%";
      },

    },

    methods: {

      incrementStep() {
        console.log(this.tab)
        this.tab = this.tab + 1;   
      },

      decrementStep() {
        this.tab = this.tab - 1;
      },

    },
    
  }
</script>



<style scoped lang="scss">

  $primary-1: var(--primaryColor1);
  $primary-2: var(--primaryColor2);
  $transition: all 500ms ease;

  .steppy {
    display: flex;
    align-items: center;
    z-index: 0;
    margin-bottom: 5px;
  }

  .steppy-item {
    display: flex;
    align-items: center;
    color: #acacac;

    &-counter {
      height: 50px;
      width: 136px;
      border-top-right-radius: 13px;
      border-top-left-radius: 13px;
 
      display: flex;
      place-items: center;
      background-color: $primary-2;
      border: 1px solid black;

      .number {
        font-size: 22px;
        margin: 0 auto;
        transition: $transition;
      }
    }

    &-title {
      position: absolute;
      text-align: center;
      font-size: 14px;
      bottom: -43px;
    }
  }

  .steppy-item.success {
    .steppy-item-counter {
      border-color: $primary-1;
      font-weight: 600;
      height: var(--circleSize);
      width: var(--circleSize);

      .icon-success {
        opacity: 1;
        transform: scale(1);
        width: calc(var(--circleSize) * 0.35);
      }

      .number {
        opacity: 0;
        transform: scale(0);
        font-size: calc(var(--circleSize) * 0.32);
      }
    }

    .steppy-item-title {
      color: $primary-1;
    }
  }

  .steppy-item.current {
    .steppy-item-counter {
      border-color: $primary-1;
      background-color: $primary-1;
      color: #fff;
      font-weight: 600;
    }

    .steppy-item-title {
      color: #818181;
    }
  }

  .steppy-pane {
    color: #333;
    text-align: center;
    background-color: #fff;
    padding: 25px 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    width: 1400px;
    margin-bottom: 10px;
  }

  .controls {
    display: flex;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 16px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    line-height: 1.5;
    transition: all 150ms;
    border-radius: 4px;
    width: fit-content;
    font-size: 0.75rem;
    color: #333;
    background-color: #f0f0f0;
    border: 1px solid #f0f0f0;

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    &--default-2 {
      background-color: $primary-1;
      border-color: $primary-1;
      color: #fff;
      margin-left: auto;
    }
  }

  .loader {
    width: 20px;
    height: 20px;
    border: 2px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>