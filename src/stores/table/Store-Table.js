import { defineStore } from 'pinia';
import UserPlaceholder from '@/assets/images/placeholder/user.png';

export const useTableStore = defineStore('tableStore',{
  state: () => ({
    // altdaten
      

    // Status
    loading: false,
    selectall: false,

    // Daten

    columntyps: [
      {id: 1,   title: 'Nummer',            type: 'TypeNumber'},
      {id: 2,   title: 'Text',              type: 'TypeString'},
      {id: 3,   title: 'E-Mail',            type: 'TypeEmail'}, 
      {id: 4,   title: 'Progressbar',       type: 'TypeProgressbar'},
      {id: 5,   title: 'Bewertung (Sterne)',type: 'TypeRating'},
      {id: 6,   title: 'Statistik (w.i.p.)',type: 'TypeChart'},
      {id: 7,   title: 'Status',            type: 'TypeStatus'},
      {id: 8,   title: 'Dynamische Zahlen', type: 'TypeDynamicnumber'},
      {id: 9,   title: 'Image',             type: 'TypeImage'},
      {id: 10,  title: 'Image + Text',      type: 'TypeImagestring'},
      {id: 11,  title: 'Image + Nummer',    type: 'TypeImagenumber'},
      {id: 12,  title: 'Icon',              type: 'TypeIcon'},
      {id: 13,  title: 'Icon + Text',       type: 'TypeIconstring'},
      {id: 14,  title: 'Icon + Nummer',     type: 'TypeIconnumber'},
      {id: 15,  title: 'CheckBox',          type: 'TypeCheckbox'},
      {id: 16,  title: 'CheckBox + Text',   type: 'TypeCheckboxstring'},
      {id: 17,  title: 'CheckBox + Nummer', type: 'TypeCheckboxnumber'},
    ],

      columns: [
        { id: 1, title: 'ID',       type: 'TypeNumber',       sortable: false, align: 'left', hasCheckbox: false },
        { id: 2, title: 'User',     type: 'TypeString',       sortable: true, align: 'left', hasCheckbox: false },
        { id: 3, title: 'Progress', type: 'TypeProgressbar',  sortable: false, align: 'left', hasCheckbox: false },
        { id: 4, title: 'Bild',     type: 'TypeImage',        sortable: true, align: 'left', hasCheckbox: false },
        { id: 5, title: 'Icon',     type: 'TypeIcon',         sortable: false, align: 'left', hasCheckbox: false },
        { id: 6, title: 'Email',    type: 'TypeEmail',        sortable: false, align: 'left', hasCheckbox: false },
        { id: 7, title: 'Date',     type: 'TypeString',       sortable: false, align: 'left', hasCheckbox: true  },
        { id: 8, title: 'Status',   type: 'TypeStatus',       sortable: false, align: 'left', hasCheckbox: false },
        { id: 9, title: 'Checkbox', type: 'TypeCheckbox',     sortable: false, align: 'left', hasCheckbox: true },
        { id: 10, title: 'Rating',  type: 'TypeRating',       sortable: false, align: 'left', hasCheckbox: false },
      ],
      
      rows:[
        {
          column1: 1,
          column2: 'Caroline Jensen',
          column3: 39,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-venus',
          column6: 'carolinejensen@zidant.com',
          column7: '2004-05-28',
          column8: {
            value1: ['Verfügbar', 'Beschäftigt', 'Nicht Stören', 'Abwesend', 'Offline'],
            value2: '',
          },
          column9: true,
          column10: 2,
        },
        {
          column1: 2,
          column2: 'Celeste Grant',
          column3: 32,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-venus',
          column6: 'celestegrant@polarax.com',
          column7: '1989-11-19',
          column8: {
            value1: ['Nicht Gestartet', 'In Planung', 'In Arbeit', 'Abgeschlossen', 'Zur Prüfung', 'Freigegeben'],
            value2: '',
          },
          column9: false,
          column10: 2,
        },
        {
          column1: 3,
          column2: 'Tillman Forbes',
          column3: 26,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-mars',
          column6: 'tillmanforbes@manglo.com',
          column7: '2016-09-05',
          column8: {
            value1: ['Verfügbar', 'Beschäftigt', 'Nicht Stören', 'Abwesend', 'Offline'],
            value2: '',
          },
          column9: false,
          column10: 2,
        },
        {
          column1: 4,
          column2: 'Daisy Whitley',
          column3: 21,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-venus',
          column6: 'daisywhitley@applideck.com',
          column7: '1987-03-23',
          column8: {
            value1: ['Nicht Gestartet', 'In Planung', 'In Arbeit', 'Abgeschlossen', 'Zur Prüfung', 'Freigegeben'],
            value2: '',
          },
          column9: true,
          column10: 2,
        },
        {
          column1: 5,
          column2: 'Weber Bowman',
          column3: 26,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-mars',
          column6: 'weberbowman@volax.com',
          column7: '1983-02-24',
          column8: {
            value1: ['Verfügbar', 'Beschäftigt', 'Nicht Stören', 'Abwesend', 'Offline'],
            value2: '',
          },
          column9: false,
          column10: 2,
        },
        {
          column1: 6,
          column2: 'Buckley Townsend',
          column3: 40,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-mars',
          column6: 'buckleytownsend@orbaxter.com',
          column7: '2011-05-29',
          column8: {
            value1: ['Nicht Gestartet', 'In Planung', 'In Arbeit', 'Abgeschlossen', 'Zur Prüfung', 'Freigegeben'],
            value2: '',
          },
          column9: true,
          column10: 2,
        },
        {
          column1: 7,
          column2: 'Latoya Bradshaw',
          column3: 24,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-venus',
          column6: 'latoyabradshaw@opportech.com',
          column7: '2010-11-23',
          column8: {
            value1: ['Verfügbar', 'Beschäftigt', 'Nicht Stören', 'Abwesend', 'Offline'],
            value2: '',
          },
          column9: true,
          column10: 2,
        },
        {
          column1: 8,
          column2: 'Kate Lindsay',
          column3: 24,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-venus',
          column6: 'katelindsay@gorganic.com',
          column7: '1987-07-02',
          column8: {
            value1: ['Nicht Gestartet', 'In Planung', 'In Arbeit', 'Abgeschlossen', 'Zur Prüfung', 'Freigegeben'],
            value2: '',
          },
          column9: true,
          column10: 2,
        },
        {
          column1: 9,
          column2: 'Marva Sandoval',
          column3: 28,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-venus',
          column6: 'marvasandoval@avit.com',
          column7: '2010-11-02',
          column8: {
            value1: ['Verfügbar', 'Beschäftigt', 'Nicht Stören', 'Abwesend', 'Offline'],
            value2: '',
          },
          column9: false,
          column10: 2,
        },
        {
          column1: 10,
          column2: 'Decker Russell',
          column3: 27,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-mars',
          column6: 'deckerrussell@quilch.com',
          column7: '1994-04-21',
          column8: {
            value1: ['Nicht Gestartet', 'In Planung', 'In Arbeit', 'Abgeschlossen', 'Zur Prüfung', 'Freigegeben'],
            value2: '',
          },
          column9: false,
          column10: 2,
        },
        {
          column1: 11,
          column2: 'Odom Mills',
          column3: 34,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-mars',
          column6: 'odommills@memora.com',
          column7: '2010-01-24',
          column8: {
            value1: ['Verfügbar', 'Beschäftigt', 'Nicht Stören', 'Abwesend', 'Offline'],
            value2: '',
          },
          column9: true,
          column10: 2,
        },
        {
          column1: 12,
          column2: 'Sellers Walters',
          column3: 28,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-mars',
          column6: 'sellerswalters@zorromop.com',
          column7: '1975-11-12',
          column8: {
            value1: ['Nicht Gestartet', 'In Planung', 'In Arbeit', 'Abgeschlossen', 'Zur Prüfung', 'Freigegeben'],
            value2: '',
          },
          column9: true,
          column10: 2,
        },
        {
          column1: 13,
          column2: 'Wendi Powers',
          column3: 31,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-venus',
          column6: 'wendipowers@orboid.com',
          column7: '1979-06-02',
          column8: {
            value1: ['Verfügbar', 'Beschäftigt', 'Nicht Stören', 'Abwesend', 'Offline'],
            value2: '',
          },
          column9: true,
          column10: 2,
        },
        {
          column1: 14,
          column2: 'Sophie Horn',
          column3: 22,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-venus',
          column6: 'sophiehorn@snorus.com',
          column7: '2018-09-20',
          column8: {
            value1: ['Verfügbar', 'Beschäftigt', 'Nicht Stören', 'Abwesend', 'Offline'],
            value2: '',
          },
          column9: true,
          column10: 2,
        },
        {
          column1: 15,
          column2: 'Levine Rodriquez',
          column3: 27,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-venus',
          column6: 'levinerodriquez@xth.com',
          column7: '1973-02-08',
          column8: {
            value1: ['Nicht Gestartet', 'In Planung', 'In Arbeit', 'Abgeschlossen', 'Zur Prüfung', 'Freigegeben'],
            value2: '',
          },
          column9: true,
          column10: 2,
        },
        {
          column1: 16,
          column2: 'Little Hatfield',
          column3: 33,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-venus',
          column6: 'littlehatfield@comtract.com',
          column7: '2012-01-03',
          column8: {
            value1: ['Verfügbar', 'Beschäftigt', 'Nicht Stören', 'Abwesend', 'Offline'],
            value2: '',
          },
          column9: false,
          column10: 2,
        },
        {
          column1: 17,
          column2: 'Larson Kelly',
          column3: 20,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-mars',
          column6: 'larsonkelly@zidant.com',
          column7: '2010-06-14',
          column8: {
            value1: ['Nicht Gestartet', 'In Planung', 'In Arbeit', 'Abgeschlossen', 'Zur Prüfung', 'Freigegeben'],
            value2: '',
          },
          column9: true,
          column10: 2,
        },
        {
          column1: 18,
          column2: 'Kendra Molina',
          column3: 31,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-venus',
          column6: 'kendramolina@sureplex.com',
          column7: '2002-07-19',
          column8: {
            value1: ['Verfügbar', 'Beschäftigt', 'Nicht Stören', 'Abwesend', 'Offline'],
            value2: '',
          },
          column9: false,
          column10: 2,
        },
        {
          column1: 19,
          column2: 'Ebony Livingston',
          column3: 33,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-venus',
          column6: 'ebonylivingston@danja.com',
          column7: '1994-10-18',
          column8: {
            value1: ['Nicht Gestartet', 'In Planung', 'In Arbeit', 'Abgeschlossen', 'Zur Prüfung', 'Freigegeben'],
            value2: '',
          },
          column9: false,
          column10: 2,
        },
        {
          column1: 20,
          column2: 'Kaufman Rush',
          column3: 39,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-mars',
          column6: 'kaufmanrush@euron.com',
          column7: '2011-07-10',
          column8: {
            value1: ['Verfügbar', 'Beschäftigt', 'Nicht Stören', 'Abwesend', 'Offline'],
            value2: '',
          },
          column9: false,
          column10: 2,
        },
        {
          column1: 21,
          column2: 'Frank Hays',
          column3: 31,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-mars',
          column6: 'frankhays@illumity.com',
          column7: '2005-06-15',
          column8: {
            value1: ['Nicht Gestartet', 'In Planung', 'In Arbeit', 'Abgeschlossen', 'Zur Prüfung', 'Freigegeben'],
            value2: '',
          },
          column9: false,
          column10: 2,
        },
        {
          column1: 22,
          column2: 'Carmella Mccarty',
          column3: 21,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-venus',
          column6: 'carmellamccarty@sybixtex.com',
          column7: '1980-03-06',
          column8: {
            value1: ['Nicht Gestartet', 'In Planung', 'In Arbeit', 'Abgeschlossen', 'Zur Prüfung', 'Freigegeben'],
            value2: '',
          },
          column9: true,
          column10: 2,
        },
        {
          column1: 23,
          column2: 'Massey Owen',
          column3: 40,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-venus',
          column6: 'masseyowen@zedalis.com',
          column7: '2012-03-01',
          column8: {
            value1: ['Nicht Gestartet', 'In Planung', 'In Arbeit', 'Abgeschlossen', 'Zur Prüfung', 'Freigegeben'],
            value2: '',
          },
          column9: false,
          column10: 2,
        },
        {
          column1: 24,
          column2: 'Lottie Lowery',
          column3: 36,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-venus',
          column6: 'lottielowery@dyno.com',
          column7: '1982-10-10',
          column8: {
            value1: ['Verfügbar', 'Beschäftigt', 'Nicht Stören', 'Abwesend', 'Offline'],
            value2: '',
          },
          column9: true,
          column10: 2,
        },
        {
          column1: 25,
          column2: 'Addie Luna',
          column3: 32,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-venus',
          column6: 'addieluna@multiflex.com',
          column7: '1988-05-01',
          column8: {
            value1: ['Nicht Gestartet', 'In Planung', 'In Arbeit', 'Abgeschlossen', 'Zur Prüfung', 'Freigegeben'],
            value2: '',
          },
          column9: true,
          column10: 2,
        },
        {
          column1: 26,
          column2: 'Booker Thomas',
          column3: 39,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-mars',
          column6: 'bookerthomas@pharmacon.com',
          column7: '1990-03-11',
          column8: {
            value1: ['Verfügbar', 'Beschäftigt', 'Nicht Stören', 'Abwesend', 'Offline'],
            value2: '',
          },
          column9: false,
          column10: 2,
        },
        {
          column1: 27,
          column2: 'Daniels Beck',
          column3: 26,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-mars',
          column6: 'danielsbeck@scenty.com',
          column7: '2017-05-09',
          column8: {
            value1: ['Nicht Gestartet', 'In Planung', 'In Arbeit', 'Abgeschlossen', 'Zur Prüfung', 'Freigegeben'],
            value2: '',
          },
          column9: true,
          column10: 2,
        },
        {
          column1: 28,
          column2: 'Mitzi Maldonado',
          column3: 27,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-venus',
          column6: 'mitzimaldonado@olucore.com',
          column7: '1994-03-11',
          column8: {
            value1: ['Verfügbar', 'Beschäftigt', 'Nicht Stören', 'Abwesend', 'Offline'],
            value2: '',
          },
          column9: false,
          column10: 2,
        },
        {
          column1: 29,
          column2: 'Vance Whitney',
          column3: 24,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-venus',
          column6: 'vancewhitney@kyagoro.com',
          column7: '2010-02-03',
          column8: {
            value1: ['Nicht Gestartet', 'In Planung', 'In Arbeit', 'Abgeschlossen', 'Zur Prüfung', 'Freigegeben'],
            value2: '',
          },
          column9: true,
          column10: 2,
        },
        {
          column1: 30,
          column2: 'Kimberley Lane',
          column3: 36,
          column4: UserPlaceholder,
          column5: 'fa-solid fa-venus',
          column6: 'kimberleylane@naxdis.com',
          column7: '1970-10-14',
          column8: {
            value1: ['Verfügbar', 'Beschäftigt', 'Nicht Stören', 'Abwesend', 'Offline'],
            value2: '',
          },
          column9: true,
          column10: 2,
        },
      ],

      // Option
      stickyHeader: false,
      stickyFirstColumn: false,
      cloneHeaderInFooter: false,
      selectRowOnClick: false,
      editmodus: false,

      // Navigation
      page: 1,
      pageSize: 10,
      pageSizeOptions: [10, 20, 30, 50, 100],
      totalpage: 1,

    }),


    getters: {
                
      // Status

      getLoading: (state) => {
        return state.loading;
      },

      getSelectAll: (state) => {
        return state.selectall;
      },
        
      // Daten

      getColumnTyps: (state) => {
        return state.columntyps;
      },

      getColumns: (state) => {
        return state.columns;
      },

      getRows: (state) => {
        return state.rows;
      },

      getTotalRows: (state) => {
        return state.rows.length;
      },

      // Option

      getStickyHeader: (state) => {
        return state.stickyHeader;
      },

      getStickyFirstColumn: (state) => {
        return state.stickyFirstColumn;
      },

        getCloneHeaderInFooter: (state)  => {
          return state.cloneHeaderInFooter;
        },

        getSelctRowOnClick: (state) => {
          return state.selectRowOnClick;
        },

        getEditModus: (state) => {
          return state.editmodus;
        },

        // Navigation

        getPage: (state) => {
          return state.page;
        },

        getPageSize: (state) => {
          return state.pageSize;
        },

        getPageSizeOptions: (state) => {
          return state.pageSizeOptions;
        },

        getTotelPages: (state) => {
          return state.totalpage;
        }

    },


    actions: {

      setColumn(title, type, sortable, checkbox, alignment) {
        
        this.columns.push({id: this.columns.length + 1, title: title, type: type, sortable: sortable, align: alignment, hasCheckbox: checkbox})

        let i = 'column'
        let n = this.columns.length
        let temp = i+n;   

        this.rows.map(option => {
          const obj1 = { [temp]: undefined };
          console.log(obj1);
      
          return Object.assign(option, obj1);
        });

        console.log(this.rows);

      },

      setRow() {

        let temp = [{}];
        let c = 'column'
        let myObject = {};
        let id = this.rows.length + 1;

        for( let i = 0 ; i < this.columns.length; i++)
        {
          let test = c+(i+1);  

          temp.map(option => {
            
            if(test == 'column1') {
              const obj1 = { [test]: id };
              return Object.assign(option, obj1);
            }
            else {
              const obj1 = { [test]: undefined };
              return Object.assign(option, obj1);
            }

          });
        }

        myObject = temp[0];
     
        this.rows.push(myObject)
        console.log(this.rows);
      },

      setSelectAll(value) {
        this.selectall = value;
      },

      setPageSize(value) {
        this.pageSize = value;
      },

      setPage(value) {
        this.page = value;
      },

      setEditModus() {
        this.editmodus = !this.editmodus;
      },

      setTotalPages() {
       
        if (this.pageSize >= this.rows.length) {
          this.totalpage = 1;
        } else {
          this.totalpage = Math.ceil(this.rows.length / this.pageSize);
        }
      },

      incrementPage(value) {
        let lastpage = this.rows.length / this.pageSize;
        if(this.page <= lastpage)
        {
          this.page = this.page + value;
        }
      },
      
      decrementPage(value) {
        if(this.page > 1)
        {
          this.page = this.page - value;
        }
      },

      jumpFirstPage() {
        this.page = 1;
      },

      jumpLastPage() {
        let lastpage = this.rows.length / this.pageSize;
        this.page = lastpage;
      },
      
    },
});
