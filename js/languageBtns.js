for(var i = 0; i < 14; i++){
    document.getElementById("loadBtns").innerHTML += showBtn[i];  
      }

var showBtn = [
"<button id='SignLanguage'>Sign Language</button>",   
"<button id='ZuluLanguage'>Zulu</button>",
"<button id='SepediLanguage'>SePedi(Northern Sotho)</button>", 
"<button id='ShanganeLanguage'>Shangane(Tsonga)</button>",  
"<button id='NdebeleLanguage'>Ndebele</button>",
"<button id='AfrikaansLanguage'>Afrikaans</button>",
"<button id='SothoLanguage'>Sotho(Southern Sotho)</button>",  
"<button id='TswanaLanguage'>Tswana</button>", 
"<button id='XhosaLanguage'>Xhosa</button>",
"<button id='SwatiLanguage'>Swati</button>",  
"<button id='VenḓaLanguage'>Venḓa</button>", 
"<button id='KhoisanLanguage'>Khoisan</button>", 
"<button id='EnglishLanguage'>English</button>",
"<button id='OtherLanguages'>Other</button>" 
];
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
let langBtn10 = document.getElementById("VenḓaLanguage");
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
if(localStorage.langStored == "Venḓa" ){
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
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn1.addEventListener("click", function(){
  localStorage.langStored = "Zulu"; 
  langBtn1.className = localStorage.langStored;
 
 langBtn0.removeAttribute('class', 'Sign');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');


} );
langBtn2.addEventListener("click", function(){
  localStorage.langStored = "SePedi";  
  langBtn2.className = localStorage.langStored;
 langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn3.addEventListener("click", function(){
  localStorage.langStored = "Shangane"; 
  langBtn3.className = localStorage.langStored;
 langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn4.addEventListener("click", function(){
  localStorage.langStored = "Ndebele"; 
  langBtn4.className = localStorage.langStored;
 langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn5.addEventListener("click", function(){
  localStorage.langStored = "Afrikaans"; 
  langBtn5.className = localStorage.langStored;
 langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn6.addEventListener("click", function(){
  localStorage.langStored = "Sotho"; 
  langBtn6.className = localStorage.langStored;
 langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn7.addEventListener("click", function(){
  localStorage.langStored = "Tswana";  
  langBtn7.className = localStorage.langStored;
 langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn8.addEventListener("click", function(){
  localStorage.langStored = "Xhosa"; 
  langBtn8.className = localStorage.langStored;
 langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn9.addEventListener("click", function(){
  localStorage.langStored = "Swati"; 
  langBtn9.className = localStorage.langStored;  
 langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn10.addEventListener("click", function(){
  localStorage.langStored = "Venḓa";  
  langBtn10.className = localStorage.langStored;
 langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn11.addEventListener("click", function(){
  localStorage.langStored = "Khoisan"; 
  langBtn11.className = localStorage.langStored;
 langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn12.removeAttribute('class', 'English');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn12.addEventListener("click", function(){
  localStorage.langStored = "English"; 
  langBtn12.className = localStorage.langStored;
   langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn13.removeAttribute('class', 'other');
} );
langBtn13.addEventListener("click", function(){
 
 localStorage.langStored = "other"; 
  langBtn13.className = localStorage.langStored;
  langBtn0.removeAttribute('class', 'Sign');
 langBtn1.removeAttribute('class', 'Zulu');
 langBtn2.removeAttribute('class', 'SePedi');
 langBtn3.removeAttribute('class', 'Shangane');
 langBtn4.removeAttribute('class', 'Ndebele');
 langBtn5.removeAttribute('class', 'Afrikaans');
 langBtn6.removeAttribute('class', 'Sotho');
 langBtn7.removeAttribute('class', 'Tswana');
 langBtn8.removeAttribute('class', 'Xhosa');
 langBtn9.removeAttribute('class', 'Swati');
 langBtn10.removeAttribute('class', 'Venḓa');
 langBtn11.removeAttribute('class', 'Khoisan');
 langBtn12.removeAttribute('class', 'English');

} );
