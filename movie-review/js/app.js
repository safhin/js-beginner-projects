//Slider data
const sliders = [
    {
        "cats" : ["sci fi", "action" , "adventure"],
        "title" : "guardians of the year",
        "img" : "images/uploads/john-wick.jpg",
        "rating" : "7",
        "desc": "Run Time: 3h Rated: PG-13 Release: October 24, 2014"
    },
    {
        "cats" : ["cats 1", "cats 2" , "thriller"],
        "title" : "John Wick 1",
        "img" : "images/uploads/poster1.jpg",
        "rating" : "7.4",
        "desc": "Run Time: 2h21 Rated: PG-13 Release: 1 May 2015"
    },
    {
        "cats" : ["cats 2", "cats 2" , "cats 2"],
        "title" : "Intersteller",
        "img" : "images/uploads/intersteller.jpg",
        "rating" : "8",
        "desc": "Run Time: 2h Rated: PG-13 Release: 1 Dec 2016"
    },
];

//Slider dom select
const slideLeftElem = document.querySelector('#slideLeft');
const slideRightElem = document.querySelector('#slideRight');
const catsElem = document.querySelector('.cate');
const titleElem = document.querySelector('.movieTitle');
const descElem = document.querySelector('.desc');
const slideImgElem = document.querySelector('.slideImage');
const ratingElem = document.querySelector('.rating');
const slideBtns = document.querySelectorAll('.slideBtn');

let count = 0;

slideBtns.forEach(function(button){
    if(button.classList.contains('btn-left')){
        button.addEventListener('click', function(){
            sliders[count].cats.forEach(function(value){
                //select and remove all categories
                const prevCats = document.querySelectorAll('.cat');
                prevCats.forEach(function(node){
                    node.remove();
                });

                const catElem = document.createElement('span');
                catElem.setAttribute('class', 'cat');
                catElem.innerHTML = value;
                catsElem.appendChild(catElem);
            });
            slideImgElem.src = sliders[count].img;
            titleElem.innerHTML = sliders[count].title;
            ratingElem.innerHTML = sliders[count].rating;
            descElem.innerHTML = sliders[count].desc;
            count--;
            if(count < 0){
                count = sliders.length - 1;
            }
        })
    }
    if(button.classList.contains('btn-right')){
        button.addEventListener('click', function(){
            sliders[count].cats.forEach(function(value){
                //select and remove all categories
                const prevCats = document.querySelectorAll('.cat');
                prevCats.forEach(function(node){
                    node.remove();
                });

                const catElem = document.createElement('span');
                catElem.setAttribute('class', 'cat');
                catElem.innerHTML = value;
                catsElem.appendChild(catElem);
            });

            slideImgElem.src = sliders[count].img;
            titleElem.innerHTML = sliders[count].title;
            ratingElem.innerHTML = sliders[count].rating;
            descElem.innerHTML = sliders[count].desc;
            count++;
            if(count >= sliders.length){
                count = 0;
            }
        })
    }
});
