
/*onkeypress=function lidate (e){
	if(e.ctrlKey || e.altKey || e.metaKey) return;
	var chr= getChar(e);
	console.log(chr);
if(chr== null) return;
	if(chr<'0'||chr>'9'){
		return false;
		
	}
}
function getChar(e){
	if(e.which!=0 && e.charCode!=0){
		if(e.which<32)return null;
		return String.fromCharCode(e.which)
    }
return null;
}*/
/*oninput= function(){
	var tableElem = document.getElementById('navLitter');
	var elements = tableElem.getElementsByTagName('input');
	for (var i = 0; i < elements.length; i++) {
    var input = elements[i].value;
    if(!isFinite(input)){
	console.log('ne chislo');
	return oninput.false;
	
	
	
	
	
}
	}
}*/
	function validateNumber2(id1,id2) {
	var temp = [];
	var tableElem = document.getElementById(id1);
	var elements = tableElem.getElementsByTagName(id2);
	for (var i = 0; i < elements.length; i++) {
		var input = elements[i].value;
		if(!isFinite(input)){
		elements[i].value=0;
		console.log('ne chislo');
	    validateNumber("navLitter","input");//функция не рабочая, создает не полный массив Почему? пока не знаю
	 }
		else{
		temp.push(input);
		}
	console.log(input);
}
	return temp;

}

onload=schetchik;// надо менять на что-то более корректное
onchange=schetchik;
function schetchik() {
var sonars = makeVocalArr();
var conson = makeAccordArr();
/*console.log(sonarsCont);*/
document.getElementById("glasSum").value=+ sonars.length;
document.getElementById("sogSum").value=+ conson.length;
document.getElementById("allSum").value=+ (sonars.length+conson.length);
}
//для обновления количества гласных букв в гуи
function refSon() {
var sonars = makeVocalArr();
var sonarsCont = sonars.length;
/*console.log(sonarsCont);*/
return sonars ;
}

//для обновления количества согласных букв в гуи
function refCon() {
var conson = makeAccordArr();
var consonCont = conson.length;
/*console.log(consonCont);*/
return conson ;
}

// получения массива ид с хтмл страницы
function getId() {
	var temp = [];
	var tableElem = document.getElementById('navLitter');
	var elements = tableElem.getElementsByTagName('input');
	for ( i = 0; i < elements.length; i++) {
    var input = elements[i];
    var prot = input.id;
	temp.push(prot);
	var arrID = temp;
	}
	return arrID;
	}

//получение массива букв с хтмл страницы
function getLitter() {
	var temp = [];
	var tableElem = document.getElementById('navLitter');
	var elements = tableElem.getElementsByTagName('span');
	for ( i = 0; i < elements.length; i++) {
    var input = elements[i];
    var prot = input.textContent;
	temp.push(prot);
	var arrLitter = temp;
	}
    var arrLitter = arrLitter.join('');
    var arrLitter = arrLitter.toLowerCase();
    var arrLitter = arrLitter.split('');
	return arrLitter;
	}
//создание общего массива литерс
function makeArr(){
    var litArr = [];
    var litter = getLitter();
	var elements = getId();
for ( i = 0; i < elements.length; i++) {
    var input = elements[i];
    var litTemp = litter[i];
	var cont = parseInt(document.getElementById(input).value);
for(j = 0; j < cont; j++){
litArr.push(litTemp);
}
}

return litArr;
}
//создание массива гласных

function makeVocalArr(){
var litters = makeArr();
var temp = ['а','е','и','о','у','ы','э','ю','я'];
var glas = [];
for(g = 0; g < temp.length; g++){
var element = temp[g];  
var idx = litters.indexOf(element);
while (idx != -1) {
glas.push(idx);
idx = litters.indexOf(element, idx + 1);
}
}
var sonr =[];
var sonrTemp =[];
for ( s = 0; s < glas.length; s++) {
    var input = glas[s];
	sonrTemp = litters[input];
	sonr.push(sonrTemp);
}

var a = sonr;//перемешивание массива
for ( var i = a.length;i-->0; ) {
var t = a[i],
j = Math.floor(i*Math.random());
a[i] = a[j];
a[j] = t;
}
return sonr;
}

//создание массива согласных
function makeAccordArr(){
var litters = makeArr();
var temp = ['б','в','г','д','ж','з','й','к','л','м','н','п','р','с','т','ф','х','ц','ч','ш','щ'];
var con = [];
for(g = 0; g < temp.length; g++){
var element = temp[g];  
var idx = litters.indexOf(element);
while (idx != -1) {
con.push(idx);
idx = litters.indexOf(element, idx + 1);
}
}
var cons =[];
var consTemp =[];
for ( s = 0; s < con.length; s++) {
    var input = con[s];
	consTemp = litters[input];
    cons.push(consTemp);
	}
var a = cons;//перемешивание массива
for ( var i = a.length;i-->0; ) {
var t = a[i],
j = Math.floor(i*Math.random());
a[i] = a[j];
a[j] = t;
}



return cons;
}



