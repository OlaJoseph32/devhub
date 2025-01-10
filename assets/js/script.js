
// Mobile screen hamburger menu
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const listItems = nav.querySelectorAll('li');

function navToggle() {
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll')
    // document.body.classList.toggle('hidden')
}
btn.addEventListener('click', navToggle);
// Close the menu when any list item inside the menu is clicked
listItems.forEach((listItem) => {
    listItem.addEventListener('click', () => {
        if (!nav.classList.contains('hidden')) {
            btn.classList.remove('open');
            nav.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }
    });
});

// SMooth scroll intoview
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    }); 
});


// FAQ Accordion
document.addEventListener('DOMContentLoaded', function () {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', function (e) {
        const groupHeader = e.target.closest('.faq-group-header');

        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');
        
        // Toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle visibility of Body
        groupBody.classList.toggle('open');



        // Slide toggle the FAQ body
        if (groupBody.style.maxHeight) {
            // If open, close it
            groupBody.style.maxHeight = null;
        } else {
            // If closed, open it
            groupBody.style.maxHeight = groupBody.scrollHeight + "px";
        }



        // CLose other open FAQ bodies
        const otherGroups = faqContainer.querySelectorAll('.faq-group');
        otherGroups.forEach(function (otherGroup) {
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');


                otherGroupBody.style.maxHeight = null;
                
                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });    

    });
});



// Show the button when scrolling down
const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


// hamburger menu
/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
  
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}







