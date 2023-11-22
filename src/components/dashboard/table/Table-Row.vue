<template>
  <tr v-for="(row, index) in displayedItems(getRows)" :key="index">
    <component v-for="col in getColumns" :key="col.id" :is="col.type" :row="row" :columnid="col.id" /> 
  </tr> 
</template>
  
<script>

  import TypeCheckbox       from '@/components/dashboard/table/columntypes/Columntype-Checkbox.vue';
  import TypeCheckboxNumber from '@/components/dashboard/table/columntypes/Columntype-CheckboxNumber.vue';
  import TypeCheckboxString from '@/components/dashboard/table/columntypes/Columntype-CheckboxString.vue';
  import TypeDynamicNumber  from '@/components/dashboard/table/columntypes/Columntype-DynamicNumber.vue';
  import TypeEmail          from '@/components/dashboard/table/columntypes/Columntype-Email.vue';
  import TypeIcon           from '@/components/dashboard/table/columntypes/Columntype-Icon.vue';
  import TypeIconNumber     from '@/components/dashboard/table/columntypes/Columntype-IconNumber.vue';
  import TypeIconString     from '@/components/dashboard/table/columntypes/Columntype-IconString.vue';
  import TypeImage          from '@/components/dashboard/table/columntypes/Columntype-Image.vue';
  import TypeImageNumber    from '@/components/dashboard/table/columntypes/Columntype-ImageNumber.vue';
  import TypeImageString    from '@/components/dashboard/table/columntypes/Columntype-ImageString.vue';
  import TypeNumber         from '@/components/dashboard/table/columntypes/Columntype-Number.vue';
  import TypeProgressbar    from '@/components/dashboard/table/columntypes/Columntype-Progressbar.vue';
  import TypeRating         from '@/components/dashboard/table/columntypes/Columntype-Rating.vue';
  import TypeStatus         from '@/components/dashboard/table/columntypes/Columntype-Status.vue';
  import TypeString         from '@/components/dashboard/table/columntypes/Columntype-String.vue';

  import { mapState }       from 'pinia';
  import { mapActions }     from 'pinia';
  import { useTableStore }  from '@/stores/table/Store-Table.js';
  
  export default {
    
    components: {
      TypeCheckbox,
      TypeCheckboxNumber,
      TypeCheckboxString,
      TypeDynamicNumber,
      TypeEmail,
      TypeIcon,
      TypeIconNumber,
      TypeIconString,
      TypeImage,
      TypeImageNumber,
      TypeImageString,
      TypeNumber,
      TypeProgressbar,
      TypeRating,
      TypeStatus,
      TypeString,
    },  
    
    data() {
      return {
        selectAll: false,
      };
    },
    
    mounted() {},

    methods: {

      ...mapActions(useTableStore, [
        'setPageSize',
      ]),
            
      displayedItems(value) {
        const startIndex = (this.getPage - 1) * this.getPageSize;
        const endIndex = startIndex + this.getPageSize;
                
        return value.slice(startIndex, endIndex);
      },

    },

    computed:{  

      ...mapState(useTableStore, [
        'getLoading',
        'getColumns',
        'getRows',
        'getTotalRows',
        'getStickyHeader',
        'getStickyFirstColumn',
        'getCloneHeaderInFooter',
        'getSelctRowOnClick',
        'getPage',
        'getPageSize',
        'getPageSizeOptions'
      ]),
      
    },

        watch: {
            palceholder: {
                handler() {
            
                },
                deep: true,
            },
        },
    }
</script>

<style scoped>

	.customtable-table-loader{
		width: 48px;
		height: 48px;
		border: 5px solid #FFF;
		border-bottom-color: #FF3D00;
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