function getWord(){
var word = document.getElementById("one_word").value;


var treshetka = [];
var names = word.toLowerCase();
var names = names.split('');
//console.log(names);
for(j = 0; j < names.length; j++){
var element = names[j];
//console.log(element);
if(element=='а'){
treshetka.push(1);
}
else if (element=='е'){
treshetka.push(1);
}
else if (element=='и'){
treshetka.push(1);
}
else if (element=='о'){
treshetka.push(1);
}
else if (element=='у'){
treshetka.push(1);
}
else if (element=='ы'){
treshetka.push(1);
}
else if (element=='э'){
treshetka.push(1);
}
else if (element=='ю'){
treshetka.push(1);
}
else if (element=='я'){
treshetka.push(1);
}
else if (element=='ь'){
treshetka.push(1);
}
else{
treshetka.push(2);
}
}
//console.log(treshetka);
return treshetka;
}


function removeGenRG(){
document.getElementById("placeholder").removeChild(document.getElementById("resultRG"));
var element = document.createElement("div");
element.setAttribute("id", "resultRG");
document.getElementById("placeholder").appendChild(element);
}
function removeGenLF(){
document.getElementById("placeholder").removeChild(document.getElementById("resultLF"));
var element = document.createElement("div");
element.setAttribute("id", "resultLF");
document.getElementById("placeholder").appendChild(element);
}

function makeWords(){
var sonars = refSon();
var conson = refCon();
var fina = getWord();
var num = fina.length; 
var glas = sonars.length;
var sogl = conson.length;
   
var expernames =[];
for(j = 0; j < num; j++){
	var LTS =[];
	var LTG =[];
	var element = fina[j];
	if(element==2){
		INS1 = Math.floor(Math.random() * sogl);
		var LTStemp = conson[INS1];
	    LTS.push(LTStemp);
	}
	else{
		ING2 = Math.floor(Math.random() * glas);
		var LTGtemp = sonars[ING2];
	    LTG.push(LTGtemp);
	}
var rnam = LTS + LTG ;
expernames.push(rnam);
}
var names = expernames.join('');
var names = names.toLowerCase();
//var names = names.split('');
console.log(expernames);
return names;
}


//удаление
function removeGenLf(){
var element=document.getElementById('navLf');
if(element){
element.remove();
} 
else {
document.getElementById("placeholderLf").removeChild(document.getElementById("resultLf"));
var element = document.createElement("div");
element.setAttribute("id", "resultLf");
document.getElementById("placeholderLf").appendChild(element);
}
}

function removeGenRg(){
var element=document.getElementById('navRg');
if(element){
element.remove();
} 
else {
document.getElementById("placeholderRg").removeChild(document.getElementById("resultRg"));
var element = document.createElement("div");
element.setAttribute("id", "resultRg");
document.getElementById("placeholderRg").appendChild(element);
}
}
//удаление конец

var numGen = function (){	
var EnLt1 = ["a","e","i","o","y","u"];
var EnLt2 =["b","v","g","d","k","l","m","n","p","r","s","t","f","h","q","w"];
var EnLt3 =["1","2","3","4","5","6","7","8","9","0","_"];
var ltEnLt1 = EnLt1.length;
var ltEnLt2 = EnLt2.length;
var ltEnLt3 = EnLt3.length;
        num1 = Math.floor(Math.random() * ltEnLt2);
		num2 = Math.floor(Math.random() * ltEnLt3);
		num3 = Math.floor(Math.random() * ltEnLt1);
		num4 = Math.floor(Math.random() * ltEnLt3);
		num5 = Math.floor(Math.random() * ltEnLt2);
var numId =  EnLt2[num1] + EnLt3[num2]  + EnLt1[num3] + EnLt3[num4]+ EnLt2[num5];
return(numId);
}


//создание блока
function makeLf(names){
var ranId = numGen();
prg = document.createElement('div');	
    prg.setAttribute("id",(ranId));
	prg.setAttribute("class", "result");
	prg.appendChild(document.createTextNode(names));
	resultLf.appendChild(prg);	
}
function makeRg(names){
var ranId = numGen();
prg = document.createElement('div');	
    prg.setAttribute("id",(ranId));
	prg.setAttribute("class", "result");
	prg.appendChild(document.createTextNode(names));
	resultRg.appendChild(prg);	
}
//конец создания блока 
 
function nameGen(){
removeGenLf()
for(f = 0; f < 5; f++){	
var names =makeWords();
makeLf(names);
}
}		


function soundClick() {
  var audio = new Audio(); 
  audio.src = 'SelectClick.wav'; 
  audio.autoplay = true; 
}

one.onclick= function() {
    soundClick();
   nameGen();
};








function getValue(ids, tags) { //getValue('navLitter','input')
	var temp = [];
	var tableElem = document.getElementById(ids);
	var elements = tableElem.getElementsByTagName(tags);
	for ( i = 0; i < elements.length; i++) {
    var input = elements[i];
    var prot = input.value;
	temp.push(prot);
	}
	return temp;
	};

function getLitters(ids, tags) { //getLitters('navLitter', 'span')
	var temp = [];
	var tableElem = document.getElementById(ids);
	var elements = tableElem.getElementsByTagName(tags);
	for ( i = 0; i < elements.length; i++) {
    var input = elements[i];
    var prot = input.textContent;
	temp.push(prot.toLowerCase());
	}
    return temp;
	};
	
function makeArrs(){ //makeArrs()
    var litArr = [];
    var litter = getLitters('navLitter', 'span');
	var elements = getValue('navLitter','input');
  for ( i = 0; i < elements.length; i++) {
    var input = elements[i];
    var litTemp = litter[i];
	
     for(j = 0; j < input; j++){
       litArr.push(litTemp);
}
}
return litArr;
};