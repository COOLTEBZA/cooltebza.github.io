var showBtn = [
"<li class='li'><button id='SignLanguage' class='lang'>Sign Language</button></li>",   
"<li class='li'><button id='ZuluLanguage' class='lang'>Zulu</button></li>",
"<li class='li'><button id='SepediLanguage' class='lang'>SePedi(Northern Sotho)</button></li>", 
"<li class='li'><button id='ShanganeLanguage' class='lang'>Shangane(Tsonga)</button></li>",  
"<li class='li'><button id='NdebeleLanguage' class='lang'>Ndebele</button></li>",
"<li class='li'><button id='AfrikaansLanguage' class='lang'>Afrikaans</button></li>",
"<li class='li'><button id='SothoLanguage' class='lang'>Sotho(Southern Sotho)</button></li>",  
"<li class='li'><button id='TswanaLanguage' class='lang'>Tswana</button></li>", 
"<li class='li'><button id='XhosaLanguage' class='lang'>Xhosa</button></li>",
"<li class='li'><button id='SwatiLanguage' class='lang'>Swati</button></li>",  
"<li class='li'><button id='VendaLanguage' class='lang'>Venda</button></li>", 
"<li class='li'><button id='KhoisanLanguage' class='lang'>Khoisan</button></li>", 
"<li class='li'><button id='EnglishLanguage' class='lang'>English</button></li>",
"<li class='li'><button id='OtherLanguages' class='lang'>Other</button></li>" 
];

for(var i = 0; i < 14; i++){
    document.getElementById("loadBtns").innerHTML += showBtn[i];  
      }


let langBtn0 = document.getElementById("SignLanguage");
let langBtn1 = document.getElementById("ZuluLanguage");
let langBtn2 = document.getElementById("SepediLanguage");
let langBtn3 = document.getElementById("ShanganeLanguage");
let langBtn4 = document.getElementById("NdebeleLanguage");
let langBtn5 = document.getElementById("AfrikaansLanguage");
let langBtn6 = document.getElementById("SothoLanguage");
let langBtn7 = document.getElementById("TswanaLanguage");
let langBtn8 = document.getElementById("XhosaLanguage");
let langBtn9 = document.getElementById("SwatiLanguage");
let langBtn10 = document.getElementById("VendaLanguage");
let langBtn11 = document.getElementById("KhoisanLanguage");
let langBtn12 = document.getElementById("EnglishLanguage");
let langBtn13 = document.getElementById("OtherLanguages");

if(localStorage.langStored == "Sign" ){
	langBtn0.className = localStorage.langStored;
}else{}
if(localStorage.langStored == "Zulu"){
	langBtn1.className = localStorage.langStored;
}
if(localStorage.langStored == "SePedi"){
	langBtn2.className = localStorage.langStored;
} 
if(localStorage.langStored == "Shangane"){
	langBtn3.className = localStorage.langStored;
}
if(localStorage.langStored == "Ndebele"){
	langBtn4.className = localStorage.langStored;
}
if(localStorage.langStored == "Afrikaans"){
	langBtn5.className = localStorage.langStored;
}
if(localStorage.langStored == "Sotho"){
	langBtn6.className = localStorage.langStored;
}
if(localStorage.langStored == "Tswana" ){
	langBtn7.className = localStorage.langStored;
}
if(localStorage.langStored == "Xhosa"){
	langBtn8.className = localStorage.langStored;
}
if(localStorage.langStored == "Swati"){
	langBtn9.className = localStorage.langStored;
}  
if(localStorage.langStored == "Venda" ){
	langBtn10.className = localStorage.langStored;
}
if(localStorage.langStored == "Khoisan"){
	langBtn11.className = localStorage.langStored;
}
if(localStorage.langStored == "English"){
	langBtn12.className = localStorage.langStored;
}
if(localStorage.langStored == "other"){
	langBtn13.className = localStorage.langStored;
}



