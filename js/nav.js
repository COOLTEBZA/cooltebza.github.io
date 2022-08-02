var dropdowns = document.getElementsByClassName("dropdown-content");
var dropdowns1 = document.getElementsByClassName("dropdown1-content");
var dropdowns2 = document.getElementsByClassName("dropdown2-content");
var dropdowns3 = document.getElementsByClassName("dropdown3-content");
var dropdowns4 = document.getElementsByClassName("dropdown4-content");

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function my1Function() {
    document.getElementById("myDropdown1").classList.toggle("show");
}

function my2Function() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

function my3Function() {
    document.getElementById("myDropdown3").classList.toggle("show");
}

function my4Function() {
	
   var x = document.getElementById("myDropdown4")
	x.classList.toggle("show");
	
}




window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!e.target.matches('.dropbtn1')) {
        var i;
        for (i = 0; i < dropdowns1.length; i++) {
            var openDropdown = dropdowns1[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }

        }
    }
    if (!e.target.matches('.dropbtn2')) {
        var i;
        for (i = 0; i < dropdowns2.length; i++) {
            var openDropdown = dropdowns2[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
	if (!e.target.matches('.dropbtn3')) {
        var i;
        for (i = 0; i < dropdowns3.length; i++) {
            var openDropdown = dropdowns3[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
	
}


function settings4(){
if (!e.target.matches('.dropbtn4')) {
        var i;
        for (i = 0; i < dropdowns4.length; i++) {
            var openDropdown = dropdowns4[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
