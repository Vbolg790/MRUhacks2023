sessionStorage.clear();

sessionStorage.setItem("Analytics", "0");
sessionStorage.setItem("Creative", "0");
sessionStorage.setItem("Logic", "0");

var btnVal = "";
var currVal = 0;

document.addEventListener('click', function(e){
    
    var elementTag = e.target.tagName;
    if(elementTag == "BUTTON"){
        btnVal = e.target.value;
    }
    console.log(btnVal);
    
})

document.getElementById("nextBtn").onclick = function(e){
    let keys = Object.keys(sessionStorage);
    for( let key of keys){
        if(btnVal  == key){
            currVal = parseInt(sessionStorage.getItem(key)) + 1;
            sessionStorage.setItem(key, currVal);
        }
        console.log(sessionStorage.getItem(key));
    }
    location.href="aspectLogic.html";
}