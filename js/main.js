// creo una funzione
(function () {
  // stabilisco divisione millisecondi, secondi, minuti, ore e giorni
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  // creo una costante countdown che "punta" a domani alle 9:30
  const countDown = new Date("august 24, 2023 09:30:00").getTime();

  cronometro = setInterval(function () {
    //creo una costante che prende il tempo da ora
    const now = new Date().getTime(),
      //sottraggo i millisecondi per arrivare a domani ai millisecondi correnti
      arrivo = countDown - now;

    //stampo il tutto nell'html
    (document.getElementById("days").innerText = Math.floor(arrivo / day)),
      (document.getElementById("hours").innerText = Math.floor(
        (arrivo % day) / hour
      )),
      (document.getElementById("minutes").innerText = Math.floor(
        (arrivo % hour) / minute
      )),
      (document.getElementById("seconds").innerText = Math.floor(
        (arrivo % minute) / second
      ));
  }, 0);
})();
