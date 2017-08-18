 var allSaveWords=[];
 var allGenWords=[];
 var saveWordCount =0;

onload=function(){
 	litchan ();
 };
 
 /*(function() {
    console.log("sdfd")
    var audio = new Audio(); 
    audio.src = 'gen_atmo2.mp3'; 
    audio.autoplay = true; 

})();*/
 navLitter.oninput = function(){
    litchan ();
 };
//кнопка анализа текста
btn_antx.onclick=function(){
     /*var anBtn=document.getElementById("anls");
		anBtn.disabled=false;*/
	      //btnAct("anls", 'data-active'); nullarr();
	bgbtnshow("svhd", "svListShow", "txan", "btn_antx");

};
// коенц кнопки анализа текста

//кнопка показа сохранненых слов
svListShow.onclick=function(){
	bgbtnshow("txan", "btn_antx", "svhd", "svListShow");
}
//конец кнопки показа сохранненых слов

 function bgbtnshow (otblock, otbtn, thblock, thbtn) {
     soundClick('SelectClick.wav');
	var othBlock=document.getElementById(otblock);
	var othBtn=document.getElementById(otbtn);
	var element=document.getElementById(thblock);
	var btn =document.getElementById(thbtn);
	var stdisp=element.style.display;
	  if(stdisp!='block'){
          element.style.display='block';
          othBlock.style.display='none';
          othBtn.classList.remove("bbg_focus");
          btn.classList.add("bbg_focus");
		  btn.classList.remove("bbg");
		} 
       else {
          element.style.display='none';
          btn.classList.remove("bbg_focus");
		   btn.classList.add("bbg");
		}
};
 
svhCloser.onclick=function(){
	x_close ("svhd", "svListShow");
	  };
txBtCls.onclick=function(){
	x_close ("txan", "btn_antx");
	  };

function x_close (thblock, thbtn){
	soundClick('SelectClick.wav');
	var element=document.getElementById(thblock);
	var btn =document.getElementById(thbtn);
	element.style.display='none';
      btn.classList.remove("bbg_focus");  
      btn.classList.add("bbg");
}


onclick=function(event){
  //console.log(event);
 var btn = event.target;
   //console.log(btn);
   var tbtn = btn.id
   var nad = btn.className;
   var data = btn.getAttribute('data-type');
   var arr = nad.split(' ');
   
  if(data=="svgn_btn"){
      saveWord()
   console.log(btn);
   }
   else if (arr[0]=="close_x"){
     
      delsave();
}
else if (data=="run"){
    btnAct(tbtn, data);
    //console.log("run");
}
else if (data=="run_sp"){// затычка для глюков хрома
     btnActCrome(arr,btn, data)
    //console.log(btn);
}




function saveWord(){
    var word = (btn.parentElement).parentElement.textContent;
		var mn_block = (btn.parentElement).parentElement;
		console.log(word);
		var element=document.getElementById("svWord");
		   if(word<4){
		  	
					mn_block.style.backgroundColor="#ff9999";
					
					
			soundClick('Error.wav');
		  	setTimeout(function() {
      
       mn_block.style.backgroundColor="";
        
	   }, 150);
			
			return;
		  }
	allSaveWords.push(word);
	 saveWordCount++;
	var svcnt=document.getElementById("sv_count");
		svcnt.innerHTML = saveWordCount;
			clrChan(svcnt,"black","white", 150);
	var prg = document.createElement('span');	
    prg.setAttribute("id","dfg");
	prg.setAttribute("class", "text_result");
	prg.appendChild(document.createTextNode(" " + word ));
	 var cls = document.createElement('span');
      cls.classList.add("close_x", "n_slct");
	  cls.appendChild(document.createTextNode("x"));
	element.appendChild(prg);
		   prg.appendChild(cls);
           
		   
	  
		   clrChan(mn_block,"#009933", "white", 150);
		   
		   
		   soundClick('SelectClick.wav');
 
 }
 // изменение цвета и фона при кликах или действиях  
function clrChan(blAct, bgcol,fncol, delay){
	 blAct.style.backgroundColor=bgcol;
		   blAct.style.color=fncol;
		   setTimeout(function() {
				blAct.style.backgroundColor="";	
                  blAct.style.color="";
        
	   }, delay);
};
   
   
   function delsave(){
     soundClick('SelectClick.wav');
    var cnt=btn.parentElement;
   
      cnt.parentNode.removeChild(cnt);
        saveWordCount--;
	document.getElementById("sv_count").innerHTML = saveWordCount;
    

}


   };

one_word.onkeydown=function(event){
 	checkChar(event,'one_word','btn_one')
 };
two_word.onkeydown=function(event){
 	checkChar(event,'two_word','btn_two')
};


