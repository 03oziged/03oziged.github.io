var request = new XMLHttpRequest();
request.open('GET', 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');

request.responseType = 'json';
request.send();

request.onload = function() {
  var superHeroes = request.response;
  console.log(`Бэрринг получает за один ролик по Тринити 2000 рублей или ${superHeroes[19]['rate']*2000} гривен.`)
  console.log(superHeroes[19]['rate']);
var value = document.getElementById('value');
document.getElementById('ask').innerHTML = `Перевести рубли в гривны | Курс ${superHeroes[1]['exchangedate']}`;

  document.getElementById('ask').onclick = () => {
    document.getElementById('output').innerHTML = `${value.value} рублей = ${superHeroes[19]['rate']*value.value} гривен`;
  }
}

