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
/*alert("welom marwa");

/**
 * Define Global Variables
 * 
*/
let sectionsList = document.querySelectorAll('section')

let navList = document.getElementById('navbar__list');

let items=document.querySelectorAll('a');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


const sections = Array.from(document.getElementsByTagName("section"));
for (section of sections) {
    let navBarItem= document.createElement("li");

    let sectionid = section .getAttribute('id');
    
    const newLocal = "<a class='menu__link' href= #"+sectionid+">"+section.getAttribute('data-nav')+"</a>";
    navBarItem.innerHTML=newLocal
    navList.appendChild(navBarItem);
  }
 
 


// Build menu 

// Scroll to section on link click
document.addEventListener('scroll',function(e){
    sectionsList.forEach(function(section){
        let rec=section.getBoundingClientRect();
        section.classList.remove('your-active-class');
        if(rec.top>=0 && rec.bottom <= 1000 ){
            section.classList.add('your-active-class');
        }
      
        
            
 

              items.forEach(function(items){
              item.classList.remove("activemenu__link");

              sectionsList.forEach(function(section){
            
                let activelink=section.getAttribute('data-nav');

                if(item.textContent== activelink&&section.classList("your-active-class")){
    
                    item.classList.add("activemenu__link");}
                   


                      }
        

        )
             
    })
  })})
   
   


   

        