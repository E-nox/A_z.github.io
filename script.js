const txtElement = ["Abthal", "Hasbi", "Azizi"];
let count = 0;
let txtindex = 0;
let currenttxt = "";
let words = "";

(function ngetik() {
  if (count == txtElement.length) {
    count = 0;
  }

  currenttxt = txtElement[count];

  words = currenttxt.slice(0, ++txtindex);
  document.querySelector(".efek-ngetik").textContent = words;

  if (words.length == currenttxt.length) {
    count++;
    txtindex = 0;
  }

  setTimeout(ngetik, 330);
})();
