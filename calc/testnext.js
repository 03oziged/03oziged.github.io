
var save = 0;
var dot = true;

document.getElementById('reset').onclick = function(){
  document.getElementById('p').innerHTML = '';
}

document.getElementById('1').onclick = function(){
  document.getElementById('p').innerHTML += "1";
  save = 1;
}

document.getElementById('2').onclick = function(){
  document.getElementById('p').innerHTML += "2";
  save = 1;
}

document.getElementById('3').onclick = function(){
  document.getElementById('p').innerHTML += "3";
  save = 1;
}

document.getElementById('4').onclick = function(){
  document.getElementById('p').innerHTML += "4";
  save = 1;
}

document.getElementById('5').onclick = function(){
  document.getElementById('p').innerHTML += "5";
  save = 1;
}

document.getElementById('6').onclick = function(){
  document.getElementById('p').innerHTML += "6";
  save = 1;
}

document.getElementById('7').onclick = function(){
  document.getElementById('p').innerHTML += "7";
  save = 1;
}

document.getElementById('8').onclick = function(){
  document.getElementById('p').innerHTML += "8";
  save = 1;
}

document.getElementById('9').onclick = function(){
  document.getElementById('p').innerHTML += "9";
  save = 1;
}

document.getElementById('0').onclick = function(){
  document.getElementById('p').innerHTML += "0";
  save = 1;
}

document.getElementById('-').onclick = function(){
  if (save == 1){
  document.getElementById('p').innerHTML += " - ";
  check();
  save = 0;
  dot = true;
  }
}

document.getElementById('+').onclick = function(){
  if (save == 1){
    document.getElementById('p').innerHTML += " + ";
    check();
    save = 0;
    dot = true;
    }
}

document.getElementById('*').onclick = function(){
  if (save == 1){
    document.getElementById('p').innerHTML += " * ";
    check();
    save = 0;
    dot = true;
    }
}

document.getElementById('/').onclick = function(){
  if (save == 1){
    document.getElementById('p').innerHTML += " / ";
    check();
    save = 0;
    dot = true;
    }
}

document.getElementById('.').onclick = function(){
  if (save == 1 && dot == true){
    document.getElementById('p').innerHTML += ".";
    dot = false;
    console.log(dot);
  }
}

document.getElementById('=').onclick = res;
  function check(){
    if (document.getElementById('p').innerHTML == ' * ' || document.getElementById('p').innerHTML == ' / '
    || document.getElementById('p').innerHTML == ' + ' || document.getElementById('p').innerHTML == ' - '){
      document.getElementById('p').innerHTML = '';
    }
  }


function res(str){
  str = document.getElementById('p').innerHTML;
  var test = str.split(' ');
  var i = 1;
  var res = 0;
  while( i < test.length-1){
    res += count(test[i], test[i-1], test[i+1]);
    i += 2;
  }
  
  document.getElementById('p').innerHTML = res;
}

function count (sign, point1, point2){
  return sign == '+' ? +point1 + +point2 : sign == '-'  ? +point1 - +point2 : sign == '*' ? +point1 * +point2 : +point1 / +point2;
}

console.log(+'0.12');

