let tekst = document.getElementById("tekst");
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
let day = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();

tekst.innerHTML = day + " of " + month + " " + year + ".";