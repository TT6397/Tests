const menuBtn = document.querySelector('.menu-btn');

const menuItems = document.querySelector('.menu-items');
const menuItem = document.querySelectorAll('.menu-item');
/*
// scroll animation
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const sliders = document.querySelectorAll('.slide-in');

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader =>{
    appearOnScroll.observe(fader);
});

sliders.forEach(slider =>{
    appearOnScroll.observe(slider);
});
*/
//main toggle
menuBtn.addEventListener('click', () =>{
    toggle();
});

//toggle on item click if open
menuItem.forEach(item =>{
    item.addEventListener('click', () =>{
        if(menuBtn.classList.contains('open')){
            toggle();
        }
    });
});

function toggle(){
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
}