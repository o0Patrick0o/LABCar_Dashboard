<template>
  <p :class="style()">
    <slot></slot>
  </p>
</template>


<script>

  export default {

    props: {
      variant: { type: String, default: '' },
      noColor: { type: Boolean, default: false },
    },
          
    methods:{

      style() {

        if (this.variant && this.variant.includes("heading") ) {
          console.log(
            'test'
          )
          if (this.variant === "heading-1" ) {
            if(this.noColor) {
              return "text-xl leading-4 tracking-[0.16px]";
            } else{
              return "text-black opacity-60 text-xl leading-4 tracking-[0.16px]"
            }
          } else if (this.variant === "heading-2") {
            
            if(this.noColor) {
              return "outline-none text-sm font-semibold leading-4 tracking-[0.16px]";
            } else{
              return "outline-none text-sm text-black opacity-60 font-semibold leading-4 tracking-[0.16px]";
            }

          } else if (this.variant === "heading-3") {

            if(this.noColor) {
              return "outline-none text-xs font-semibold leading-4 tracking-[0.16px]";
            } else{
              return "outline-none text-xs text-black opacity-50 font-semibold leading-4 tracking-[0.16px]";
            }

          } else if (this.variant === "heading-4") {

            if(this.noColor) {
              return "outline-none text-3xl leading-9 tracking-[0.16px]";
            } else{
              return "outline-none text-3xl text-black opacity-50 leading-9 tracking-[0.16px]";
            }

          }

        }

        // body texts
        else if (this.variant && this.variant.includes("body")) {

          if (this.variant === "body-1") {
            
            if(this.noColor) {
              return "outline-none text-xs font-light leading-4 tracking-[0.16px] select-none";
            } else {
              return "outline-none text-xs text-black opacity-60 font-light leading-4 tracking-[0.16px] select-none";
            }
   
          } else if (this.variant === "body-2") {

            if(this.noColor) {
              return "outline-none text-sm font-normal leading-4 tracking-[0.16px] select-none";
            } else {
              return "outline-none text-sm text-black opacity-60 font-normal leading-4 tracking-[0.16px] select-none";
            }

          } else if (this.variant === "body-3") {

            if(this.noColor) {
              return "outline-none text-sm font-light leading-5 tracking-[0.16px] select-none";
            } else {
              return "outline-none text-sm font-light text-black opacity-60 leading-5 tracking-[0.16px] select-none";
            }

          } else if (this.variant === "body-4") {

            if(this.noColor) {
              return "outline-none text-xs font-light leading-4 tracking-[0.16px] select-none";
            } else {
              return "outline-none text-xs font-light text-black opacity-60 leading-4 tracking-[0.16px] select-none";
            }

          } else if (this.variant === "body-5") {

            if(this.noColor) {
              return "outline-none text-[16px] font-light leading-4 tracking-[0.16px] select-none";
            } else {
              return "outline-none text-[16px] font-light text-black opacity-60 leading-4 tracking-[0.16px] select-none";
            }

          }
        }

        // display texts
        else if (this.variant && this.variant === "display") {
          
          if(this.noColor) {
              return "outline-none font-display text-[28px] leading-[34px] tracking-[0px] select-none";
          } else {
              return "outline-none font-display text-[28px] text-black opacity-60 leading-[34px] tracking-[0px] select-none";
          }
        }

        // buttons texts
        else if (this.variant && this.variant?.includes("button")) {
          
          if (this.variant === "button-1") {

            if(this.noColor) {
              return "text-sm font-semibold leading-4 tracking-[0.16px] select-none";
            } else {
              return "text-sm font-semibold text-white leading-4 tracking-[0.16px] select-none";
            }

          } else if (this.variant === "button-2") {
            if(this.noColor) {
              return "text-sm leading-4 tracking-[0.16px] font-semibold select-none";
            } else {
              return `text-sm leading-4 tracking-[0.16px] font-semibold opacity-60 group-hover:text-white group-hover:opacity-100 group-focus:text-white group-focus:opacity-100 select-none`;
            }

          } else if (this.variant === "button-3") {

            if(this.noColor) {
              return "text-sm leading-4 tracking-[0.16px] select-none";
            } else {
              return "text-sm leading-4 tracking-[0.16px] text-black opacity-60 select-none";
            }

          } else if (this.variant === "button-4") {
            
            if(this.noColor) {
              return "text-sm leading-4 tracking-[0.16px] select-none";
            } else {
              return "text-sm leading-4 tracking-[0.16px] text-red-400 select-none";
            }

          }

        } else {
          
          if(this.noColor) {
            return "outline-none text-xs font-light leading-4 tracking-[0.16px]";
          } else {
            return "outline-none text-xs text-black opacity-60 font-light leading-4 tracking-[0.16px]";
          }
  
        }
      },
    },
  }

</script>
