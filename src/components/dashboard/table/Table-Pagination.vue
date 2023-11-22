<template>
  <div class="customtable-pagination">
    <nav class="customtable-pagination-navigation">
    
      <a v-if="totalPages > 3" @click="changePage(1)" class="customtable-pagination-firstpage">
        <font-awesome-icon icon="fa-solid fa-angles-left" />
      </a>
    
      <a class="customtable-pagination-forward" @click="changePage(prevPage)">
        <font-awesome-icon icon="fa-solid fa-angle-left" />
      </a>

      <div class="inline-flex" v-for="page in pages" :key="page">
        <a @click="changePage(page)" class="customtable-paginationinfo-page" :class="{'isActive': page === getPage}">
          <p>{{ page }}</p>
        </a>
      </div>

      <div class="inline-flex" v-if="hasLast()">
        <a class="customtable-paginationinfo-page">
          <p>...</p>
        </a>
      </div> 

      <div class="inline-flex" v-if="hasLast()">
        <a @click="changePage(totalPages)" class="customtable-paginationinfo-page">
          <p>{{ totalPages }}</p>
        </a>
      </div>  
      
      <a class="customtable-pagination-reverse" @click="changePage(nextPage)">
        <font-awesome-icon icon="fa-solid fa-angle-right" />
      </a>

      <a v-if="totalPages > 3" class="customtable-pagination-lastpage" @click="changePage(totalPages)">
        <font-awesome-icon icon="fa-solid fa-angles-right" />
      </a>
    
    </nav>
  </div>
</template>
  
<script>

  import { mapState }       from 'pinia';
  import { mapActions }     from 'pinia';
  import { useTableStore }  from '@/stores/table/Store-Table.js';
  
  export default {

    data() {
      return { 
        totalPages: 0,
        currentPage: this.getPage,
      };
    },
    
    mounted() {
      this.setTotalPages();
      this.totalPages = this.getTotelPages;
    },

    methods: {

      ...mapActions(useTableStore, [
        'setPageSize',
        'incrementPage',
        'decrementPage',
        'setPage',
        'setTotalPages'
      ]),
            
      totalPagesCount () {
        if (this.getPageSize >= this.getTotalRows) {
          this.totalPages = 1;
        } else {
          this.totalPages = Math.ceil(this.getTotalRows / this.getPageSize);
        }
        
        this.setTotalPages = this.totalPages;
      },

      incrementStep() {
        this.incrementPage(1)
      },
      
      decrementStep() {
        this.decrementPage(1)
      },

      hasFirst() {
        return this.rangeStart !== 1
      },
      
      hasLast() {
        
        if(this.totalPages > 6)
        {
          return this.rangeStart < this.totalPages - 6
        }
        else if(this.totalPages > 5  ){
          return this.rangeStart < this.totalPages
        }
        else {
          return false;
        }
        
      },
      
      hasNext() {
        return this.getPage < this.totalPages
      },
      
      changePage(page) {
        if (page > 0 && page <= this.totalPages) {
          this.setPage(page)
        }
      }
    },

    computed:{  
      ...mapState(useTableStore, [
        'getRows',
        'getTotalRows',
        'getPage',
        'getPageSize',
        'getTotelPages',
      ]),

      pages() {
        var pages = [];
        for (var i = this.rangeStart; i <= this.rangeEnd; i++) {
          pages.push(i)
        }
        return pages
      },
      
      rangeStart() {
        var start = this.getPage
        if( start > this.totalPages - 6 && this.totalPages - 6 > 0)
        {
          return this.totalPages - 6;
        }
        else if (this.totalPages < this.getPage + 4) {
          return 1;
        }
        else{
          return start;
        }
      },
      
      rangeEnd() {
        var end = 0;
        if(this.getPage >= this.totalPages - 6 && this.totalPages - 6 > 0) 
        {
          end = this.getPage + 6
          return (end < this.totalPages) ? end : this.totalPages
        }
        else{
          end = this.getPage + 4
          return (end < this.totalPages) ? end : this.totalPages
        }
        
      },
      
      nextPage() {
        return this.getPage + 1
      },
      
      prevPage: function () {
        return this.getPage - 1
      },
    },

    watch: {
      getPageSize: {
        handler() {
          this.setTotalPages();
          this.totalPages = this.getTotelPages;
        },
        deep: true,
      },

      getRows: {
        handler() {
          this.setTotalPages();
          this.totalPages = this.getTotelPages;
        },
        deep: true,
      },
    },
  }
</script>



<style scoped>

  .customtable-pagination{
    color: black;
    background: white;  
  }

  .customtable-pagination-navigation{
    display: inline-flex;
    margin-left: auto;
    margin-right: 0;
  }

  .customtable-pagination-firstpage{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: 0.5rem;
    border: 1px solid lightgray; 
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem; 
    font-size: 0.8rem;
    font-weight: 600;
  }
  
  .customtable-pagination-firstpage:hover {
    border-color: blue; 
    color: blue;
  }

  .customtable-pagination-forward{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: 0.5rem;
    border: 1px solid lightgray;
    margin-left: -0.125rem; 
    font-size: 0.8rem;
    font-weight: 600; 
  }

  .customtable-pagination-forward:hover {
    border-color: blue; 
    color: blue;
  }

  .customtable-pagination-reverse{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: 0.5rem;
    border: 1px solid lightgray;
    margin-left: -0.125rem; 
    font-size: 0.8rem;
    font-weight: 600;
  }

  .customtable-pagination-reverse:hover {
    border-color: blue; 
    color: blue;
  }


  .customtable-pagination-lastpage{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: 0.5rem;
    border: 1px solid lightgray;
    margin-left: -0.125rem; 
    font-size: 0.8rem;
    font-weight: 600; 
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
 
  }

  .customtable-pagination-lastpage:hover {
    border-color: blue; 
    color: blue; 
  }
      
  .customtable-paginationinfo-page{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: 0.5rem;
    border: 1px solid lightgray;
    margin-left: -0.125rem; 
    font-size: 0.8rem;
    font-weight: 600;
  
  }

  .customtable-paginationinfo-page:hover {
    border-color: blue; 
    color: blue; 
  }

  .isActive{
    border-color: blue; 
    color: blue; 
  }

  .customtable-paginationinfo-pointplaceholder{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: 0.5rem;
    border: 1px solid lightgray;
    margin-left: -0.125rem; 
    font-size: 0.8rem;
    font-weight: 600;
    user-select: none;

  }
   
</style>