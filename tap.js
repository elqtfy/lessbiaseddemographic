var myVar = setInterval(myTimer, 100);

function myTimer() {
    var d = new Date();
    if(d.getMilliseconds()>=500 && d.getMilliseconds()<800){
    	document.getElementById("reddot").style.opacity = 1;

    }else{
    	document.getElementById("reddot").style.opacity = 0;
    }

}

window.onload = function() {
    
    document.getElementById("reddot").style.opacity = 0;

};