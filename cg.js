var colors=generate(6);
var j=document.querySelector(".jumbotron");
var pick=pickedcolor();
var bg=document.querySelector("body");
var col=bg.style.backgroundColor;
var dis=document.querySelector("#display");
var set=document.querySelector("#reset");
var boxs=document.querySelectorAll(".boxs");
var easy=document.querySelector(".easy");
var hard=document.querySelector(".hard");
var ta=document.querySelector("#ta");
var num=6;

dis.textContent=pick;

 set.addEventListener("click",function(){
 	if(num==3){
		hard.classList.add("selected");
		easy.classList.remove("selected");
		num==6;
 	}
  	reset(6);
  });


 for(var i=0;i<boxs.length;i++)
 {
    boxs[i].style.backgroundColor=colors[i];
	boxs[i].addEventListener("click",function(){
 	
 	  if(this.style.backgroundColor==pick)	
 	  	{
 	  		change();
 	  	}
 	   else
 	  {
 	  	  this.style.backgroundColor=col;
 	      ta.style.color="blue";
 	  }
 	}); 
 }

function change(){
	for(var k=0; k<boxs.length;k++)
 	  		{
 	  			boxs[k].style.backgroundColor=pick;
 	  		}
 	  ta.textContent="WINNER";
 	  ta.style.color=pick;
 	  set.textContent="PLAY AGAIN?"
 	  j.style.backgroundColor=pick;
}
function pickedcolor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];

}
function generate(num){
	var array=[];
	for(var i=0;i<num;i++)
	{
		array.push(random());
	}
	return array;
}

function random(){
	var red=Math.floor(Math.random()*256);
	var green=Math.floor(Math.random()*256);
	var blue=Math.floor(Math.random()*256);
   return "rgb(" + red + ", " + green + ", " + blue + ")" ; 
}

function reset(nu){
	colors=generate(nu);
	pick=pickedcolor();
	for(var i=0;i<nu;i++)
 {
    boxs[i].style.backgroundColor=colors[i];
    dis.textContent=pick;
 	set.textContent="NEW COLORS";
    ta.style.color="white";
    ta.textContent="TRY AGAIN";
 	j.style.backgroundColor="rgba(20,20,100, 0.8)";

 }

}

var hovered=document.querySelectorAll(".hovered");
for(var i=0;i<hovered.length;i++)
{
hovered[i].addEventListener("mouseover",function(){
	this.classList.add("hover");
});

hovered[i].addEventListener("mouseout",function(){
	this.classList.remove("hover");
 });
}


		easy.addEventListener("click",function(){
				 		 	easy.classList.add("selected");
		 					hard.classList.remove("selected");
		 					easymode();
		 }
		);
	
		hard.addEventListener("click",function(){
				 		 	hard.classList.add("selected");
		 					easy.classList.remove("selected");
		 					reset(6);
		 }
		);
	
	function easymode()
	{
		num=3;
		reset(3);
		for(var i=(boxs.length-1); i>=(1/2 * boxs.length);i--)
					boxs[i].style.backgroundColor="#eeeeff";
	}