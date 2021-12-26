//ACTIVE STATE----------------------------------------------------------------------------------------------------------------
//Array that holds all sections in the page
const secArray = Array.from(document.querySelectorAll('section'));

//function to check if section is in view
function secInView(sec){
    let secY = sec.getBoundingClientRect();
    if(secY.top >= 0 && secY.bottom <= (window.innerHeight || document.documentElement.clientHeight)){
        return true;
    }
}

//function to give the currently viewed section a different style
function activeSectionStyle(){
    document.addEventListener('scroll', function(){
        for (sec of secArray){
            if (secInView(sec)){
                sec.className = 'your-active-class';
                break;
            }
            else{
                sec.classList.remove('your-active-class');
            }
        }
    });
}

activeSectionStyle();

//BUILDING NAV----------------------------------------------------------------------------------------------------------------

//function to add list items to the navbar dynamically
function addSection(){
    for (sec of secArray){
        //create list item to be inserted into the <ul>
        liElement = document.createElement('li');

        //store attributes for id and name of each section to be inserted into the <li> element
        sectionId = sec.getAttribute('id');
        sectionName = sec.getAttribute('data-nav');

        //add the list item text containing the anchors to every section (anchors were used to be able to scroll to sections)
        liElement.innerHTML = `<a class='menu__link' href='#${sectionId}'>${sectionName}</a>`;
        //add list item to the <ul>
        document.getElementById('navbar__list').appendChild(liElement);
    }
}

addSection();

