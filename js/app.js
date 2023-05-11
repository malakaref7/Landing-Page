/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

//create array contains all the sections in the document
const sections = Array.from(document.querySelectorAll("section"));
const navMenu = document.getElementById("navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//function that add the sections
function addSections() {
    for (let section of sections) {
      const sectionName = section.getAttribute("data-nav");
      const sectionLink = section.getAttribute("id");
      const sectionItem = document.createElement("li");
      
      //will add to the item it's link that refer to it and the section name
      sectionItem.innerHTML = `<a class = 'menu__link'>${sectionName}</a>`;
  
      sectionItem.addEventListener("click", function () {
        section.scrollIntoView({ behavior: "smooth" });
      });
      //add the section to the navigation bar
  
      navMenu.appendChild(sectionItem);
    }
  }


//determines if the section is in viewport
function isInViewPort(element) {
    //the method element.getBoundingClientRect() provides the element's position and it's relative position to the viewport
    let sectionPos = element.getBoundingClientRect();
    return (
        sectionPos.top > 0 &&
        sectionPos.top < 250 
    );
}

//gives the section being viewed it's distinguished styling
function styling(){
    for (section of sections){
        //if the section in the viewport
        if(isInViewPort(section)) {
            //check if it doesn't contain "your-active-class"
            if(!section.classList.contains("your-active-class")) {
                //then we will add it
                section.classList.add("your-active-class");
            }
        } else{ //if it's not in the viewport then remove "your-active-class"
            section.classList.remove("your-active-class");
        }
    }
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
addSections();

// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", styling);


// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


