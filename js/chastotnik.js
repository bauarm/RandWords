//функция перемножения массива/наращивания
 var count =0;
mnj.oninput =function(){
  console.log(count);
   var ran=document.getElementById('mnj');
   var rng=ran.value; 	
	
	console.log(rng);
	var step = parseInt(rng);
	if(step>count){
		mnojitel(1)
		litchan ();
		count++
	   console.log("if",count,step);
	}
	else{
        mnojitel(2)
		litchan ();
		count--
	    console.log("else",count,step);
	}
       ran.disabled=true;
	 setTimeout(function() {
         ran.disabled=false;
}, 50);

};

function mnojitel(mov) {//mnojitel(1)
	//var arr =[];
	var idishky = getId();
	var arr = getValue('navLitter','input');
	var narr = [];
	var cnt = arr.length;
	  for ( i = 0; i < cnt; i++){
         var x =arr[i];
	     temp = Math.round(x);
	        if(mov==1 && x>0){
	      //console.log("if");
	         
	         var step = temp+10;
	       		if(step>0)
	       	    narr.push(step);
	            else{
	            	narr.push(0);
	            }
	       
	       }
	     else{
	     	var back = temp-10
	         if(back>0)
	       	    narr.push(back);
	            else{
	            	narr.push(0);
	            }
	       }
	  }
	 //console.log(narr);
	
	for ( i = 0; i < cnt; i++){
	var input = idishky[i];
	var cont = narr[i];
	/*console.log(input);*/
	document.getElementById(input).value= cont;
	
	}
	
	};
	
	






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
	
function napolnitel() {
	var grubArr = [70,50,10,50,50,10,0,50,70,30,10,10,30,30,50,50,50,10,10,50,10,50,10,50,50,0,0,0,0,0];
	var softArr = [60,10,30,10,20,60,0,0,50,0,20,30,30,37,52,20,32,30,40,20,10,5,0,0,0,0,0,0,0,0];
	var idishky = getId();
	/*console.log(idishky);*/
	for ( i = 0; i < idishky.length; i++){
	var input = idishky[i];
	var cont = grubArr[i];
	/*console.log(input);*/
	document.getElementById(input).value= cont;
	console.log(cont);
	console.log(input);
	}
	}
	
	
function randomka() {
	var arrRand =[];
	for ( i = 0; i < 30; i++){
	var num = Math.floor(Math.random(0-99) * 99);
	arrRand.push(num);
	}
	return arrRand;
}
	
function nullarr() {
	var softArr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var idishky = getId();
	/*console.log(idishky);*/
	
	for ( i = 0; i < idishky.length; i++){
	var input = idishky[i];
	var cont = softArr[i];
	/*console.log(input);*/
	document.getElementById(input).value= cont;
	
	}
};

function randrun() {
	var grubArr = randomka();
	var idishky = getId();
	for ( i = 0; i < idishky.length; i++){
	var input = idishky[i];
	var cont = grubArr[i];
	document.getElementById(input).value= cont;
}
	//schetchik();
	}
function softernik() {
	var softArr = [60,10,30,10,20,60,0,0,50,0,20,30,30,37,52,20,32,30,40,20,10,5,0,0,0,0,0,0,0,0];
	var idishky = getId();
	/*console.log(idishky);*/
	if(softernik){
	for ( i = 0; i < idishky.length; i++){
	var input = idishky[i];
	var cont = softArr[i];
	/*console.log(input);*/
	document.getElementById(input).value= cont;
	}
	}
	//schetchik();
	}	
	
	function russrun() {
	var vattArr = [50,8,25,7,14,48,4,9,45,6,20,26,19,37,52,20,32,32,37,16,2,5,3,6,4,2,5,5,5,12];
	var idishky = getId();
	
	
	for ( i = 0; i < idishky.length; i++){
	var input = idishky[i];
	var cont = vattArr[i];
	
	document.getElementById(input).value= cont;
	}
	
	//schetchik();
	}	
	
	function grubber() {
	var grubArr = [70,50,10,50,50,10,0,50,70,30,10,10,30,30,50,50,50,10,10,50,10,50,10,50,50,0,0,0,0,0];
	
	var idishky = getId();
	
	for ( i = 0; i < idishky.length; i++){
	var input = idishky[i];
	var cont = grubArr[i];
	/*console.log(input);*/
	document.getElementById(input).value= cont;
	
	}
	//schetchik();
	}	

function getText() { //
    var fin = [];
    var prot = document.getElementById("txanfld").value;
    var prot = prot.toLowerCase();
   	var couter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var target = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; // цель поиска
    var das = target.length;
    for (w = 0; w < prot.length; w++) {
        var element = prot[w];
        for (z = 0; z < das; z++) {
            var temp = target[z];
            if (element == temp) {
                couter[z]++;
            }
        }
    }
return couter;
};

function rotator() {
    var vattArr = getText();
	var idishky = getId();
		for ( i = 0; i < idishky.length; i++){
			var input = idishky[i];
			var cont = vattArr[i];
	document.getElementById(input).value= cont;
	}
}
	
	
	
	

	
