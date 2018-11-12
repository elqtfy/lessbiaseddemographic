
var leftIndex = 0;
var rightIndex = 0;
var left = ["CAT","SEAFOOD","PINEAPPLE PIZZA"];
var right = ["DOG","SALAD","PEPPERRONI PIZZA"];

var scoreL=0;
var scoreR=0;
function rand(min, max) {
    return min + Math.random() * (max - min);
}

function get_random_color() {
    var h = rand(1, 360);
    var s = 100;//rand(0, 80);
    var l = 70;//rand(50, 100);
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}


window.onload = function() {
    
    if(leftIndex<2){
    	document.getElementById("A").onclick = change_question;
    	document.getElementById("B").onclick = change_question;
    }
	document.getElementById("A").style.backgroundColor = get_random_color();
    document.getElementById("B").style.backgroundColor = get_random_color();
    document.getElementById("C").innerText = left[leftIndex++];
	document.getElementById("D").innerText = right[rightIndex++];

};

function change_question(){
	document.getElementById("A").style.backgroundColor = get_random_color();
    document.getElementById("B").style.backgroundColor = get_random_color();

	document.getElementById("C").innerText = left[leftIndex++];
	document.getElementById("D").innerText = right[rightIndex++];
	
	leftIndex %=3;
	rightIndex %=3;
}

$(document).click(function(event) {
	
    if(event.target.id=="A"){
    	scoreL++;
    }else if(event.target.id=="B"){
    	scoreR++;
    }
    console.log("left: "+ scoreL+ "	right: "+ scoreR);
    if(scoreL+scoreR==3){ //(leftIndex==3|rightIndex==3)
		switch(scoreL){
			case 0:
			var OpenWindow = window.open("tapping.html", "mywin", '');
            OpenWindow.init();
			break;
			case 1:
			var OpenWindow = window.open("yawn.html", "mywin", '');
            OpenWindow.init();
			break;
			case 2:
			var OpenWindow = window.open("sigh.html", "mywin", '');
            OpenWindow.init();
			break;
			case 3:
			var OpenWindow = window.open("throat.html", "mywin", '');
            OpenWindow.init();
			break;
		}
	}
});
