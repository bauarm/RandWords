
    


/*
addEventListener('click', function(e){
    console.log(e.target)
})*/
/*
addEventListener('focus', function(e){
    console.log('e.targe')
})
*/

function textFromCharcode() {
    let prot =clearCharcode().filter(element => element !== null);
    let arr=[];
    for (let i = prot.length - 1; i >= 0; i--) 
    {
       arr.push(String.fromCharCode(prot[i]))
    };
    return arr.join('');
    };


function textToCharcode(text){
    let arr =[];
    let prot = text;
        prot.toLowerCase();
    for (let i = prot.length - 1; i >= 0; i--) 
    {
       prot[i]=prot[i].charCodeAt(0);
       arr.push(prot[i].charCodeAt(0))
    };
    return arr;
};

function clearCharcode() {
    
    let prot =textToCharcode(document.getElementById("textfield").value);
    let arr=[];
    let len=prot.length
    let unnecessary_litters=[8211,8212,8216,8217,8218,8220,8221,8222,8224,8225,8226,8230,8240,8364,8482,247,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,160,161,162,163,164,165,166,167,168,169,170,
171,172,173,174,175,123,124,125,126,91,92,93,94,95,64,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,10,9,13]
    let unlen=unnecessary_litters.length;
    for (let i = len - 1; i >= 0; i--) 
    {
       for (let q = unlen - 1; q >= 0; q--) 
        {
            let unLitter=unnecessary_litters[q];
            if(prot[i]==unLitter){
                prot[i]=null;
            }
        }
       
    }

    return prot;
    }

function splitTextToWords(){
    let arr =[];
    let prot = document.getElementById("textfield").value;
        prot.toLowerCase();
    var nameList = prot.split(' ');

    arr=clearingText(nameList)
    
    return arr;
}

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
        var unnecessary_litters=[',','.',' ','\n','  ','(',')','–','?',';','!','[',']','}','{','<','>','-',':','“','„','…','՝','։','—','_','/']
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