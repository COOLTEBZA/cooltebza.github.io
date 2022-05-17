          function searchBtn(){
			   
		   
		  var search1 = document.getElementById('search');
		var v = document.getElementById('center');
           switch (search1.value.toLowerCase()) {
			case a1:
			
			v.innerHTML = b1;
			break;
			
			case a2:
			
			v.innerHTML = b2;
			break;
			
			case a3:
			
			v.innerHTML = b3;
			break;



		   default: v.innerHTML = 'nothing'; 
			break;
           }
		   
           }
		   
		  
	   
function textAwait(){
	 var x = document.getElementById('search').value.toLowerCase();


var textFound = [`<button onclick="document.getElementById('search').value = '${a1}';">${a1}</button>`, 
`<button onclick="document.getElementById('search').value = '${a2}';">${a2}</button>`,
`<button onclick="document.getElementById('search').value = '${a3}';">${a3}</button>`,
`<button onclick="document.getElementById('search').value = '${a4}';">${a4}</button>`,
`<button onclick="document.getElementById('search').value = '${a5}';">${a5}</button>`
];


if(x == a1c[0] || 
x == a1c[1] || 
x == a1c[2] || 
x == a1c[3] || 
x == a1c[4] 
){
document.getElementById('searchedText').innerHTML = textFound[0];
}else if(x == a2){
document.getElementById('searchedText').innerHTML = textFound[1];
}else if(x == a3){
document.getElementById('searchedText').innerHTML = textFound[2];
}
else if(x == a4){
document.getElementById('searchedText').innerHTML = textFound[3];
}
else if(x == a5){
document.getElementById('searchedText').innerHTML = textFound[4];
}
else
if(x == ""){
document.getElementById('searchedText').innerHTML = ""; console.log("empty");
}else{
document.getElementById('searchedText').innerHTML = ""; console.log("empty");
}
}
