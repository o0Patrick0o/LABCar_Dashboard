<template>
  <div class="base-dp-Component shadow-xl border border-gray-300 rounded" :class="{'base-dp-WithInput': hasInputElement}">
    <div>
      <input v-if="hasInputElement" type="text" :value="inputValue" @click="editable && open()" :disabled="!editable" class="base-dp-input">
      <button v-if="editable && hasInputElement && inputValue" class="base-dp-ClearInput" type="button" @click="clear" />
    </div>

    <transition name="base-dp--toggle-calendar">
      <div v-if="opened" class="base-dp-OuterWrap" ref="outerWrap" @click="closeViaOverlay" :class="[positionClass, {'base-dp-Floating': hasInputElement}]">
        <div class="base-dp-InnerWrap">
            
          <header class="base-dp-Header">
              
            <button class="base-dp-Arrow base-dp-ArrowPrev" type="button" @click="incrementMonth(-1)" ></button>
              
            <button class="base-dp-Arrow base-dp-ArrowNext" type="button" @click="incrementMonth(1)" />
              
            <div class="base-dp-PeriodControls">
              <div class="base-dp-PeriodControl">
                  
                <button :class="directionClass" :key="currentPeriod.month" type="button">
                  {{ months[currentPeriod.month] }}
                </button>
                  
                <select v-model="currentPeriod.month">
                  <option v-for="(month, index) in months" :value="index" :key="month">
                    {{ month }}
                  </option>
                </select>
              </div>
                
              <div class="base-dp-PeriodControl">
                <button :class="directionClass" :key="currentPeriod.year" type="button">
                  {{ currentPeriod.year }}
                </button>
                  
                <select v-model="currentPeriod.year">
                  <option v-for="year in yearRange" :value="year" :key="year">
                    {{ year }}
                  </option>
                </select>
              </div>

            </div>

          </header>
            
          <table class="base-dp-Table">
            <thead>
              <tr>
                <th class="base-dp-HeadCell" v-for="(weekday, weekdayIndex) in weekdaysSorted" :key="weekdayIndex">
                  <span class="base-dp-HeadCellContent">{{weekday}}</span>
                </th>
              </tr>
            </thead>
              
            <tbody :key="currentPeriod.year + '-' + currentPeriod.month" :class="directionClass">
              <tr class="base-dp-Row" v-for="(week, weekIndex) in currentPeriodDates" :key="weekIndex">
                <td class="base-dp-Cell" v-for="item in week" :class="{ selectable: editable && !item.disabled, selected: item.selected, disabled: item.disabled, today: item.today, outOfRange: item.outOfRange }"
                  :data-id="item.dateKey" :key="item.dateKey" @click="editable && selectDateItem(item)">

                    <div class="base-dp-CellContent">
                      {{ item.date.getDate() }}
                    </div>
      
                  </td>
                </tr>
              </tbody>
                
            </table>
            
          </div>
        </div>
      </transition>
    </div>
</template>



