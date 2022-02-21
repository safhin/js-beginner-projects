const wrapper = document.querySelector('.wrapper');
const btnLeft = document.querySelector('#slideLeft');
const btnRight = document.querySelector('#slideRight');
const btns = document.querySelectorAll('.btn');

var count = 0;
const images = [
    {
        "image" : "url('/img/3.jpg')",
    },
    {
        "image" : "url('/img/2.jpg')",
    },
    {
        "image" : "url('/img/3.jpg')",
    },
    {
        "image" : "url('/img/4.jpg')",
    },
];
btns.forEach(function(button){
    button.addEventListener('click', function(){
        if(button.classList.contains('btn-left')){
            count--;
            if(count < 0){
                count = images.length - 1;
            }
            wrapper.style.backgroundImage = images[count]['image'];
        };
        if(button.classList.contains('btn-right')){
            count++;
            if(count >= images.length){
                count = 0;
            }
            wrapper.style.backgroundImage = images[count]['image'];
        };
    });
});