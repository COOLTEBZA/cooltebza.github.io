/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function secFunction() {
 document.getElementById("secDropdown").classList.toggle("show");
}

function setFunction() {
   var downiconarrow = document.getElementById("output");
      downiconarrow.innerHTML = '<span class="fa fa-gear " onclick="letFunction()"> Settings <span class="fa fa-chevron-circle-up"></span>';
}
function letFunction() {
   var upiconarrow = document.getElementById("output");
      upiconarrow.innerHTML = '<span class="fa fa-gear " onclick="setFunction()"> Settings <span class="fa fa-chevron-circle-down"></span>';
}


function set1Function() {
   var downiconarrow1 = document.getElementById("output1");
      downiconarrow1.innerHTML = '<span class="fa fa-exclamation" onclick="let1Function()"> Information <span class="fa fa-chevron-circle-up"></span>';
}
function let1Function() {
   var upiconarrow1 = document.getElementById("output1");
      upiconarrow1.innerHTML = '<span class="fa fa-exclamation" onclick="set1Function()"> Information <span class="fa fa-chevron-circle-down"></span>';
}

	
function filterFunction() {
	
  var input, filter, ul, li, a, i;
  input = document.getElementById("secInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("secDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}