<script>

  export default {
    props: {
      value: { type: String, default: '' },
      format: { type: String, default: 'YYYY-MM-DD' },
      displayFormat: { type: String },
      editable: { type: Boolean, default: true },
      hasInputElement: { type: Boolean, default: true },
      inputAttributes: { type: Object },
      selectableYearRange: { type: [Number, Object, Function], default: 40 },
      startPeriod: { type: Object },
      parseDate: { type: Function },
      formatDate: { type: Function },
      isDateDisabled: { type: Function, default: () => false },
      mobileBreakpointWidth: { type: Number, default: 500 },
      weekdays: { type: Array, default: () => ([ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]) },
      months: { type: Array, default: () => ([ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]) },
      startWeekOnSunday: { type: Boolean, default: false}
    },

    data() {
      return {
        inputValue: this.valueToInputFormat(this.value),
        direction: undefined,
        positionClass: undefined,
        opened: !this.hasInputElement,
        currentPeriod: this.startPeriod || this.getPeriodFromValue( this.value, this.format )
      };
    },

    beforeUnmount() {
      this.removeCloseEvents();
      this.teardownPosition();
    },
    
    computed: {
      
      valueDate() {
        const value = this.value;
        const format = this.format;
        
        return value ? this.parseDateString(value, format) : undefined;
      },
      
      isReadOnly() {
        return !this.editable || (this.inputAttributes && this.inputAttributes.readonly);
      },
      
      currentPeriodDates() {
        const {year, month} = this.currentPeriod;
        const days = [];
        const date = new Date(year, month, 1);
        const today = new Date();
        const firstDayIndex = date.getDay();
        const prependDaysCount = this.startWeekOnSunday ? firstDayIndex : firstDayIndex === 0 ? 6 : firstDayIndex - 1;
        if (prependDaysCount) {
          for (let i = prependDaysCount; i > 0; i--) {
            const prevDate = new Date(date);
            prevDate.setDate(-(i - 1));
            days.push({outOfRange: true, date: prevDate});
          }
        }
        
        while (date.getMonth() === month) {
          days.push({date: new Date(date)});
          date.setDate(date.getDate() + 1);
        }
        
        const daysLeft = days.length % 7;
        if (daysLeft > 0) {
          const total = 7 - daysLeft;
          for (let i = 1; i <= total; i++) {
            const nextDate = new Date(date);
            nextDate.setDate(i);
            days.push({outOfRange: true, date: nextDate});
          }
        }
        
        days.forEach(day => {
          day.disabled = this.isDateDisabled(day.date);
          day.today = this.areSameDates(day.date, today);
          day.dateKey = [ day.date.getFullYear(), day.date.getMonth() + 1, day.date.getDate() ].join('-');
          day.selected = this.valueDate ? this.areSameDates(day.date, this.valueDate) : false;
        });
        
        return this.chunkArray(days, 7);
      },
      
      yearRange() {
        const currentYear = this.currentPeriod.year;
        const userRange = this.selectableYearRange;
        const userRangeType = typeof userRange;
        let yearsRange = [];
        
        if (userRangeType === 'number') {
          
          yearsRange = this.range( currentYear - userRange, currentYear + userRange );
        
        } else if (userRangeType === 'object') { 
          
          yearsRange = this.range( userRange.from, userRange.to );
        
        } else if (userRangeType === 'function') {
          
          yearsRange = userRange(this);
        
        }
        
        if (yearsRange.indexOf(currentYear) < 0) {
          
          yearsRange.push(currentYear);
          yearsRange = yearsRange.sort();
        
        }
        
        return yearsRange;
      },
      
      directionClass() {
        return this.direction ? `base-dp-${this.direction}Direction` : undefined;
      },
      
      weekdaysSorted() {
        if (this.startWeekOnSunday) {
          const weekdays = this.weekdays.slice();
          weekdays.unshift(weekdays.pop());
          return weekdays;
        } else {
          return this.weekdays;
        }
      }

    },
 
    methods: {
      
      valueToInputFormat(value) {
        return !this.displayFormat ? value : this.formatDateToString( this.parseDateString(value, this.format), this.displayFormat ) || value;
      },
      
      getPeriodFromValue(dateString, format) {
        const date = this.parseDateString(dateString, format) || new Date();
        
        return {month: date.getMonth(), year: date.getFullYear()};
      },
      
      
      parseDateString(dateString, dateFormat) {
        return !dateString ? undefined : this.parseDate ? this.parseDate(dateString, dateFormat) : this.parseSimpleDateString(dateString, dateFormat);
      },

      parseSimpleDateString(dateString, dateFormat) {
        let day, month, year, hours, minutes, seconds;
        
        const dateParts = dateString.split(/,|\.|-| |:|\/|\\/);
        const formatParts = dateFormat.split(/,|\.|-| |:|\/|\\/);
        const partsSize = formatParts.length;
        
        for (let i = 0; i < partsSize; i++) {
          
          if (formatParts[i].match(/D+/)) {
            day = parseInt(dateParts[i], 10);
          } else if (formatParts[i].match(/M+/)) {
            month = parseInt(dateParts[i], 10);
          } else if (formatParts[i].match(/Y+/)) {
            year = parseInt(dateParts[i], 10);
          } else if (formatParts[i].match(/h+/i)) {
            hours = parseInt(dateParts[i], 10);
          } else if (formatParts[i].match(/m+/)) {
            minutes = parseInt(dateParts[i], 10);
          } else if (formatParts[i].match(/s+/)) {
            seconds = parseInt(dateParts[i], 10);
          }
        };
        
        const resolvedDate = new Date([this.paddNum(year, 4), this.paddNum(month, 2), this.paddNum(day, 2)].join('-'));
        
        if (isNaN(resolvedDate)) {
          return undefined;
        } else {
          const date = new Date(year, month - 1, day);
          [[year, 'setFullYear'], [hours, 'setHours'], [minutes, 'setMinutes'], [seconds, 'setSeconds']].forEach(([value, method]) => { typeof value !== 'undefined' && date[method](value); });
          
          return date;
        }
      },
      
      incrementMonth(increment = 1) {
        const refDate = new Date(this.currentPeriod.year, this.currentPeriod.month);
        const incrementDate = new Date(refDate.getFullYear(), refDate.getMonth() + increment);
        this.currentPeriod = { month: incrementDate.getMonth(), year: incrementDate.getFullYear() };
      },
      
      open() {
        if (!this.opened) {
          this.opened = true;
          this.currentPeriod = this.startPeriod || this.getPeriodFromValue( this.value, this.format );
          this.addCloseEvents();
        }
        this.direction = undefined;
      },
      
      close() {
        if (this.opened) {
          this.opened = false;
          this.direction = undefined;
          this.removeCloseEvents();
          this.teardownPosition();
        }
      },
      
      closeViaOverlay(e) {
        if (this.hasInputElement && e.target === this.$refs.outerWrap) {
          this.close();
        }
      },
      
      addCloseEvents() {
        if (!this.closeEventListener) {
          this.closeEventListener = e => this.inspectCloseEvent(e);
          ['click', 'keyup', 'focusin'].forEach( eventName => document.addEventListener(eventName, this.closeEventListener) );
        }
      },
      
      inspectCloseEvent(event) {
        if (event.keyCode) {
          event.keyCode === 27 && this.close();
        } else if (!(event.target === this.$el) && !this.$el.contains(event.target)) {
          this.close();
        }
      },
      
      removeCloseEvents() {
        if (this.closeEventListener) {
          ['click', 'keyup', 'focusin'].forEach( eventName => document.removeEventListener(eventName, this.closeEventListener) );
          delete this.closeEventListener;
        }
      },
      
      
      teardownPosition() {
        if (this.positionEventListener) {
          this.positionClass = undefined;
          window.removeEventListener('resize', this.positionEventListener);
          delete this.positionEventListener;
        }
      },
      
      clear() {
        this.inputValue = '';
      },
      
      selectDateItem(item) {
        if (!item.disabled) {
          const newDate = new Date(item.date);
          this.inputValue = newDate.toLocaleDateString();
          
          if (this.currentTime) {
            newDate.setHours(this.currentTime.hours);
            newDate.setMinutes(this.currentTime.minutes);
            newDate.setSeconds(this.currentTime.seconds);
          }
          
          if (this.hasInputElement && !this.pickTime) {
            this.close();
          }
        }

      },

      paddNum(num, padsize) {
        return typeof num !== 'undefined' ? num.toString().length > padsize ? num : new Array(padsize - num.toString().length + 1).join('0') + num : undefined;
      },

      chunkArray(inputArray, chunkSize) {
        const results = [];
        
        while (inputArray.length) {
          results.push(inputArray.splice(0, chunkSize));
        }

        return results;
      },

      areSameDates(date1, date2) {
        return (date1.getDate() === date2.getDate()) && (date1.getMonth() === date2.getMonth()) && (date1.getFullYear() === date2.getFullYear());
      },

      range(start, end) {
        const results = [];
        
        for (let i = start; i <= end; i++) {
          results.push(i);
        }
        return results;
      }

    },

    watch: {
      
      value(value) {
        if (this.isValidValue) {
          this.inputValue = this.valueToInputFormat(value);
          this.currentPeriod = this.getPeriodFromValue(value, this.format);
        }
      },
      
      currentPeriod(currentPeriod, oldPeriod) {
        const currentDate = new Date(currentPeriod.year, currentPeriod.month).getTime();
        const oldDate = new Date(oldPeriod.year, oldPeriod.month).getTime();
        this.direction = currentDate !== oldDate ? (currentDate > oldDate ? 'Next' : 'Prev') : undefined;
        
        if (currentDate !== oldDate) {
          this.$emit('periodChange', { year: currentPeriod.year,  month: currentPeriod.month });
        }
      }
    },
  }
