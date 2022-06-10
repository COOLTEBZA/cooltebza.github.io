          function searchBtn(){
			  
		   
		  var search1 = document.getElementById('search');
		var v = document.getElementById('center');
		var c = document.getElementById('numPage');
		var t = document.getElementById('title');

           switch (search1.value.toLowerCase()) {
			case a1c[0]: 
			v.innerHTML = b1;

c.innerHTML = 'Page(0) ['+a1c[0]+']';
t.innerHTML = "Cooltebza | "+a1a;
			break;
			
			case a2c[0]:
			v.innerHTML = b2;
			
c.innerHTML = 'Page(1) ['+a2c[0]+']';
t.innerHTML = "Cooltebza | "+a2a;
			break;
			
			
			case a3c[0]: 
			v.innerHTML = b3;
			
c.innerHTML = 'Page(2) ['+a3c[0]+']';
t.innerHTML = "Cooltebza | "+a3a;funcDic1()
			break;
			
			case a4c[0]:
			v.innerHTML = b4;
			

c.innerHTML = 'Page(3) ['+a4c[0]+']';
t.innerHTML = "Cooltebza | "+a4a;
			break;
			
			case a5c[0]: 
			v.innerHTML = b5;
			
c.innerHTML = 'Page(4) ['+a5c[0]+']';
t.innerHTML = "Cooltebza | "+a5a;
			break;
			

		   default: v.innerHTML = 'nothing'; 
			break;
           }
		   
           }
		   
		  
	   
