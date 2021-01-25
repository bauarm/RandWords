
    


/*
addEventListener('click', function(e){
    console.log(e.target)
})*/
/*
addEventListener('focus', function(e){
    console.log('e.targe')
})
*/
function getText() { //
    
    var arr_count=new Map();
    var fin = [];
    //var prot = document.getElementById("textfield").value;
    //var prot = prot.toLowerCase();
   	let prot =splitTextToWords().join('');
   	var len=prot.length;
    var arr=[]
    
    //console.log(len);
    for (var i = prot.length - 1; i >= 0; i--) 
    {
        //console.log(prot[i]);
        var tlit=prot[i];
        var unnecessary_litters=[',','.','.',' ','\n','  ','(',')','–','?',';','!','[',']','}','{','<','>','-',':','“','„','…','՝','։','—','_','/']
        for (var u = unnecessary_litters.length - 1; u >= 0; u--) 
        {
        	var unLitter=unnecessary_litters[u];
        	//console.log(unLitter);
        	if (tlit!==unLitter) 
        	{
            	prot=prot.replace(unLitter, '');
            }
        	


        }

    //console.log(prot)
        //if (tlit!==' ' && tlit!=='  ' && tlit!=='\n') {
    arr.push(tlit);

	}

    
    arr.sort();
    //console.log(arr.length);
    //console.log(arr);
    var litter=1;
    for (var j = 0; j<=arr.length - 1; j++) {
        //console.log(prot[i]);
        var num_litter=arr[j];
        //console.log(num_litter, j);
        if (num_litter==arr[j+1]) {
            litter=litter+1;
            //console.log(num_litter, litter);
        }
        else if(num_litter!==num_litter+1) {
                //console.log(num_litter, litter);
                arr_count.set(num_litter,litter);
                litter=1;


        } 



        else {
            continue;
        }
        
        

    }

//console.log(arr_count);
return arr_count;
};

function textToLitters(){
	let arr_count=new Map();
    let fin = [];
	let str=splitTextToWords().join('');



}







function createDivLitter(){
    removeElemList()
    var getMap=getText();
    var target_div = document.getElementById("target");
    for (let pair of getMap) 
        {
        var newDiv = document.createElement("div");
            newDiv.classList.add("litterbox");
        var newSpan = document.createElement("span");  
        var newInput = document.createElement("input");  
        newSpan.innerHTML=pair[0];
        newInput.value=pair[1];
        newDiv.append(newSpan);
        newDiv.append(newInput);
        target_div.append(newDiv);
        };
    
    };

function removeElemList()//createDivLitter()-->removeElemList()
    {
    let target_div = document.getElementById("target");
    if (target_div.childElementCount>0) 
        {
        let elemLen=target_div.childElementCount;
        for(let i=elemLen-1; i>-1; i--)
            {
            target.children[i].remove()
            }
        }
    i=0;
    };


function clearingText(arrt){
	let unnecessary_litters=[',','.','\n','(',')','–','?',';','!','[',']','}','{','<','>','-',':','“','„','…','՝','։','—','_','/','\\','\'','\"'];
	let arr=arrt;
	len=arr.length
	for (let j = 0; j<len; j++) 
		{
		for (let q = 0; q<arr[j].length; q++) 
			{
			
			for (var u = 0; u < unnecessary_litters.length; u++) 
				{
				
				let unLitter=unnecessary_litters[u];
				if(unLitter==arr[j][q])
					{
					//console.log(arr[j][q])
					
					arr[j]=arr[j].replace(arr[j][q], '');

					}
				}
			}


		}
	
	return arr;

};




function splitTextToWords(){
    let arr =[];
    var prot = document.getElementById("textfield").value;
    var prot = prot.toLowerCase();
   	var nameList = prot.split(' ');

   	arr=clearingText(nameList)
	//console.log(arr);

	return arr;
}



function createDeleteButton(){
    
    
}




const el = document.getElementById("fn_call");
el.addEventListener("click", ()=>{createDivLitter(),statusViev()}, false);

target.onclick=function(event)
{
    if(event.target.nodeName=="SPAN")
        {
        //console.log(event.target)
        //console.log(event.target.parentNode.getAttribute('wr_selected'))
        if(event.target.parentNode.getAttribute('wr_selected')!=='select')
        	{
        	
            
            event.target.parentNode.classList.remove('btn-danger','btn-primary');
            event.target.parentNode.classList.add("btn-success");
            event.target.parentNode.setAttribute("wr_selected",'select');

        	}
        else if(event.target.parentNode.getAttribute('wr_selected')=='select' && event.target.parentNode.getAttribute('isPicked')=='picked')
            {
            if(event.target.parentNode.children[0].getAttribute('litter')== 'consonant'){
                event.target.parentNode.classList.remove('btn-success');
                event.target.parentNode.classList.add('btn-primary');
                event.target.parentNode.setAttribute("wr_selected",'noselect');

            }
            if(event.target.parentNode.children[0].getAttribute('litter')== 'vovel'){
                event.target.parentNode.classList.remove('btn-success');
                event.target.parentNode.classList.add('btn-danger');
                event.target.parentNode.setAttribute("wr_selected",'noselect');
            }
            

            }
        else
        	{
        	
            event.target.parentNode.classList.remove("btn-success");
            event.target.parentNode.setAttribute("wr_selected",'noselect');

        	}
        }
}


