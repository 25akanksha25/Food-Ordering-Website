
// profile dropdown
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}







document.addEventListener("DOMContentLoaded", function() {
    const slideshowParts = document.querySelectorAll(".slideshow-part");
    const radioButtons = document.querySelectorAll('input[name="slideshow-part"]');
    let currentIndex = 0;
    let timer;

    // Show the initial slideshow part
    showSlideshowPart(currentIndex);

    // Add event listeners to radio buttons
    radioButtons.forEach((radioButton, index) => {
        radioButton.addEventListener("change", function() {
            showSlideshowPart(index);
            resetTimer();
        });
    });

    // Start the timer
    startTimer();

    function showSlideshowPart(index) {
        // Hide all slideshow parts
        slideshowParts.forEach(part => {
            part.style.display = "none";
        });

        // Show the selected slideshow part
        slideshowParts[index].style.display = "flex";
        currentIndex = index;
    }

    function startTimer() {
        timer = setInterval(() => {
            currentIndex = (currentIndex + 1) % slideshowParts.length;
            showSlideshowPart(currentIndex);
        }, 3000); // Change 3000 to adjust the interval (in milliseconds)
    }

    function resetTimer() {
        clearInterval(timer);
        startTimer();
    }
});

// --------------------------------------------------------------

 // Initially show the first testimonial
 document.querySelector('.testimonial').style.display = 'block';

 function showFeedback(index) {
     // Hide all testimonials
     var testimonials = document.querySelectorAll('.testimonial');
     testimonials.forEach(function(testimonial) {
         testimonial.style.display = 'none';
     });

     // Show the selected testimonial
     testimonials[index].style.display = 'block';
 }


// ----------------------------------------------------------------


 const sliderWrapper = document.getElementById('sliderWrapper');

 let scrollInterval;

 // Auto scroll after every 2 seconds
 function autoScroll() {
   let currentScrollLeft = sliderWrapper.scrollLeft;
   const cardWidth = sliderWrapper.querySelector('.card').offsetWidth;

   if (currentScrollLeft >= sliderWrapper.scrollWidth - sliderWrapper.offsetWidth) {
     // If at the end, scroll to the start
     sliderWrapper.scrollTo({ left: 0, behavior: 'smooth' });
   } else {
     // Scroll to the next card
     sliderWrapper.scrollTo({ left: currentScrollLeft + cardWidth, behavior: 'smooth' });
   }
 }

 // Set an interval to auto scroll every 2 seconds
 function startAutoScroll() {
   scrollInterval = setInterval(autoScroll, 2000); // Change to 2000 for 2 seconds
 }

 // Start auto scrolling
 startAutoScroll();