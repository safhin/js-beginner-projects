const wrapper = document.querySelector('.wrapper');
const btnLeft = document.querySelector('#slideLeft');
const btnRight = document.querySelector('#slideRight');
const btns = document.querySelectorAll('.btn');
const img = document.querySelector('#author-img');
const quoteDom = document.querySelector('#quote');

var count = 0;
const images = [
    {
        "author": "/img/user-2.jpg",
        "image" : "url('/img/3.jpg')",
        "quote" : "The price of anything is the amount of life you exchange for it."
    },
    {
        "author": "/img/user-3.jpg",
        "image" : "url('/img/2.jpg')",
        "quote" : "The price of anything is the amount of life you exchange for it."
    },
    {
        "author": "/img/user-4.jpg",
        "image" : "url('/img/3.jpg')",
        "quote" : "God save me from my friends. I can protect myself from my enemies."
    },
    {
        "author": "/img/user-1.jpg",
        "image" : "url('/img/4.jpg')",
        "quote" : "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded."
    },
];
btns.forEach(function(button){
    button.addEventListener('click', function(){
        if(button.classList.contains('btn-left')){
            count--;
            if(count < 0){
                count = images.length - 1;
            }
            img.src = images[count]['author'];
            quoteDom.innerText = images[count]['quote'];
            wrapper.style.backgroundImage = images[count]['image'];
        };
        if(button.classList.contains('btn-right')){
            count++;
            if(count >= images.length){
                count = 0;
            }
            img.src = images[count]['author'];
            quoteDom.innerText = images[count]['quote'];
            wrapper.style.backgroundImage = images[count]['image'];
        };
    });
});