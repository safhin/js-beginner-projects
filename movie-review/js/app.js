//Slider data
let latestMovie = async () => {
    return fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=3cf4b1a65fd2b71e9b6d118dde60d79e")
    .then((response) => {
        return response.json()
        .then((data) => {
            return data;
        });
    })
    .catch(err => console.log('Request Failed', err)); // Catch errors
}


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
            latestMovie().then((data) => {
                // sliders[count].cats.forEach(function(value){
                //     //select and remove all categories
                //     const prevCats = document.querySelectorAll('.cat');
                //     prevCats.forEach(function(node){
                //         node.remove();
                //     });
    
                //     const catElem = document.createElement('span');
                //     catElem.setAttribute('class', 'cat');
                //     catElem.innerHTML = value;
                //     catsElem.appendChild(catElem);
                // });
     
                slideImgElem.src = 'https://image.tmdb.org/t/p/w500/' + data.results[count]['poster_path'];
                titleElem.innerHTML = data.results[count]['title'];
                ratingElem.innerHTML = data.results[count]['vote_average'];
                descElem.innerHTML = data.results[count]['overview'];
                count--;
                if(count < 0){
                    count = data.results.length - 1;
                }
            });
        })
    }
    if(button.classList.contains('btn-right')){
        button.addEventListener('click', function(){
            latestMovie().then((data) => {

                // sliders[count].cats.forEach(function(value){
                //     //select and remove all categories
                //     const prevCats = document.querySelectorAll('.cat');
                //     prevCats.forEach(function(node){
                //         node.remove();
                //     });
    
                //     const catElem = document.createElement('span');
                //     catElem.setAttribute('class', 'cat');
                //     catElem.innerHTML = value;
                //     catsElem.appendChild(catElem);
                // });
    
                slideImgElem.src = 'https://image.tmdb.org/t/p/w500/' + data.results[count]['poster_path'];
                titleElem.innerHTML = data.results[count]['title'];
                ratingElem.innerHTML = data.results[count]['vote_average'];
                descElem.innerHTML = data.results[count]['overview'];
                count++;
                if(count >= data.results.length){
                    count = 0;
                }
            });

        })
    }
});


