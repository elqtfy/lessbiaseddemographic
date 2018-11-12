var myVar = setInterval(myTimer, 100);

function myTimer() {
    var d = new Date();
    if(d.getSeconds()%5 ==3){
    	document.getElementById("reddot").style.opacity = 1;

    }else{
    	document.getElementById("reddot").style.opacity = 0;
    }

}

window.onload = function() {
    
    document.getElementById("reddot").style.opacity = 0;

}