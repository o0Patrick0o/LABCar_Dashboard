import { defineStore } from 'pinia';


export const useSidebarStore = defineStore('sidebar',{
    state: () => ({
    
        sidebaritem:[
            {
              id: 1,
              type:'ItemCollapsible',
              category:'side',
              icon:'fa-solid fa-chart-pie',
              linkname:'Dashboard',
              badge: 0,
              link: '#',
              childs:[
                {
                  id:1,
                  link:'/dashboard',
                  itemname:'Dashboard'
                },
                {
                  id:2,
                  link:'/dashboard/statistik1',
                  itemname:'Statistik 1' 
                },
                {
                  id:3,
                  link:'/dashboard/statistik2',
                  itemname:'Statistik 2' 
                },
                {
                  id:4,
                  link:'/dashboard/tabelle',
                  itemname:'Tabelle' 
                }
              ]
            },
            {
              id: 2,
              type:'ItemCollapsible',
              category:'side',
              icon:'fa-solid fa-people-group',
              linkname:'Verwaltung',
              badge: 0,
              link: '#',
              childs:[
                {
                  id:1,
                  link:'/verwaltung/personal',
                  itemname:'Personal'
                },
                {
                  id:2,
                  link:'/verwaltung/touren',
                  itemname:'Touren' 
                },
                {
                  id:3,
                  link:'/verwaltung/jobs',
                  itemname:'Jobs' 
                },
                {
                  id:4,
                  link:'/verwaltung/meeting',
                  itemname:'Meeting' 
                },
              ]
            },
            {
              id: 3,
              type:'ItemCollapsible',
              category:'side',
              icon:'fa-solid fa-money-bills',
              linkname:'Finanzen',
              badge: 0,
              link: '#',
              childs:[
                {
                  id:1,
                  link:'/finanzen/autos',
                  itemname:'Autos'
                },
                {
                  id:2,
                  link:'/finanzen/beschaedingungen',
                  itemname:'Beschädingungen' 
                },
                {
                  id:3,
                  link:'/finanzen/ausgaben',
                  itemname:'Ausgaben' 
                }
              ]
            },
            {
              id: 4,
              type:'ItemSingel',
              category:'side',
              icon:'fa-solid fa-list-check',
              linkname:'ToDo',
              badge: 0,
              link:'/todo',
            },
            {
              id: 5,
              type:'ItemSingel',
              category:'side',
              icon:'fa-solid fa-message',
              linkname:'Messages',
              badge: 4,
              link:'/messenger',
              
            },
            {
              id: 6,
              type:'ItemSingel',
              category:'side',
              icon:'fa-solid fa-calendar-days',
              linkname:'Calendar',
              badge: 0,
              link:'/calendar',
            },
            {
              id: 7,
              type:'ItemSingel',
              category:'side',
              icon:'fa-solid fa-bell',
              linkname:'Benachrichtigung',
              badge: 10,
              link:'/benachrichtigung',
            },
            {
              id: 8,
              type:'ItemCollapsible',
              category:'side',
              icon:'fa-solid fa-microchip',
              linkname:'Utility',
              badge: 0,
              link: '#',
              childs:[
                {
                  id:1,
                  link:'/utility/tourproblememelden',
                  itemname:'Tour Probleme Melden'
                },
                {
                  id:2,
                  link:'/utility/fahrzeugbeschädigungenmelden',
                  itemname:'Fahrzeug Beschädigungen Melden' 
                },
                {
                  id:3,
                  link:'/settings/feedback',
                  itemname:'Gib Feedback' 
                }            
              ]
            },
        ],
          
        sidebaritem2:[
          {
            id: 1,
            type:'ItemCollapsible',
            category:'more',
            icon:'fa-solid fa-user-lock',
            linkname:'Authentication',
            childs:[
              {
                id:1,
                link:'/',
                itemname:'Sign in'
              },
              {
                id:3,
                link:'/reset-password',
                itemname:'Reset Password' 
              }            
            ]
          }, 
          {
            id: 2,
            type:'ItemSingel',
            category:'more',
            icon:'fa-solid fa-flask-vial',
            linkname:'Test',
            badge: 0,
            link:'/test',
          },
        ]
    }),



    getters: {

        getSidebarItem: (state) => {
            return state.sidebaritem;
        },

        getSidebarItem2: (state) => {
            return state.sidebaritem2;
        },
        
    },



    actions: {
    
        setDCNumber(value){
            this.dcnumber = value;
        }, 

        setTerminalID(value){
            this.selectedterminalid = value;
        },

        setComponentID(value){
            this.componentid = value;
        },
    }

})