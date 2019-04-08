

var light = false;
var whoWin;
var step = 'X';
var win = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,5,9],
  [3,5,7],
  [1,4,7],
  [2,5,8],
  [3,6,9]
]
var winX = [];
var winO = [];
var checkRepeat = [];

for (var i = 1; i < 10; i ++){
 document.getElementById(i).onclick = function (e){
    if (light && checkRepeat.indexOf(this.id) === -1){
      e.target.className = 'red'
      e.target.innerHTML = 'X';
      checkRepeat.push(this.id);
      winX.push(+this.id);
      light = false;
      console.log(this.id);
    }
    else if (checkRepeat.indexOf(this.id) === -1) {
        e.target.className = 'green';
        e.target.innerHTML = 'O';
        checkRepeat.push(this.id);
        winO.push(+this.id);
        light = true;
        console.log(this.id); 
    }
    if (checkWin()) showWin();
  }
}



function checkWin(){
  for (var i = 0; i < win.length; i++){
    if (checkArrays(win[i], winX.sort()) || checkArrays(win[i], winO.sort())){
      win = win[i];
      return true;
    }
  }
}

function checkArrays(array1, array2){
  var temp = 0;
  
    for (var i = 0; i < 3; i++){
      if (array2.indexOf(array1[i])!= -1) temp++;
    }

    if (temp >= 3) {
      if (array2 === winX.sort()) whoWin = 'X';
      if (array2 === winO.sort()) whoWin = 'O';
      return true;
    }
  }

  function showWin() {
    for (var i = 0; i < 3; i++){
      document.getElementById(win[i]).className = 'blue';
    }
    document.getElementById('win').style.visibility = 'visible';
    document.getElementById('winbutton').onclick = restart;
    document.getElementById('winbutton').innerHTML = 'ПОБЕДИЛ ' + whoWin + '<br>RESTART';
  }

  function restart(){
    win = [
      [1,2,3],
      [4,5,6],
      [7,8,9],
      [1,5,9],
      [3,5,7],
      [1,4,7],
      [2,5,8],
      [3,6,9]
    ];
     winX = [];
     winO = [];
     checkRepeat = [];
     light = false;
     document.getElementById('win').style.visibility = 'hidden';

     for (var i = 1; i < 10; i ++){
      document.getElementById(i).className = '';
      document.getElementById(i).innerHTML = ''
      }
  }





