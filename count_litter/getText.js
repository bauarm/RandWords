wordStorage={
  dirtyText:[]
}
  
  
function getTextFromTextarea(areaId){//getTextFromTextarea('textfield')
    let arr =[];
    let prot = document.getElementById(areaId).value;
      prot.toLowerCase();
    let nameList = prot.split(' ');
    wordStorage.dirtyText=nameList;
    return nameList;
}



function textFromCharcode() { //textFromCharcode()-->clearCharcode()-->textToCharcode(text)
    let prot =clearCharcode().filter(element => element !== null);
    let arr=[];
    let wordArr=[]
    for (let i = prot.length - 1; i >= 0; i--) {
       arr.push(String.fromCharCode(prot[i]))
    };
    text=arr.join('')
    
    
    arr=splitString(text,' ');
    return removeEmptyCells(arr.sort());
};




function clearCharcode() { //textFromCharcode()-->clearCharcode()
    let prot =textToCharcode((document.getElementById("textfield").value).toLowerCase());
    let arr=[];
    let len=prot.length
    let unnecessary_litters=[8211,8212,8216,8217,8218,8220,8221,8222,8224,8225,8226,8230,8240,8364,8482,247,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,160,161,162,163,164,165,166,167,168,169,170,
171,172,173,174,175,123,124,125,126,91,92,93,94,95,64,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,10,9,13]
    let unlen=unnecessary_litters.length;
    for (let i = len - 1; i >= 0; i--) {
       for (let q = unlen - 1; q >= 0; q--){
            let unLitter=unnecessary_litters[q];
            if(prot[i]==unLitter){
                prot[i]=null;
            };
        };
    };

    return prot;
};

function textToCharcode(text) { //clearCharCode()-->textToCharcode(text)
    let arr =[];
    let prot = text;
        prot.toLowerCase();
    for (let i = prot.length - 1; i >= 0; i--) {
       prot[i]=prot[i].charCodeAt(0);
       arr.push(prot[i].charCodeAt(0))
    };
    return arr;
};



function splitString(stringToSplit, separator) {
  return stringToSplit.split(separator);
}

function removeEmptyCells(array) {
  arr=[];
  array.forEach((elem)=>{
    if(elem.length>1){
      arr.push(elem);
    }
  })
return arr;
};


/////////////////////////

function textToLitters(){
  let mainString=(textFromCharcode().join('')).sort()
  console.log(mainString);



};