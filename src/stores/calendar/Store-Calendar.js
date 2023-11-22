import { defineStore } from "pinia";

export const useCalendarStore = defineStore("calendarstore",{

  state: () => ({
    year: new Date().getFullYear(),

    month: new Date().getMonth(),

    day: new Date().getDate(),

    today: new Date(),

    weekdays:[
      {
        id: 1,
        day: "Montag",
        short: "Mo",
      },
      {
        id: 2,
        day: "Dinstag",
        short: "Di",
      },
      {
        id: 3,
        day: "Mittwoch",
        short: "Mi",
      },
      {
        id: 4,
        day: "Donnerstag",
        short: "Do",
      },
      {
        id: 5,
        day: "Freitag",
        short: "Fr",
      },
      {
        id: 6,
        day: "Samstag",
        short: "Sa",
      },
      {
        id: 7,
        day: "Sonntag",
        short: "So"
      }
    ],

    currentdate: new Date(),

    selecteddate: new Date(),

    events:[
      {
        id: 1,
        title: "Dummy Event Name 1",
        time: { start: "12:00", end: "14:00" },
        date: { start: "2023-09-13", end: "2023-09-13"},
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis.",
        tags: "#Projet BAMBA",
        keywords: "Projet BAMBA",
        location: "At the base",
      },
      {
        id: 2,
        title: "Dummy Event Name 2",
        time: { start: "12:00", end: "14:00" },
        date: { start: "2023-09-11", end: "2023-09-11"},
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis.",
        tags: "#fun #nightout #dance #veterantime",
        keywords: "Projet BAMBA",
        location: "At the base",
      },
      {
        id: 3,
        title: "Dummy Event Name 3",
        time: { start: "12:00", end: "14:00" },
        date: { start: "2023-02-11", end: "2023-02-11"},
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis.",
        keywords: "Projet BAMBA",
        location: "At the base",
      },
      {
        id: 4,
        title: "Dummy Event Name 4",
        time: { start: "12:00", end: "14:00" },
        date: { start: "2023-09-11", end: "2023-09-11"},
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis.",
        keywords: "Projet BAMBA",
        location: "At the base",
      },
      {
        id: 5,
        title: "Dummy Event Name 5",
        time: { start: "12:00", end: "14:00" },
        date: { start: "2023-09-11", end: "2023-09-11"},
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis.",
        keywords: "Projet BAMBA",
        location: "At the base",
      },
      {
        id: 6,
        title: "Dummy Event Name 6",
        time: { start: "12:00", end: "14:00" },
        date: { start: "2023-09-11", end: "2023-09-11"},
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis.",
        keywords: "Projet BAMBA",
        location: "At the base",
      },
      {
        id: 7,
        title: "Dummy Event Name 7",
        time: { start: "12:00", end: "14:00" },
        date: { start: "2023-09-06", end: "2023-09-06"},
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis.",
        keywords: "Projet BAMBA",
        location: "At the base",
      },
      {
        id: 8,
        title: "Dummy Event Name 8",
        time: { start: "12:00", end: "14:00" },
        date: { start: "2023-09-19", end: "2023-09-19"},
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis.",
        keywords: "Projet BAMBA",
        location: "At the base",
      },
      {
        id: 9,
        title: "Dummy Event Name 9",
        time: { start: "12:00", end: "14:00" },
        date: { start: "2023-09-19", end: "2023-09-19"},
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis.",
        keywords: "Projet BAMBA",
        location: "At the base",
      },
      {
        id: 10,
        title: "Dummy Event Name 10",
        time: { start: "12:00", end: "14:00" },
        date: { start: "2023-09-15", end: "2023-09-15"},
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis.",
        keywords: "Projet BAMBA",
        location: "At the base",
      },
      {
        id: 11,
        title: "Dummy Event Name 11",
        time: { start: "12:00", end: "14:00" },
        date: { start: "2023-09-15", end: "2023-09-15"},
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis.",
        keywords: "Projet BAMBA",
        location: "At the base",
      },
      {
        id: 12,
        title: "Dummy Event Name 12",
        time: { start: "12:00", end: "14:00" },
        date: { start: "2023-09-02", end: "2023-09-02"},
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores assumenda corporis doloremque et expedita molestias necessitatibus quam quas temporibus veritatis.",
        keywords: "Projet BAMBA",
        location: "At the base",
      },
    ],

  }),

  getters: {

    getEvents: (state) => {
      return state.events;
    },

    getToday: (state) => {
      return state.today;
    },
    
    getYear: (state) => {
       return state.year;
    },

    getMonth: (state) => {
      return state.month;
    },

    getDay: (state) => {
      return state.day;
    },

    getWeekDays: (state) => { 
      return state.weekdays;
    },

    getDayTimes: (state) => {
      return state.dayTimes;
    },

    getDaysInMonth: (state) =>  {
      return new Date(state.getYear, state.getMonth + 1, 0).getDate();
    },

    getFirstDayOfMonth: (state) => {
      return new Date(state.getYear, state.getMonth, 0).getDay();
    },

    getSelectedDate: (state) => { 
      return state.selecteddate;
    },

  },


  actions: {

    incrementYear(val) {
      this.year = this.year + val;
    },
    
    decrementYear(val) {
      this.year = this.year - val;
    },

    incrementMonth(val) {
      if (this.month == 11) 
      {
        this.incrementYear(1);
        this.month = 0;
        return;
      }

      this.month = this.month + val;
    },

    decrementMonth(val) {
      if (this.month == 0) 
      {
        this.decrementYear(1);
        this.month = 11;
        return;
      }

      this.month = this.month - val;
    },

    setMonth(val) {
      this.month = val;
    },

    setYear(val) {
      this.year = val;
    },

    resetDate() {
      this.year = new Date().getFullYear();
      this.month = new Date().getMonth();
      this.day = new Date().getDate();
    },

    setEvents(val) {
      this.events = val;
    },

    setSelectedDate(val) {
      this.selecteddate = new Date( this.year, this.month, val);
    },

    setSelectedDate2(year, month, day) {
      this.selecteddate = new Date( year, month, day);
    },

    editevent(id, title, timestart, timeend, keywords, location, description){
      const event = this.events.find((t) => t.id === id);
      event.title = title;
      event.time.start = timestart;
      event.time.end = timeend;
      event.keywords = keywords;
      event.location = location;
      event.description = description;
    },

    deleteevent(event) {
      const eventindex = this.events.indexOf(event);
      delete this.events[eventindex];
    },

  },
 
});
