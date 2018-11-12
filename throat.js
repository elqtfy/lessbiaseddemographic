var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    if(d.getSeconds()%3 ==2){
    	document.getElementById("reddot").style.opacity = 1;

    }else{
    	document.getElementById("reddot").style.opacity = 0;
    }

}

window.onload = function() {
    
    document.getElementById("reddot").style.opacity = 0;

};