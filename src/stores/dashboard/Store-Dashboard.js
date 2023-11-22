import { defineStore } from 'pinia';
import UserPlaceholder from '@/assets/images/placeholder/user.png';

export const useDashboardStore = defineStore('dashboard',{
    state: () => ({
    
        widget:[
            {
              id: 1,
              size: 2,
              widgetheadline:'Customes',
              itemform: 'Tablebody',
              content:[
                {
                  id: 1,
                  headeritems:[
                      {
                          id: 1,
                          item: 'Name',
                      }, 
                      {
                          id: 2,
                          item: 'Email',
                      },
                      {
                          id: 3,
                          item: 'Spent',
                      },
                      {
                          id: 4,
                          item: 'Country',
                      },
                  ],
                  bodyitems: [
                      {
                            id: '0',                    
                            column: [
                                {
                                    id:'0',
                                    form: 'image',
                                    content: UserPlaceholder,
                                    text: 'John Doe',
                                },
                                {
                                    id:'1',
                                    form: 'image',
                                    content: UserPlaceholder,
                                    text: 'JohnD@Fmail.com',
                                },
                                {
                                    id:'2',
                                    form: 'image',
                                    content: UserPlaceholder,
                                    text: '$2,890.66',
                                },
                                {
                                    id:'3',
                                    form: 'image',
                                    content: UserPlaceholder,
                                    text: '🇺🇸',
                                },
                            ],
                          
                      },
                      {
                          id: '1',
                          column: [
                            {
                                id:'0',
                                form: 'image',
                                content: UserPlaceholder,
                                text: 'Jan Doe',
                            },
                            {
                                id:'1',
                                form: 'image',
                                content: UserPlaceholder,
                                text: 'JanD@Fmail.com',
                            },
                            {
                                id:'2',
                                form: 'image',
                                content: UserPlaceholder,
                                text: '$2,767.04',
                            },
                            {
                                id:'3',
                                form: 'image',
                                content: UserPlaceholder,
                                text: '🇩🇪',
                            },
                        ],
                      },
                      {
                          id: '2',
                          column: [
                            {
                                id:'0',
                                form: 'image',
                                content: UserPlaceholder,
                                text: 'Anna Doe',
                            },
                            {
                                id:'1',
                                form: 'image',
                                content: UserPlaceholder,
                                text: 'AnnaD@Fmail.com',
                            },
                            {
                                id:'2',
                                form: 'image',
                                content: UserPlaceholder,
                                text: '$2,996.00',
                            },
                            {
                                id:'3',
                                form: 'progress',
                                content: '60%',
                                text: '60%',
                            },
                        ],
                      },
                      {
                          id: '3',
                          column: [
                            {
                                id:'0',
                                form: 'image',
                                content: UserPlaceholder,
                                text: 'Alexa Doe',
                            },
                            {
                                id:'1',
                                form: 'default',
                                content: '',
                                text: 'AlexD@Fmail.com',
                            },
                            {
                                id:'2',
                                form: 'icon',
                                content: 'fa-solid fa-gavel',
                                text: '$1,220.66',
                            },
                            {
                                id:'3',
                                form: 'image',
                                content: UserPlaceholder,
                                text: '🇮🇹',
                            },
                        ],
                      },
                      {
                          id: '4',
                          column: [
                            {
                                id:'0',
                                form: 'image',
                                content: UserPlaceholder,
                                text: 'Gott',
                            },
                            {
                                id:'1',
                                form: 'image',
                                content: UserPlaceholder,
                                text: 'gott@Heaven.com',
                            },
                            {
                                id:'2',
                                form: 'dynamic',
                                content: '',
                                text: '$1,890.66',
                            },
                            {
                                id:'3',
                                form: 'image',
                                content: UserPlaceholder,
                                text: '🇬🇧',
                            },
                        ],
                      },      
                  ]
                },
              ]
            },
            {
                id: 5,
                size: 3,
                widgetheadline:'Short Info',
                itemform: 'ShortInfoVBody',
                content:[
                    {
                        id: 1,
                        stats:[
                            {
                                id:0,
                                statSubtitle: "TRAFFIC",
                                statTitle: "350,897",
                                statArrow: "up",
                                statPercent: "3.48",
                                statPercentColor: "text-emerald-500",
                                statDescripiron:"Since last month",
                                statIconName:"far fa-chart-bar",
                                statIconColor: "bg-red-500",
                            },
                            {
                                id:1,
                                statSubtitle: "NEW USERS",
                                statTitle: "2,356",
                                statArrow: "down",
                                statPercent: "3.48",
                                statPercentColor: "text-red-500",
                                statDescripiron: "Since last week",
                                statIconName: "fas fa-chart-pie",
                                statIconColor: "bg-orange-500",
                            },
                            {
                                id:2,
                                statSubtitle: "SALES",
                                statTitle: "924",
                                statArrow: "down",
                                statPercent: "1.10",
                                statPercentColor: "text-orange-500",
                                statDescripiron: "Since yesterday",
                                statIconName: "fas fa-users",
                                statIconColor: "bg-pink-500",
                            },
                            {
                                id:3,
                                statSubtitle: "PERFORMANCE",
                                statTitle: "49,65%",
                                statArrow: "up",
                                statPercent: "12",
                                statPercentColor: "text-emerald-500",
                                statDescripiron: "Since last month",
                                statIconName: "fas fa-percent",
                                statIconColor: "bg-emerald-500",
                            },
                        ]
                    },
                ]
            },
            {
                id: 6,
                size: 1,
                widgetheadline:'Benachrichtigungen',
                itemform: 'NotificationBody',
                content:[
                    {
                        id: 1,
                        notice:[
                            {
                                id:0,
                                image: UserPlaceholder,
                                title: 'Aria Smith',
                                notification: 'Ein neues Blog veröffentlicht',
                                timestamp: 'Today 5:60 pm - 12.06.2014'
                            },
                            {
                                id:1,
                                image: UserPlaceholder,
                                title: 'Aria Smith',
                                notification: 'Ein neues Blog veröffentlicht',
                                timestamp: 'Today 5:60 pm - 12.06.2014'
                            },
                            {
                                id:2,
                                image: UserPlaceholder,
                                title: 'Aria Smith',
                                notification: 'Ein neues Blog veröffentlicht',
                                timestamp: 'Today 5:60 pm - 12.06.2014'
                            },
                            {
                                id:3,
                                image: UserPlaceholder,
                                title: 'Aria Smith',
                                notification: 'Ein neues Blog veröffentlicht',
                                timestamp: 'Today 5:60 pm - 12.06.2014'
                            },
                        ]   
                    },
                ]
            },
            {
                id: 7,
                size: 1,
                widgetheadline:'Nachrichten',
                itemform: 'MessageBody',
                content:[
                    {
                        id: 1,
                        notice:[
                            {
                                id:0,
                                image: UserPlaceholder,
                                title: 'Aria Smith',
                                message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
                                timestamp: 'Posted on 5th June 2017 by Frank Williams.'
                            },
                            {
                                id:1,
                                image: UserPlaceholder,
                                title: 'Aria Smith',
                                message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
                                timestamp: 'Posted on 5th June 2017 by Ashley Wood.'
                            },
                            {
                                id:2,
                                image: UserPlaceholder,
                                message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
                                timestamp: 'Posted on 5th June 2017 by Jason Doe.'
                            },
                            {
                                id:3,
                                image: UserPlaceholder,
                                message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
                                timestamp: 'Posted on 5th June 2017 by Sam Martinez'
                            },
                        ]   
                    },
                ]
            },
            {
                id: 8,
                size: 3,
                widgetheadline:'Projekte',
                itemform: 'ProjectBody',
                content:[
                    {
                        id: 1,
                        project:[
                            {
                                id:0,
                                titel:'Project Title',
                                shortdescription:'Lorem Ipsum Dolor',
                                timestamp:'Today at 4:24 AM',
                                submission:'12:00 PM',
                                commentnummber: 20,
                                progress: 45,
                            },
                            {
                                id:1,
                                titel:'Project Title',
                                shortdescription:'Lorem Ipsum Dolor',
                                timestamp:'Today at 4:24 AM',
                                submission:'12:00 PM',
                                commentnummber: 20,
                                progress: 45,
                            },
                            {
                                id:2,
                                titel:'Project Title',
                                shortdescription:'Lorem Ipsum Dolor',
                                timestamp:'Today at 4:24 AM',
                                submission:'12:00 PM',
                                commentnummber: 20,
                                progress: 45,
                            },
                            {
                                id:3,
                                titel:'Project Title',
                                shortdescription:'Lorem Ipsum Dolor',
                                timestamp:'Today at 4:24 AM',
                                submission:'12:00 PM',
                                commentnummber: 20,
                                progress: 45,
                            },
                        ]   
                    },
                ]
            },
            {
                id: 9,
                size: 1,
                widgetheadline:'Besprechungen',
                itemform: 'MeetingBody',
                content:[
                    {
                        id: 1,
                        meeting:[
                            {
                                id:0,
                                appointment: '6:00 am',
                                date: '12.09.2023',
                                set: '6 hours ago',
                                Type: 'Meeting',
                                location : 'Besprechungsraum B-3',
                                topic: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            },
                            {
                                id:1,
                                appointment: '6:00 am',
                                date: '12.09.2023',
                                set: '7 hours ago',
                                Type: 'Meeting',
                                location : 'Besprechungsraum B-3',
                                topic: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            },
                            {
                                id:2,
                                appointment: '6:00 am',
                                date: '12.09.2023',
                                set: '8 hours ago',
                                Type: 'Meeting',
                                location : 'Besprechungsraum B-3',
                                topic: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            },
                            {
                                id:3,
                                appointment: '6:00 am',
                                date: '12.09.2023',
                                set: '9 hours ago',
                                Type: 'Meeting',
                                location : 'Besprechungsraum B-3',
                                topic: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            },
                        ]   
                    },
                ]
            },
            {
                id: 10,
                size: 1,
                widgetheadline:'Short Info',
                itemform: 'ShortInfoHBody',
                content:[
                    {
                        id: 1,
                        stats:[
                            {
                                id:0,
                                statSubtitle: "TRAFFIC",
                                statTitle: "350,897",
                                statArrow: "up",
                                statPercent: "3.48",
                                statPercentColor: "text-emerald-500",
                                statDescripiron:"Since last month",
                                statIconName:"far fa-chart-bar",
                                statIconColor: "bg-red-500",
                            },
                            {
                                id:1,
                                statSubtitle: "NEW USERS",
                                statTitle: "2,356",
                                statArrow: "down",
                                statPercent: "3.48",
                                statPercentColor: "text-red-500",
                                statDescripiron: "Since last week",
                                statIconName: "fas fa-chart-pie",
                                statIconColor: "bg-orange-500",
                            },
                            {
                                id:2,
                                statSubtitle: "SALES",
                                statTitle: "924",
                                statArrow: "down",
                                statPercent: "1.10",
                                statPercentColor: "text-orange-500",
                                statDescripiron: "Since yesterday",
                                statIconName: "fas fa-users",
                                statIconColor: "bg-pink-500",
                            },
                            {
                                id:3,
                                statSubtitle: "PERFORMANCE",
                                statTitle: "49,65%",
                                statArrow: "up",
                                statPercent: "12",
                                statPercentColor: "text-emerald-500",
                                statDescripiron: "Since last month",
                                statIconName: "fas fa-percent",
                                statIconColor: "bg-emerald-500",
                            },
                        ]
                    },
                ]
            },
            {
                id: 11,
                size: 1,
                widgetheadline:'Short Info',
                itemform: 'TodoBody',
                content:[
                    {
                        id: 1,
                        todo:[
                            {
                                id:0,
                                item: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                            },
                            {
                                id:1,
                                item: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                            },
                            {
                                id:2,
                                item: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                            },
                            {
                                id:3,
                                item: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                            },
                        ]
                    },
                ]
            },
        ],
    }),

    getters: {

        getWidget: (state) => {
            return state.widget;
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