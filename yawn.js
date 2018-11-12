var myVar = setInterval(myTimer, 100);

function myTimer() {
    var d = new Date();
    if(d.getMilliseconds()>=0 && d.getMilliseconds()<300){
    	document.getElementById("reddot").style.opacity = 1;

    }else{
    	document.getElementById("reddot").style.opacity = 0;
    }

}

window.onload = function() {
    
    document.getElementById("reddot").style.opacity = 0;

};