const delBtn = document.getElementById("delete-btn");
delBtn.addEventListener("click", removeSelectedElements, false);

function removeSelectedElements()
    {
    var target_div = document.getElementById("target");
    if (target_div.childElementCount>0) 
        {
        var elemLen=target_div.childElementCount;
        for(var i=elemLen-1; i>-1; i--)
          {
          //console.log(target.children[i]);
          if(target.children[i].getAttribute('wr_selected')=="select")//target.children[i].getAttribute('wr_selected')=="select"
            {
            target.children[i].remove()
            }statusViev
            
          }
        }
    i=0;
    };



const textArea = document.getElementById("textfield");

textArea.addEventListener("input", statusViev, false);

function statusViev(){
	let literCount = document.getElementsByClassName('liter-count')[0];
	
	var prot = document.getElementById("textfield").value;
  var len=prot.length;
  
  literCount.innerHTML=len;


  let wordCount = document.getElementsByClassName('word-count')[0];
  var wordArrLen=splitTextToWords().length;

  wordCount.innerHTML=wordArrLen;

  createDivLitter()



}

const mCons = document.getElementById("mk-consonant");

mCons.addEventListener("click", makeConsonant, false);



function makeConsonant()
    {
    let arr=[];
    let target_div = document.getElementById("target");
    if (target_div.childElementCount>0) 
        {
        let elemLen=target_div.childElementCount;
        for(let i=elemLen-1; i>-1; i--)
          {
            if(target.children[i].getAttribute('wr_selected')=="select")
            {
              
                
                
                target.children[i].classList.remove('selected','btn-success','btn-danger');
                target.children[i].setAttribute('isPicked','picked');
              
              
                
                target.children[i].classList.add("btn-primary");

                arr.push(target.children[i].children[0].innerText);
                target.children[i].children[0].setAttribute('litter', 'consonant'); //установка свойства буквы гласная или согласная
                

              
              
              target.children[i].setAttribute("wr_selected",'noselect');
            }
            
          }
        }
    i=0;
    //console.log(arr);
    };


const mVov = document.getElementById("mk-vovel");
mVov.addEventListener("click", makeVovel, false);

function makeVovel()//glasn
    {
    arr=[];
    var target_div = document.getElementById("target");
    if (target_div.childElementCount>0) 
        {
        var elemLen=target_div.childElementCount;
        for(var i=elemLen-1; i>-1; i--)
          {
          
          if(target.children[i].getAttribute('wr_selected')=="select")
            {
            
            target.children[i].classList.remove('selected','btn-success','btn-primary'); 
            target.children[i].setAttribute('isPicked','picked');
            target.children[i].classList.add("btn-danger");

            arr.push(target.children[i].children[0].innerText);
            target.children[i].children[0].setAttribute('litter', 'vovel');
            
            
            target.children[i].setAttribute("wr_selected",'noselect');
            makeVocalArr(target.children[i].children[0].textContent,target.children[i].children[1].value)
            //console.log('litter'+target.children[i].children[0].textContent,'count '+target.children[i].children[1].value)
            
            }
            
          }
        }
    i=0;
    console.log(arr);
    };


mainAlf={
    arr:[],
    vocal:[]
}


function getValue(ids, tags) { //getValue('target','input')
    let temp = [];
    let tableElem = document.getElementById(ids);
    let elements = tableElem.getElementsByTagName(tags);
    for ( i = 0; i < elements.length; i++) {
        let input = elements[i];
        let prot = input.value;
        temp.push(prot);
        }
    return temp;
    };

function getLitters(ids, tags) { //getLitters('target', 'span')
    let temp = [];
    let tableElem = document.getElementById(ids);
    let elements = tableElem.getElementsByTagName(tags);
    for ( i = 0; i < elements.length; i++) {
        let input = elements[i];
        let prot = input.textContent;
        temp.push(prot.toLowerCase());
        }
    return temp;
    };

function makeVocalArr(lit,amt){
    let glas = [];
    for(let i = 0; i < amt; i++){
        mainAlf.vocal.push(lit);
        glas.push(lit);
        }
    return glas;
}

function makeArr(){ //makeArr()
    let litArr = [];
    let litter = getLitters('target', 'span');
    let elements = getValue('target','input');
    for ( i = 0; i < elements.length; i++) {
        var input = elements[i];
        var litTemp = litter[i];
        for(j = 0; j < input; j++){
            litArr.push(litTemp);
            }
        }
    mainAlf.arr=litArr;
    return litArr;
    };