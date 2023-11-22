<template>
    <div class="bh-filter-menu bh-absolute bh-z-[1] bh-bg-white bh-shadow-md bh-rounded-md bh-top-full bh-right-0 bh-w-32 bh-mt-1">
        <div class="bh-text-[13px] bh-font-normal bh-rounded bh-overflow-hidden" @click.stop="close">
            <button type="button" :class="{ active: column.condition === '' }" @click="select('')">No filter</button>
            <template v-if="column.type === 'string'">
                <button type="button" :class="{ active: column.condition === 'contain' }" @click="select('contain')">Contain</button>
                <button type="button" :class="{ active: column.condition === 'not_contain' }" @click="select('not_contain')">Not contain</button>
                <button type="button" :class="{ active: column.condition === 'equal' }" @click="select('equal')">Equal</button>
                <button type="button" :class="{ active: column.condition === 'not_equal' }" @click="select('not_equal')">Not equal</button>
                <button type="button" :class="{ active: column.condition === 'start_with' }" @click="select('start_with')">Starts with</button>
                <button type="button" :class="{ active: column.condition === 'end_with' }" @click="select('end_with')">Ends with</button>
            </template>
            <template v-else-if="column.type === 'number'">
                <button type="button" :class="{ active: column.condition === 'equal' }" @click="select('equal')">Equal</button>
                <button type="button" :class="{ active: column.condition === 'not_equal' }" @click="select('not_equal')">Not Equal</button>
                <button type="button" :class="{ active: column.condition === 'greater_than' }" @click="select('greater_than')">Greater than</button>
                <button type="button" :class="{ active: column.condition === 'greater_than_equal' }" @click="select('greater_than_equal')">Greater than or equal</button>
                <button type="button" :class="{ active: column.condition === 'less_than' }" @click="select('less_than')">Less than</button>
                <button type="button" :class="{ active: column.condition === 'less_than_equal' }" @click="select('less_than_equal')">Less than or equal</button>
            </template>
            <template v-else-if="column.type === 'date'">
                <button type="button" :class="{ active: column.condition === 'equal' }" @click="select('equal')">Equal</button>
                <button type="button" :class="{ active: column.condition === 'not_equal' }" @click="select('not_equal')">Not equal</button>
                <button type="button" :class="{ active: column.condition === 'greater_than' }" @click="select('greater_than')">Greater than</button>
                <button type="button" :class="{ active: column.condition === 'less_than' }" @click="select('less_than')">Less than</button>
            </template>

            <button type="button" :class="{ active: column.condition === 'is_null' }" @click="select('is_null')">Is null</button>
            <button type="button" :class="{ active: column.condition === 'is_not_null' }" @click="select('is_not_null')">Not null</button>
        </div>
    </div>
</template>


<script>

    export default {

        props: ['column'],

        data() {
            return { 
                selectedAll: null,
            };
        },

        mounted() {
            document.addEventListener('click', close);
        },

        beforeUnmount() {
            document.removeEventListener('click', close);
        },

        methods: {
            
            close() {
                this.$emit('close');
            },

            select(condition) {
                this.column.condition = condition;
                
                if (condition === '') {
                    this.column.value = '';
                }
                
                this.$emit('filterChange', column);
            },
        },

    }

</script>




<style scoped>

.alt-pagination .bh-pagination .bh-page-item {
    min-width:32px
}

.alt-pagination .bh-pagination .bh-page-item,.next-prev-pagination .bh-pagination .bh-page-item {
    border-radius:.25rem!important;
    width:-moz-max-content!important;
    width:max-content!important
}

.next-prev-pagination .bh-pagination .bh-page-item{
    min-width:100px
}

.next-prev-pagination .bh-pagination > div:first-child {
    flex-direction:column;
    font-weight:600
} 

.next-prev-pagination .bh-pagination .bh-pagination-number{
    gap:.75rem;
    margin-left:auto;
    margin-right:auto
}

.advanced-table .progress-bar{
    background-color:#ebedf2;
    display:flex;
    min-width:120px;
    width:80%
}

.advanced-table .progress-bar,.advanced-table .progress-line{
    border-radius:9999px;
    height:8px
}

