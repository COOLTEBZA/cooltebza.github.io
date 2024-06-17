// script.js
document.addEventListener('DOMContentLoaded', function() {
   var dropdown = document.querySelector('.dropdown');
   var toggleDropdown = function(event) {
       var dropdownContent = dropdown.querySelector('.dropdown-content');
       dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
       event.stopPropagation();
   };
   
   // Add both click and touchstart event listeners for dropdown
   dropdown.addEventListener('click', toggleDropdown);
   dropdown.addEventListener('touchstart', toggleDropdown);

   // Close the dropdown if the user clicks or touches outside of it
   var closeDropdowns = function(event) {
       if (!event.target.matches('.dropbtn')) {
           var dropdowns = document.getElementsByClassName("dropdown-content");
           for (var i = 0; i < dropdowns.length; i++) {
               var openDropdown = dropdowns[i];
               if (openDropdown.style.display === 'block') {
                   openDropdown.style.display = 'none';
               }
           }
       }
   };

   window.addEventListener('click', closeDropdowns);
   window.addEventListener('touchstart', closeDropdowns);
});

var logo_ = document.getElementById('logo');
logo_.src=c_logo;
// script.js
document.addEventListener('DOMContentLoaded', function() {
    var countdownTimer = document.getElementById('countdown-timer');
    
    // Set the date we're counting down to
    var countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
        
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result in the element with id="countdown-timer"
        countdownTimer.innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
        
        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            countdownTimer.innerHTML = "EXPIRED";
        }
    }, 1000);
});