</script>



<style scoped>

  .base-dp-Component {
    position: relative;
    display: inline-block;
    font-size: 15px;
    color: black;
    border: 1px solid lightgray;
    padding: 5px;
  }
  
  .base-dp--toggle-calendar-enter-active.base-dp-PositionReady {
    transform-origin: top center;
    animation: base-dp-ToggleCalendar .2s;
  }
  
  .base-dp--toggle-calendar-leave-active {
    animation: base-dp-ToggleCalendar .15s reverse;
  }

  .base-dp--toggle-calendar-enter-active.base-dp-PositionFixed {
    animation: base-dp-FadeCalendar .3s;
  }
  
  .base-dp--toggle-calendar-leave-active.base-dp-PositionFixed {
    animation: base-dp-FadeCalendar .3s reverse;
  }
  


  .base-dp-input{
    padding: 6px;
  }
  
  .base-dp-ClearInput {
    font-size: 1em; 
    position: absolute; 
    top: 0; 
    bottom: 0; 
    right: 0;
    width: 3em;
  }
  
  .base-dp-ClearInput:before {
    content: '×'; 
    width: 1.4em; 
    height: 1.4em; 
    line-height: 1.1em; 
    box-sizing: border-box;
    position: absolute; 
    left: 50%; 
    top: 50%; 
    margin: -0.7em 0 0 -0.7em;
    color: rgba(0,0,0,0.3); 
    border: 1px solid rgba(0,0,0,0.15); 
    border-radius: 50%;
    background-color: #fff;
  }
  
  .base-dp-ClearInput:hover:before {
    box-shadow: 0 0.2em 0.5em rgba(0,0,0,0.15);
  }
  
  .base-dp-OuterWrap.base-dp-Floating {
    position: absolute; 
    padding: 0.2em; 
    z-index: 220;
    top: 100%;
    left: 0;
    margin-left: -50px; 
  }
    
  .base-dp-InnerWrap {
    overflow: hidden; 
    min-width: 28em; 
    box-sizing: border-box; 
    padding: 1em;
    background: #fff; 
    box-shadow: 0 0.2em 1.5em rgba(0,0,0,0.06);
    border-radius: 0.5em; 
    border: 1px solid rgba(0,0,0,0.15);
    font-size: 10px;
  }
  
  .base-dp-Header {
    position: relative; 
    padding: 0 1em 2.5em; 
    margin: -1em -1em -2.5em;
    text-align: center; 
    background: #f5f5f5;
  }
  
  .base-dp-Arrow {
    font-size: 1em; 
    width: 5em; 
    text-indent: -999em; 
    overflow: hidden;
    position: absolute; 
    top: 0;
    bottom: 2.5em; 
    text-align: left;
    color: black;
  }
  
  .base-dp-Arrow:before {
    content: ''; 
    width: 2.2em; 
    height: 2.2em;
    position: absolute; 
    left: 50%; 
    top: 50%;
    margin: -1.1em 0 0 -1.1em;
    border-radius: 100%; 
    transition: background-color 0.2s;
  }
  
  .base-dp-Arrow:hover,.base-dp-Arrow:focus,.base-dp-Arrow:active {
    outline: 0;
  }
  
  .base-dp-Arrow:hover:before, .base-dp-Arrow:focus:before {
    background-color: rgba(0,0,0,0.03);
  }
  .base-dp-Arrow:active:before {
    background-color: rgba(0,0,0,0.07);
  }
  
  .base-dp-ArrowNext:before {
    margin-left: -1.4em;
  }
  
  .base-dp-Arrow:after {
    position: absolute; 
    left: 50%; 
    top: 50%;
    margin-top: -0.5em; 
    width: 0; 
    height: 0;
    border: 0.5em solid lightgray;
  }
  
  .base-dp-ArrowPrev {
    left: -0.3em;
  }
  
  .base-dp-ArrowPrev:after {
    margin-left: -0.8em;
    border-right-color: #7485c2;
  }
  
  .base-dp-ArrowNext {
    right: -0.6em;
  }
  
  .base-dp-ArrowNext:after {
    margin-left: -0.5em;
    border-left-color: #7485c2;
  }
  
  .base-dp-PeriodControl {
    display: inline-block; 
    position: relative;
  }
  
  .base-dp-PeriodControl > button {
    font-size: 1.5em; 
    padding: 1em 0.4em; 
    display: inline-block;
  }
  
  .base-dp-PeriodControl > select {
    position: absolute; 
    left: 0; 
    top: 0; 
    width: 100%; 
    height: 100%;
    cursor: pointer; 
    opacity: 0; 
    font-size: 1.6em;
    -webkit-appearance: none;
  }
  
  .base-dp-Table {
    width: 100%; 
    table-layout: fixed; 
    position: relative; 
    z-index: 5;
  }
  
  .base-dp-Cell, .base-dp-HeadCell {
    text-align: center; 
    box-sizing: border-box;
  }
  
  .base-dp-Cell {
    padding: 0.5em 0;
  }
  
  .base-dp-HeadCell {
    padding: 0.3em 0.5em 1.8em;
  }
  
  .base-dp-HeadCellContent {
    font-size: 1.3em; font-weight: normal;
    color: #848484;
  }
  
  .base-dp-CellContent {
    font-size: 1.4em; 
    display: block; 
    margin: 0 auto;
    width: 1.857em; 
    line-height: 1.857em;
    text-align: center; 
    border-radius: 100%;
    transition: background 0.1s, color 0.1s;
  }
  
  .base-dp-Cell.outOfRange {
    color: #c7c7c7;
  }
  
  .base-dp-Cell.today {
    color: #7485c2;
  }
  
  .base-dp-Cell.selected .base-dp-CellContent {
    color: #fff; 
    background: #7485c2;
  }
  
  @media (hover: hover) {
    
    .base-dp-Cell.selectable:hover .base-dp-CellContent {
      color: #fff; 
      background: #7485c2;
    }
  }
  
  .base-dp-Cell.selectable {
    cursor: pointer;
  }
  
  .base-dp-Cell.disabled {
    opacity: 0.5;
  }
  
  @keyframes base-dp-SlideFromLeft {
    from { opacity: 0; transform: translate3d(-0.5em,0,0); }
    to { opacity: 1; transform: translate3d(0,0,0); }
  }
  
  @keyframes base-dp-SlideFromRight {
    from { opacity: 0; transform: translate3d(0.5em,0,0); }
    to { opacity: 1; transform: translate3d(0,0,0); }
  }

  @keyframes base-dp-ToggleCalendar {
    from { opacity: 0; transform: scale(0.5); }
    to { opacity: 1; transform: scale(1); }
  }
  
  @keyframes base-dp-FadeCalendar {
    from { opacity: 0; }
    to { opacity: 1; }
  }

</style>