function textAwait(){
	 var x = document.getElementById('search').value.toLowerCase();


var textFound = [`<button style="width: 100%;" onclick="document.getElementById('search').value = '${a1}';">${a1}</button>`, 
`<button style="width: 100%;" onclick="document.getElementById('search').value = '${a2}';">${a2}</button>`,
`<button style="width: 100%;" onclick="document.getElementById('search').value = '${a3}';">${a3}</button>`,
`<button style="width: 100%;" onclick="document.getElementById('search').value = '${a4}';">${a4}</button>`,
`<button style="width: 100%;" onclick="document.getElementById('search').value = '${a5}';">${a5}</button>`
];

var alph = ["a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
if(x == a1c[0] || 
x == a1c[1] || 
x == a1c[2] || 
x == a1c[3] || 
x == a1c[4] 
){
document.getElementById('searchedText').innerHTML = textFound[0];
}else if(x == a2c[0] || 
x == a2c[1] || 
x == a2c[2] || 
x == a2c[3]){
document.getElementById('searchedText').innerHTML = textFound[1];
}else if(x == a3c[0] || 
x == a3c[1] || 
x == a3c[2] || 
x == a3c[3] || 
x == a3c[4] ||
x == a3c[5] || 
x == a3c[6] || 
x == a3c[7] || 
x == a3c[8]|| 
x == a3c[9]){
document.getElementById('searchedText').innerHTML = textFound[2];
}
else if(x == a4c[0] || 
x == a4c[1] || 
x == a4c[2] || 
x == a4c[3] || 
x == a4c[4] || 
x == a4c[5] || 
x == a4c[6]){
document.getElementById('searchedText').innerHTML = textFound[3];
}
else if(x == a5c[0] || 
x == a5c[1] || 
x == a5c[2] || 
x == a5c[3]){
document.getElementById('searchedText').innerHTML = textFound[4];
}
//alph

else if(x == alph[0]){
document.getElementById('searchedText').innerHTML = textFound[4]+textFound[2]+textFound[3];
}else if(x == alph[1]){
document.getElementById('searchedText').innerHTML = textFound[4];
}else if(x == alph[2]){
document.getElementById('searchedText').innerHTML = textFound[2]+textFound[3];
}else if(x == alph[3]){
document.getElementById('searchedText').innerHTML = textFound[2];
}else if(x == alph[4]){
document.getElementById('searchedText').innerHTML = textFound[0]+textFound[1];
}else if(x == alph[5]){
document.getElementById('searchedText').innerHTML = "";
}else if(x == alph[6]){
document.getElementById('searchedText').innerHTML = "";
}else if(x == alph[7]){
document.getElementById('searchedText').innerHTML = textFound[0];//h
}else if(x == alph[8]){
document.getElementById('searchedText').innerHTML = textFound[2];//i
}else if(x == alph[9]){
document.getElementById('searchedText').innerHTML = "";
}else if(x == alph[10]){
document.getElementById('searchedText').innerHTML = "";//k
}else if(x == alph[11]){
document.getElementById('searchedText').innerHTML = "";
}else if(x == alph[12]){
document.getElementById('searchedText').innerHTML = textFound[0];//m
}else if(x == alph[13]){
document.getElementById('searchedText').innerHTML = textFound[1]+textFound[2]+textFound[3];//n
}else if(x == alph[14]){
document.getElementById('searchedText').innerHTML = textFound[0]+textFound[2]+textFound[3]+textFound[4];//o
}else if(x == alph[15]){
document.getElementById('searchedText').innerHTML = "";//p
}else if(x == alph[16]){
document.getElementById('searchedText').innerHTML = "";
}else if(x == alph[17]){
document.getElementById('searchedText').innerHTML = textFound[2];
}else if(x == alph[18]){
document.getElementById('searchedText').innerHTML = textFound[1];
}else if(x == alph[19]){
document.getElementById('searchedText').innerHTML = textFound[2]+textFound[3]+textFound[4];//t
}else if(x == alph[20]){
document.getElementById('searchedText').innerHTML = textFound[4];
}else if(x == alph[21]){
document.getElementById('searchedText').innerHTML = "";
}else if(x == alph[22]){
document.getElementById('searchedText').innerHTML = textFound[1];//w
}else if(x == alph[23]){
document.getElementById('searchedText').innerHTML = "";
}else if(x == alph[24]){
document.getElementById('searchedText').innerHTML = textFound[2];
}else if(x == alph[25]){
document.getElementById('searchedText').innerHTML = "";//z
}
else
if(x == ""){
document.getElementById('searchedText').innerHTML = ""; console.log("empty");
}else{
document.getElementById('searchedText').innerHTML = ""; console.log("empty");
}
}

var vvv = [b1,b2,b3,b4,b5];
var vvv1 = [a1a,a2a,a3a,a4a,a5a];

var zer0 = 0;

function ccvv1(){
var zer0 = localStorage.pagBtns0;
var d = localStorage.pagBtns0;
var z = parseInt(d);
var v1 = document.getElementById('center');
v1.innerHTML = vvv1[z]+"<br>"+vvv[z];
if(z == 2){funcDic1();}else{}
var c = document.getElementById('numPage');
c.innerHTML = 'Page('+z+') ['+vvv1[z]+']';
var t = document.getElementById('title');
t.innerHTML = "Cooltebza | "+vvv1[z];
}
function next1(){
	var numP1 = document.getElementById('numPage').innerHTML;
	

if(numP1 == 'Page(0) [Home]'){c_news();}else
if(numP1 == 'Page(1) [News]'){c_dictionary();}else
if(numP1 == 'Page(3) [Contact]'){c_about();}else
if(numP1 == 'Page(4) [About]'){c_home();}else
if(numP1 == 'Page(2) [Dictionary]'){c_contact();}

	
}
function prev1(){
	var numP1 = document.getElementById('numPage').innerHTML;
	
if(numP1 == 'Page(0) [Home]'){c_about();}else	
if(numP1 == 'Page(1) [News]'){c_home();}	else	
if(numP1 == 'Page(2) [Dictionary]'){c_news();}else	
if(numP1 == 'Page(3) [Contact]'){c_dictionary();}else	
if(numP1 == 'Page(4) [About]'){c_contact();}



}








/*


theme(dark/light)
color(all)



function next1(){
	var numP1 = document.getElementById('numPage').innerHTML;
	




if(numP1 == 'Page(0) [Home]'){c_news();}
if(numP1 == 'Page(1) [News]'){c_contact();}
if(numP1 == 'Page(3) [Contact]'){c_about();}
if(numP1 == 'Page(4) [About]'){c_dictionary();}
if(numP1 == 'Page(2) [Dictionary]'){c_home();}
	if(localStorage.pagBtns0 == 4 && zer0 == 4){
	
}else{zer0++;
localStorage.pagBtns0 = zer0;
var d = localStorage.pagBtns0;
var z = parseInt(d);
var v1 = document.getElementById('center');
v1.innerHTML = vvv1[z]+"<br>"+vvv[z];
if(z == 2){funcDic1();}else{}
var c = document.getElementById('numPage');
c.innerHTML = 'Page('+z+') ['+vvv1[z]+']';
var t = document.getElementById('title');
t.innerHTML = "Cooltebza | "+vvv1[z];
}
	
}
function prev1(){
	var numP1 = document.getElementById('numPage').innerHTML;
	
if(numP1 == 'Page(0) [Home]'){c_dictionary();}else	
if(numP1 == 'Page(1) [News]'){c_home();}	else	
if(numP1 == 'Page(3) [Contact]'){c_news();}else		
if(numP1 == 'Page(4) [About]'){c_contact();}	else	
if(numP1 == 'Page(2) [Dictionary]'){c_about();}






if(localStorage.pagBtns0 == 0 && zer0 == 0){
	
}else {
	zer0--; localStorage.pagBtns0 = zer0;
var d = localStorage.pagBtns0;
var z = parseInt(d);
var v1 = document.getElementById('center');
v1.innerHTML = vvv1[z]+"<br>"+vvv[z];
if(z == 2){funcDic1();}else{}
var c = document.getElementById('numPage');
c.innerHTML = 'Page('+z+') ['+vvv1[z]+']';
var t = document.getElementById('title');
t.innerHTML = "Cooltebza | "+vvv1[z];

}

}

*/

