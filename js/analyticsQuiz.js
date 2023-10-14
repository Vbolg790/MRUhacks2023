var btnVal = "";
var currVal = 0;

console.log(sessionStorage);

const analyticObj = sessionStorage.getItem("Analytics");
const logicObj = sessionStorage.getItem("Logic");
const creativeObj = sessionStorage.getItem("Creative");

let dataArray = []
dataArray.push({"Space": "Analytics",
                "Count": JSON.parse(analyticObj)});
dataArray.push({"Space": "Logic",
                "Count":JSON.parse(logicObj)});
dataArray.push({"Space": "Creative",
                "Count": JSON.parse(creativeObj)});

console.log(dataArray);

let maxCountObject = dataArray[0]; // Initialize with the first object
for (let i = 1; i < dataArray.length; i++) {
  if (dataArray[i].Count >= maxCountObject.Count) {
    maxCountObject = dataArray[i];
  }
}

var spaceWinner = maxCountObject.Space;
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

    if(spaceWinner == "Creative"){
        location.href = "frontend.html";
    }
    if(spaceWinner == "Logic"){
        location.href = "backend.html";
    }
    if(spaceWinner == "Analytics"){
        location.href = "datascience.html";
    }
}