langBtn0.addEventListener("click", function(){
  
  localStorage.langStored = "Sign"; 
  langBtn0.className = localStorage.langStored;
 langBtn1.className= 'lang';
 langBtn2.className= 'lang';
 langBtn3.className= 'lang';
 langBtn4.className= 'lang';
 langBtn5.className= 'lang';
 langBtn6.className= 'lang';
 langBtn7.className= 'lang';
 langBtn8.className= 'lang';
 langBtn9.className= 'lang';
 langBtn10.className= 'lang';
 langBtn11.className= 'lang';
 langBtn12.className= 'lang';
 langBtn13.className= 'lang';
} );
langBtn1.addEventListener("click", function(){
  localStorage.langStored = "Zulu"; 
  langBtn1.className = localStorage.langStored;
 
 langBtn0.className= 'lang';
 langBtn2.className= 'lang';
 langBtn3.className= 'lang';
 langBtn4.className= 'lang';
 langBtn5.className= 'lang';
 langBtn6.className= 'lang';
 langBtn7.className= 'lang';
 langBtn8.className= 'lang';
 langBtn9.className= 'lang';
 langBtn10.className= 'lang';
 langBtn11.className= 'lang';
 langBtn12.className= 'lang';
 langBtn13.className= 'lang';

} );
langBtn2.addEventListener("click", function(){
  localStorage.langStored = "SePedi";  
  langBtn2.className = localStorage.langStored;
 langBtn0.className = 'lang';
 langBtn1.className= 'lang';

 langBtn3.className= 'lang';
 langBtn4.className= 'lang';
 langBtn5.className= 'lang';
 langBtn6.className= 'lang';
 langBtn7.className= 'lang';
 langBtn8.className= 'lang';
 langBtn9.className= 'lang';
 langBtn10.className= 'lang';
 langBtn11.className= 'lang';
 langBtn12.className= 'lang';
 langBtn13.className= 'lang';
} );
langBtn3.addEventListener("click", function(){
  localStorage.langStored = "Shangane"; 
  langBtn3.className = localStorage.langStored;
 langBtn0.className = 'lang';
 langBtn1.className= 'lang';
 langBtn2.className= 'lang';

 langBtn4.className= 'lang';
 langBtn5.className= 'lang';
 langBtn6.className= 'lang';
 langBtn7.className= 'lang';
 langBtn8.className= 'lang';
 langBtn9.className= 'lang';
 langBtn10.className= 'lang';
 langBtn11.className= 'lang';
 langBtn12.className= 'lang';
 langBtn13.className= 'lang';
} );
langBtn4.addEventListener("click", function(){
  localStorage.langStored = "Ndebele"; 
  langBtn4.className = localStorage.langStored;
langBtn0.className = 'lang';
 langBtn1.className= 'lang';
 langBtn2.className= 'lang';
 langBtn3.className= 'lang';

 langBtn5.className= 'lang';
 langBtn6.className= 'lang';
 langBtn7.className= 'lang';
 langBtn8.className= 'lang';
 langBtn9.className= 'lang';
 langBtn10.className= 'lang';
 langBtn11.className= 'lang';
 langBtn12.className= 'lang';
 langBtn13.className= 'lang';
} );
langBtn5.addEventListener("click", function(){
  localStorage.langStored = "Afrikaans"; 
  langBtn5.className = localStorage.langStored;
langBtn0.className = 'lang';
 langBtn1.className= 'lang';
 langBtn2.className= 'lang';
 langBtn3.className= 'lang';
 langBtn4.className= 'lang';
 langBtn6.className= 'lang';
 langBtn7.className= 'lang';
 langBtn8.className= 'lang';
 langBtn9.className= 'lang';
 langBtn10.className= 'lang';
 langBtn11.className= 'lang';
 langBtn12.className= 'lang';
 langBtn13.className= 'lang';
} );
langBtn6.addEventListener("click", function(){
  localStorage.langStored = "Sotho"; 
  langBtn6.className = localStorage.langStored;
langBtn0.className = 'lang';
 langBtn1.className= 'lang';
 langBtn2.className= 'lang';
 langBtn3.className= 'lang';
 langBtn4.className= 'lang';
 langBtn5.className= 'lang';

 langBtn7.className= 'lang';
 langBtn8.className= 'lang';
 langBtn9.className= 'lang';
 langBtn10.className= 'lang';
 langBtn11.className= 'lang';
 langBtn12.className= 'lang';
 langBtn13.className= 'lang';
} );
langBtn7.addEventListener("click", function(){
  localStorage.langStored = "Tswana";  
  langBtn7.className = localStorage.langStored;
langBtn0.className = 'lang';
 langBtn1.className= 'lang';
 langBtn2.className= 'lang';
 langBtn3.className= 'lang';
 langBtn4.className= 'lang';
 langBtn5.className= 'lang';
 langBtn6.className= 'lang';
 langBtn8.className= 'lang';
 langBtn9.className= 'lang';
 langBtn10.className= 'lang';
 langBtn11.className= 'lang';
 langBtn12.className= 'lang';
 langBtn13.className= 'lang';
} );
langBtn8.addEventListener("click", function(){
  localStorage.langStored = "Xhosa"; 
  langBtn8.className = localStorage.langStored;
 langBtn0.className = 'lang';
 langBtn1.className= 'lang';
 langBtn2.className= 'lang';
 langBtn3.className= 'lang';
 langBtn4.className= 'lang';
 langBtn5.className= 'lang';
 langBtn6.className= 'lang';
 langBtn7.className= 'lang';
 langBtn9.className= 'lang';
 langBtn10.className= 'lang';
 langBtn11.className= 'lang';
 langBtn12.className= 'lang';
 langBtn13.className= 'lang';
} );
langBtn9.addEventListener("click", function(){
  localStorage.langStored = "Swati"; 
  langBtn9.className = localStorage.langStored;  
langBtn0.className = 'lang';
 langBtn1.className= 'lang';
 langBtn2.className= 'lang';
 langBtn3.className= 'lang';
 langBtn4.className= 'lang';
 langBtn5.className= 'lang';
 langBtn6.className= 'lang';
 langBtn7.className= 'lang';
 langBtn8.className= 'lang';

 langBtn10.className= 'lang';
 langBtn11.className= 'lang';
 langBtn12.className= 'lang';
 langBtn13.className= 'lang';
} );
langBtn10.addEventListener("click", function(){
  localStorage.langStored = "Venda";  
  langBtn10.className = localStorage.langStored;
 langBtn0.className = 'lang';
 langBtn1.className= 'lang';
 langBtn2.className= 'lang';
 langBtn3.className= 'lang';
 langBtn4.className= 'lang';
 langBtn5.className= 'lang';
 langBtn6.className= 'lang';
 langBtn7.className= 'lang';
 langBtn8.className= 'lang';
 langBtn9.className= 'lang';
 langBtn11.className= 'lang';
 langBtn12.className= 'lang';
 langBtn13.className= 'lang';
} );
langBtn11.addEventListener("click", function(){
  localStorage.langStored = "Khoisan"; 
  langBtn11.className = localStorage.langStored;
 langBtn0.className = 'lang';
 langBtn1.className= 'lang';
 langBtn2.className= 'lang';
 langBtn3.className= 'lang';
 langBtn4.className= 'lang';
 langBtn5.className= 'lang';
 langBtn6.className= 'lang';
 langBtn7.className= 'lang';
 langBtn8.className= 'lang';
 langBtn9.className= 'lang';
 langBtn10.className= 'lang';
 langBtn12.className= 'lang';
 langBtn13.className= 'lang';
} );
langBtn12.addEventListener("click", function(){
  localStorage.langStored = "English"; 
  langBtn12.className = localStorage.langStored;
langBtn0.className = 'lang';
 langBtn1.className= 'lang';
 langBtn2.className= 'lang';
 langBtn3.className= 'lang';
 langBtn4.className= 'lang';
 langBtn5.className= 'lang';
 langBtn6.className= 'lang';
 langBtn7.className= 'lang';
 langBtn8.className= 'lang';
 langBtn9.className= 'lang';
 langBtn10.className= 'lang';
 langBtn11.className= 'lang';
 langBtn13.className= 'lang';
} );
langBtn13.addEventListener("click", function(){
 
 localStorage.langStored = "other"; 
  langBtn13.className = localStorage.langStored;
  langBtn0.className = 'lang';
 langBtn1.className= 'lang';
 langBtn2.className= 'lang';
 langBtn3.className= 'lang';
 langBtn4.className= 'lang';
 langBtn5.className= 'lang';
 langBtn6.className= 'lang';
 langBtn7.className= 'lang';
 langBtn8.className= 'lang';
 langBtn9.className= 'lang';
 langBtn10.className= 'lang';
 langBtn11.className= 'lang';
 langBtn12.className= 'lang';

} );

