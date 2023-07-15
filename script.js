
//menu
var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function togglemenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "130px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}

function startTimer() {
    var startTime;
    var duration = 3 * 60 * 60 * 1000;

    if (localStorage.getItem('startTime')) {
      startTime = parseInt(localStorage.getItem('startTime'));
    } else {
      startTime = Date.now();
      localStorage.setItem('startTime', startTime.toString());
    }

    var timerId = setInterval(function() {
      var elapsedTime = Date.now() - startTime;
      var remainingTime = duration - elapsedTime;

      if (remainingTime <= 0) {
        clearInterval(timerId);
        var timerDisplay = document.getElementById('timerDisplay');
        timerDisplay.textContent = 'Timer finished!';
      } else {
        var hours = Math.floor(remainingTime / (1000 * 60 * 60));
        var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        var timerDisplay = document.getElementById('timerDisplay');
        timerDisplay.textContent =hours + 'h ' + minutes + 'm ' + seconds + 's';
      }
    }, 1000); // Odświeżaj co sekundę (1000 milisekund)

    var resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', function() {
      startTime = Date.now();
      localStorage.setItem('startTime', startTime.toString());
    });
  }

  window.addEventListener('DOMContentLoaded', startTimer);

var przykladoweTeksty = [
    'Temat Szyszki',
    'Temat Jaspera',
    'Temat ćpania',
    'Pedał/Cwel z ust Adama',
    'Kutas na strimie',
    'Linki',
    'Pierdolenie o swojej masie ciała',
    'Ome',
    'Spam pepeW na czacie',
    'Fajeczka',
    'Obietnica',
    'Narzekanie na zmęczenie',
    'Mitomańska historia',
    'Wyzywanie widzów',
    'Ktoś nazywa rudego kakiem w donejcie',
    'Donejt za więcej niż 1zł',
    'Temat Jakubixa',
    'Jakiś debil dał suba',
    'Pierdolenie o Kanadzie',
    'Rudy się opierdala',
    'Temat cuckoldostwa',
    'Gadka o Patiro',
    'Weronika Malik (100kg bestia z Warszawy)',
    'Coś o Orange',
    'Temat Pajalockka',
    'Meduska',
    '"Podaj instagrama" / "napisz na insta"',
    'Minutka',
    'Rudy się spłakał',
    'Gadka o wyjeździe za granice',
    'kac moment',
    'Perm widza',
    'Adam został pociśnięty w donejcie',
    'Robienie kontentu na pietrasie',
    'Wpierdalanie na strimie'
  ];


    var dostepneIndeksy = Array.from(Array(przykladoweTeksty.length).keys());

    function losujTekst(element) {
      if (dostepneIndeksy.length === 0) {
        element.textContent = 'Brak dostępnych tekstów';
        return;
      }

      var losowyIndeks = Math.floor(Math.random() * dostepneIndeksy.length);
      var wylosowanyIndeks = dostepneIndeksy.splice(losowyIndeks, 1)[0];
      var wylosowanyTekst = przykladoweTeksty[wylosowanyIndeks];
      element.textContent = wylosowanyTekst;
    }

    window.addEventListener('DOMContentLoaded', function() {
      var divItems = document.getElementsByClassName('item');
      Array.from(divItems).forEach(function(item) {
        losujTekst(item);
      });
    });
    var resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', function() {
      dostepneIndeksy = Array.from(Array(przykladoweTeksty.length).keys());

      var divItems = document.getElementsByClassName('item');
      Array.from(divItems).forEach(function(item) {
        losujTekst(item);
      });
    });
  

// function main(element){
//     var currentColor = element.style.backgroundColor;
//     element.style.backgroundColor = currentColor !== "rgb(166, 245, 189)" ? "rgb(166, 245, 189)" : "rgb(255, 255, 255)";
// }  
var rows = [];
var columns = [];
var diagonal = 0;
var antiDiagonal = 0;

function main(element) {
  var currentColor = element.style.backgroundColor;
  element.style.backgroundColor = currentColor !== "rgb(166, 245, 189)" ? "rgb(166, 245, 189)" : "rgb(255, 255, 255)";

  checkWin();
}

function checkWin() {
  var divItems = document.getElementsByClassName('item');
  rows = [];
  columns = [];
  diagonal = 0;
  antiDiagonal = 0;

  for (var i = 0; i < divItems.length; i++) {
    var row = Math.floor(i / 4);
    var column = i % 4;

    if (rows[row] === undefined) {
      rows[row] = true;
    }

    if (columns[column] === undefined) {
      columns[column] = true;
    }

    if (row === column) {
      diagonal = diagonal || (divItems[i].style.backgroundColor !== "rgb(166, 245, 189)");
    }

    if (row + column === 3) {
      antiDiagonal = antiDiagonal || (divItems[i].style.backgroundColor !== "rgb(166, 245, 189)");
    }

    if (divItems[i].style.backgroundColor !== "rgb(166, 245, 189)") {
      rows[row] = false;
      columns[column] = false;
    }
  }

  var win = rows.includes(true) || columns.includes(true) || !diagonal || !antiDiagonal;

  var resultElement = document.getElementById('result');
  resultElement.textContent = win ? "Wygrałeś!" : "";
}

window.addEventListener('DOMContentLoaded', function() {
  var divItems = document.getElementsByClassName('item');
  for (var i = 0; i < divItems.length; i++) {
    if (divItems[i].style.backgroundColor === "rgb(166, 245, 189)") {
      divItems[i].click();
    }
  }
});
