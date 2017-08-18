function exper(place) {
var names = ["teon","ganava","tisha","lord","tirion","kligan","amely","ketrin","got","septim","asab"];

var rnd = Math.floor(Math.random()  * names.length);
var raname = names[rnd];
//console.log(raname);
document.getElementById(place).value= raname;
} 