function checkChar(event,idnum,btnum ) {
   document.getElementById(idnum).onkeypress = function(event) {
        var x = event.charCode;
        var char = getChar(event);
       
         if (x>122 && x!=0) {
              soundClick('Error.wav');
              bgccol (idnum,btnum)
        console.log(x);
       return false; 
    }
     else{
     	one_word.style.backgroundColor="white";
         one_word.style.color = "#8c8c8c";
     }
 }
}
function bgccol (idnum,btnum){
     var x = document.getElementById(idnum);
       var btn = document.getElementById(btnum);
       x.style.backgroundColor="#ff9999";
           x.style.color = "#ffff00";
           x.value="RU please";
           x.disabled=true;btn.disabled=true;
      setTimeout(function() {
       x.disabled=false;btn.disabled=false;
       x.style.backgroundColor="white";x.style.color = "#8c8c8c";
        x.value="";
        x.onfocus=true;
}, 500);
};
 	
  
  function getChar(event) {
  if (event.which == null) { 
    if (event.keyCode < 32) return null; 
    return String.fromCharCode(event.keyCode)
  }

  if (event.which != 0 && event.charCode != 0) { 
    if (event.which < 32) return null; 
    return String.fromCharCode(event.which); 
  }

  return null; 
 }




one_word.onfocus = function() {
	emword("one_word");
	};
two_word.onfocus = function() {
	emword("two_word");
	};
function emword(num){
	var element=document.getElementById(num);
	element.style.backgroundColor="white";
  }

	
	
btn_one.onclick = function(){
	genclick("one_word", "rec_cl");
	}	
btn_two.onclick = function(){
	genclick("two_word", "res_cr");
}		
function genclick(num, side){
	var count = document.getElementById("allSum").value;
	console.log(count);
	var element=document.getElementById(num);
	if(element.value==""){
		soundClick('Error.wav');
		element.style.backgroundColor="#ff9999";
		return;
		}
	else if(count==0){
		console.log("else if");
		soundClick('Error.wav');
	      var elements = document.getElementsByClassName("litter_form");       
		  var cont = elements.length;
		    
				for(i=0;i<cont;i++){
				elements[i].style.backgroundColor="#ff9999";
				 }
			 setTimeout(function() {
                 for(i=0;i<cont;i++){
				elements[i].style.backgroundColor="";
				 }
}, 250);
			
			
		
				
				
		return;
	}
	else{
	element.style.backgroundColor="white";
	soundClick('SelectClick.wav');
	nameGen(num, side)
	}

}


btn1clean.onclick=function(){
	soundClick('SelectClick.wav');
	var element=document.getElementById("one_word");
      element.value="";
	}
btn2clean.onclick=function(){
	soundClick('SelectClick.wav');
	var element=document.getElementById("two_word");
      element.value="";
	}

rand_one.onclick= function() {
    soundClick('SelectClick.wav');
    emword("one_word");
   exper("one_word");
};
rand_two.onclick= function() {
    soundClick('SelectClick.wav');
   emword("two_word");
   exper("two_word");
};

//	кнопки частотников
russ_run.onclick= function() {
    soundClick('SelectClick.wav');
    russrun();
    litchan ();
};
soft_run.onclick= function() {
    soundClick('SelectClick.wav');
    softernik();
    litchan ();
};
grub_run.onclick= function() {
    soundClick('SelectClick.wav');
    grubber();
    litchan ();
};
rand_run.onclick= function() {
    soundClick('SelectClick.wav');
    randrun();
    litchan ();
};
// конец кнопок частотников

	
function litchan (){
    var glas=document.getElementById("glasSum");
    var sog =document.getElementById("sogSum");
    var  all=document.getElementById("allSum");
 		var allcon = makeArr();
 		var sogcon = makeAccordArr();
 		var glascon =makeVocalArr();
 			console.log(allcon);
			glas.value = glascon.length
 			sog.value = sogcon.length
 			all.value = allcon.length

};


	
	
	function soundClick(semp) {
    var audio = new Audio(); 
    audio.src = semp; 
    audio.autoplay = true; 

};


txanfld.oninput = function(){
    rotator();
    litchan ();

};
		   
//изменение активных кнопок		   
function btnAct(tbtn,data) {
    var acAtr = 'data-active';
    var elm=document.getElementById(tbtn);
    var elm_parn=(elm.parentElement).getElementsByTagName('button');
         

        
        if(data!=acAtr){
           var cont=elm_parn.length;
           for(i=0;i<cont;i++){
             var temp = elm_parn[i];
             var chAct = temp.getAttribute("data-active");  
                if (chAct){
                    temp.classList.remove("bbg_focus");}
                    temp.classList.add("btn_hv");
                }
                    //console.log(temp.classList);
         

            elm.classList.remove("btn_hv");
            elm.classList.add("bbg_focus");
            elm.setAttribute("data-active", "true");
        }
        else{
              
        }

};

function btnActCrome(arr,btn,data) {
          var acAtr = 'data-active';
          var parn = btn.parentElement;var parn_2 = (parn.parentElement).getElementsByTagName('button');
          //console.log(parn_2);
          var dact_check = parn.getAttribute(acAtr);;
          var btncolt=arr;
             
             if(dact_check!==acAtr){
                var cont=parn_2.length;
                    for(i=0;i<cont;i++){
             var temp = parn_2[i];
             var chAct = temp.getAttribute("data-active");  
                if (chAct){
                    temp.classList.remove("bbg_focus");}
                    temp.classList.add("btn_hv");
                }


                parn.classList.add("bbg_focus");
                parn.classList.remove("btn_hv");
                parn.setAttribute(acAtr, "true");
          }
           else{
              
           }

};