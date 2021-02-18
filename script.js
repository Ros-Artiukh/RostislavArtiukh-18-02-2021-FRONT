let countGuests = document.getElementById('countGuests');
let fillGuests = document.getElementById('inputs');
let texts = document.getElementById('texts');
function generateInputs(num){
let containerInputs = "";
let containerTexts  = "";
	for (var i = 0; i < num; i++) {
		containerInputs += "<input placeholder='Name' class='name-"+ i +"' onkeyup='generateTexts(this.className)'></input><input placeholder='Surname' class='surname-"+ i +"' onkeyup='generateTexts(this.className)'></input>";
		containerTexts +="<div><span class='text-name-"+ i +"'></span><span class='text-surname-"+ i +"'></span></div>";
	}
	fillGuests.innerHTML = containerInputs;
	texts.innerHTML = containerTexts;
} 

function generateTexts(name){	
    	let val = document.querySelector('.' + name).value;
    	let text = document.querySelector('.text-'+ name);    	
		text.innerHTML = val;		
} 