.bh-datatable .bh-table-responsive{
    min-height:380px
}

pre code.hljs{
    display:block;
    overflow-x:auto;
    padding:1em
}
code.hljs{padding:3px 5px}.hljs{background:#23241f}.hljs,.hljs-subst,.hljs-tag{color:#f8f8f2}.hljs-emphasis,.hljs-strong{color:#a8a8a2}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ae81ff}.hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#a6e22e}.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}.hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#f92672}.hljs-attribute,.hljs-symbol{color:#66d9ef}.hljs-class .hljs-title,.hljs-params,.hljs-title.class_{color:#f8f8f2}.hljs-addition,.hljs-built_in,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#e6db74}.hljs-comment,.hljs-deletion,.hljs-meta{color:#75715e}pre.hljs{border-radius:.375rem;overflow-x:auto;padding:1.5rem}.table-responsive[data-v-d972295d]{border-radius:.5rem;border-width:1px;overflow:auto}.table-responsive[data-v-d972295d],table[data-v-d972295d]{border-collapse:collapse}table[data-v-d972295d]{width:100%}table[data-v-d972295d]>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;--tw-divide-opacity:1;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-color:rgb(229 231 235/var(--tw-divide-opacity));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}table tbody td[data-v-d972295d],table thead th[data-v-d972295d]{padding:.625rem 1rem;text-align:left}table th[data-v-d972295d]{font-weight:600}table tbody tr[data-v-d972295d]>:not([hidden])~:not([hidden]),table thead tr[data-v-d972295d]>:not([hidden])~:not([hidden]){--tw-divide-x-reverse:0;--tw-divide-opacity:1;border-color:rgb(229 231 235/var(--tw-divide-opacity));border-left-width:calc(1px*(1 - var(--tw-divide-x-reverse)));border-right-width:calc(1px*var(--tw-divide-x-reverse))}table tbody[data-v-d972295d]>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;--tw-divide-opacity:1;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-color:rgb(229 231 235/var(--tw-divide-opacity));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}table.bh-table-striped tr[data-v-d972295d]:nth-child(2n){--tw-bg-opacity:1;background-color:rgb(244 244 244/var(--tw-bg-opacity))}

.bh-datatable .bh-table-responsive{min-height:380px}

.bh-datatable .bh-table-responsive{min-height:380px}

.sticky-table .bh-table-responsive table thead tr th{white-space:nowrap}@media (min-width:1024px){.sticky-table .bh-table-responsive table tbody tr td{white-space:nowrap}}

*,::backdrop,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }*,:after,:before{border:0 solid #0000;box-sizing:border-box}.bh-table-responsive{border-radius:.25rem;overflow:auto;position:relative;width:100%}.bh-table-responsive table{border-collapse:collapse!important;max-width:100%;width:100%}.bh-table-responsive table tfoot tr,.bh-table-responsive table thead tr{--tw-bg-opacity:1;background-color:rgb(246 247 250/var(--tw-bg-opacity))}.bh-table-responsive table tbody tr td,.bh-table-responsive table tfoot tr th,.bh-table-responsive table thead tr th{padding:.75rem 1rem;text-align:left}.bh-table-responsive table tfoot tr th,.bh-table-responsive table thead tr th{font-weight:700;vertical-align:top}.bh-table-responsive table tbody tr{--tw-border-opacity:1;border-bottom-width:1px;border-color:rgb(246 247 250/var(--tw-border-opacity));border-style:solid}.bh-table-responsive table.bh-table-striped tbody tr:nth-child(odd){background-color:#e0e6ed26}.bh-table-responsive table.bh-table-hover tbody tr:hover{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.bh-table-responsive table.bh-table-compact tbody tr td,.bh-table-responsive table.bh-table-compact thead tr th{padding:.5rem .75rem}.bh-table-responsive table.bh-table-bordered tbody tr td,.bh-table-responsive table.bh-table-bordered thead tr th{--tw-border-opacity:1;border-color:rgb(246 247 250/var(--tw-border-opacity));border-style:solid;border-width:1px}.bh-pagination .bh-page-item{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));border:1px solid #0e17264d;border-radius:9999px;color:rgb(75 85 99/var(--tw-text-opacity));cursor:pointer;display:grid;height:2rem;outline-width:0;padding:.375rem .625rem;place-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:2rem}.bh-pagination .bh-page-item:hover{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(67 97 238/var(--tw-bg-opacity));border-color:rgb(67 97 238/var(--tw-border-opacity));color:rgb(255 255 255/var(--tw-text-opacity));transition-duration:.2s}.bh-pagination .bh-page-item{-webkit-appearance:button;background-image:none}.bh-pagination .bh-page-item.disabled:not(.bh-active){opacity:.5;pointer-events:none}.bh-pagination .bh-page-item.bh-active{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(67 97 238/var(--tw-bg-opacity));border-color:rgb(67 97 238/var(--tw-border-opacity));color:rgb(255 255 255/var(--tw-text-opacity))}.bh-table-responsive button,.bh-table-responsive input{outline:2px solid #0000;outline-offset:2px}.bh-pagination-info .bh-pagesize{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-color:rgb(224 230 237/var(--tw-border-opacity));border-radius:.25rem;border-style:solid;border-width:1px;box-sizing:border-box;color:rgb(14 23 38/var(--tw-text-opacity));font-weight:400;outline-width:0;padding:.375rem .5rem}.bh-pagination-info .bh-pagesize:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);--tw-ring-color:#e0e6ed66;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.bh-table-responsive table th .bh-filter{align-items:center;display:flex;height:30px;margin-top:.125rem}.bh-table-responsive table th .bh-filter,.bh-table-responsive table th .bh-filter>.bh-form-control{width:100%}.bh-table-responsive table th .bh-filter>.bh-form-control{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-bottom-left-radius:.25rem;border-color:rgb(224 230 237/var(--tw-border-opacity));border-style:solid;border-top-left-radius:.25rem;border-width:1px;box-sizing:border-box;color:rgb(14 23 38/var(--tw-text-opacity));font-size:.875rem;font-weight:400;height:100%;line-height:1.25rem;min-width:60px;outline-width:0;padding:.25rem .75rem}.bh-table-responsive table th .bh-filter>.bh-form-control:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);--tw-ring-color:#e0e6ed66;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.bh-table-responsive table th .bh-filter>select{border-radius:.25rem}.bh-table-responsive table th .bh-filter>button{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:rgb(224 230 237/var(--tw-bg-opacity));border-bottom-right-radius:.25rem;border-color:rgb(224 230 237/var(--tw-border-opacity));border-style:solid;border-top-right-radius:.25rem;border-width:1px;color:#0e1726b3;cursor:pointer;display:grid;flex-shrink:0;height:30px;place-content:center;width:30px}.bh-table-responsive table th .bh-filter>button:hover{color:#0e1726e6}.bh-table-responsive table th .bh-filter>button{-webkit-appearance:button;background-image:none}.bh-filter-menu button{background-color:rgb(255 255 255/var(--tw-bg-opacity));border:1px solid #0000;cursor:pointer;display:flex;padding:.375rem 1rem;text-align:left;width:100%}.bh-filter-menu button,.bh-filter-menu button:hover{--tw-bg-opacity:1}.bh-filter-menu button:hover{background-color:rgb(243 244 246/var(--tw-bg-opacity));font-weight:700}.bh-filter-menu button{-webkit-appearance:button;background-image:none}.bh-filter-menu button.active{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity));font-weight:700}.bh-table-responsive input[type=checkbox]{opacity:0;position:absolute}.bh-table-responsive input[type=checkbox],.bh-table-responsive input[type=checkbox]+div{height:1.25rem;width:1.25rem}.bh-table-responsive input[type=checkbox]+div{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-color:rgb(224 230 237/var(--tw-border-opacity));border-radius:.25rem;border-style:solid;border-width:1px;display:grid;place-content:center}.bh-table-responsive input[type=checkbox]+div svg{fill:currentColor;--tw-text-opacity:1;color:rgb(67 97 238/var(--tw-text-opacity));display:none;height:.75rem;pointer-events:none;width:.75rem}.bh-table-responsive input[type=checkbox]:checked+div,.bh-table-responsive input[type=checkbox]:indeterminate+div{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:rgb(67 97 238/var(--tw-bg-opacity));border-color:rgb(67 97 238/var(--tw-border-opacity))}.bh-table-responsive input[type=checkbox]:checked+div svg.check,.bh-table-responsive input[type=checkbox]:indeterminate+div svg.intermediate{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity));display:flex}.bh-pointer-events-none{pointer-events:none}.bh-absolute{position:absolute}.bh-relative{position:relative}.bh-sticky{position:sticky}.bh-inset-0{left:0;right:0;top:0}.bh-bottom-0,.bh-inset-0{bottom:0}.bh-left-0{left:0}.bh-left-\[52px\]{left:52px}.bh-right-0{right:0}.bh-top-0{top:0}.bh-top-full{top:100%}.bh-z-10{z-index:10}.bh-z-\[1\]{z-index:1}.bh-mb-2{margin-bottom:.5rem}.bh-ml-3{margin-left:.75rem}.bh-mr-2{margin-right:.5rem}.bh-mt-1{margin-top:.25rem}.bh-flex{display:flex}.bh-inline-flex{display:inline-flex}.bh-grid{display:grid}.bh-h-11{height:2.75rem}.bh-h-8{height:2rem}.bh-min-h-\[300px\]{min-height:300px}.bh-w-32{width:8rem}.bh-w-4{width:1rem}.bh-w-px{width:1px}.bh-cursor-pointer{cursor:pointer}.bh-select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.bh-flex-col{flex-direction:column}.bh-flex-wrap{flex-wrap:wrap}.bh-place-content-center{place-content:center}.bh-items-center{align-items:center}.bh-gap-4{gap:1rem}.bh-space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.25rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.25rem*var(--tw-space-x-reverse))}.bh-overflow-hidden{overflow:hidden}.bh-rounded{border-radius:.25rem}.bh-rounded-md{border-radius:.375rem}.bh-border{border-width:1px}.bh-border-solid{border-style:solid}.\!bh-border-transparent{border-color:#0000!important}.bh-border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity))}.\!bh-bg-white{--tw-bg-opacity:1!important;background-color:rgb(255 255 255/var(--tw-bg-opacity))!important}.bh-bg-blue-light{--tw-bg-opacity:1;background-color:rgb(246 247 250/var(--tw-bg-opacity))}.bh-bg-blue-light\/50{background-color:#f6f7fa80}.bh-bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.\!bh-p-0{padding:0!important}.bh-p-10{padding:2.5rem}.bh-p-2{padding:.5rem}.bh-py-5{padding-bottom:1.25rem;padding-top:1.25rem}.bh-text-\[13px\]{font-size:13px}.bh-text-sm{font-size:.875rem;line-height:1.25rem}.bh-font-normal{font-weight:400}.\!bh-text-primary{--tw-text-opacity:1!important;color:rgb(67 97 238/var(--tw-text-opacity))!important}.bh-text-black{--tw-text-opacity:1;color:rgb(14 23 38/var(--tw-text-opacity))}.bh-text-black\/20{color:#0e172633}.bh-text-primary{--tw-text-opacity:1;color:rgb(67 97 238/var(--tw-text-opacity))}.bh-antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bh-shadow-md{--tw-shadow:0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.bh-outline-0{outline-width:0}.bh-filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.bh-skeleton-box{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity));overflow:hidden;position:relative;width:100%}.bh-skeleton-box:after{--tw-translate-x:-100%;--tw-content:"";animation:bhshimmer 2s infinite;background-image:linear-gradient(90deg,#0000,rgba(0,0,0,.025) 20%,#0000000d 50%,#0000);bottom:0;content:var(--tw-content);left:0;position:absolute;right:0;top:0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes bhshimmer{to{transform:translate(100%)}}.focus\:bh-border-gray-200:focus{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity))}@media (min-width:640px){.sm\:bh-ml-auto{margin-left:auto}.sm\:bh-flex-row{flex-direction:row}}

</style>
