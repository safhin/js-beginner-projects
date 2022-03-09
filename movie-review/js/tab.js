
const popularElem = document.querySelector('#popular');
const topRatedBtn = document.querySelector('#topRated');
const soonBtn = document.querySelector('#soonBtn');
const popularBtn = document.querySelector('#popularBtn');

//Tab data
const comingSoon = async () => {
    return fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=3cf4b1a65fd2b71e9b6d118dde60d79e")
    .then((response) => {
        return response.json()
        .then((data) => {
            let template = ``;
            let movieDetails = data.results;
            let imgRul = "https://image.tmdb.org/t/p/w500";
            movieDetails.slice(0,6).map((movie) => {
                template += 
                `
                    <div class="slide-it">
                        <div class="movie-item">
                            <div class="mv-img">
                                <img src="${imgRul}${movie.poster_path}" alt="">
                            </div>
                            <div class="hvr-inner">
                                <a href="#"> Read more <i
                                        class="ion-android-arrow-dropright"></i> </a>
                            </div>
                            <div class="title-in">
                                <h6><a href="#">${movie.title}</a></h6>
                                <p><i class="ion-android-star"></i><span>${movie.vote_average}</span> /10</p>
                            </div>
                        </div>
                    </div>
                `
            });
            popularElem.innerHTML = template;
            if(!soonBtn.classList.contains('active')){
                popularBtn.classList.remove('active');
                topRatedBtn.classList.remove('active');
                soonBtn.classList.add('active');
            }
        });
    })
    .catch(err => console.log('Request Failed', err)); // Catch errors
   
}
const topRated = async () => {
    return fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=3cf4b1a65fd2b71e9b6d118dde60d79e")
    .then((response) => {
        return response.json()
        .then((data) => {
            let template = ``;
            let movieDetails = data.results;
            let imgRul = "https://image.tmdb.org/t/p/w500";
            movieDetails.slice(0,6).map((movie) => {
                template += 
                `
                    <div class="slide-it">
                        <div class="movie-item">
                            <div class="mv-img">
                                <img src="${imgRul}${movie.poster_path}" alt="">
                            </div>
                            <div class="hvr-inner">
                                <a href="#"> Read more <i
                                        class="ion-android-arrow-dropright"></i> </a>
                            </div>
                            <div class="title-in">
                                <h6><a href="#">${movie.title}</a></h6>
                                <p><i class="ion-android-star"></i><span>${movie.vote_average}</span> /10</p>
                            </div>
                        </div>
                    </div>
                `
            });
            if(!topRatedBtn.classList.contains('active')){
                popularBtn.classList.remove('active');
                soonBtn.classList.remove('active');
                topRatedBtn.classList.add('active');
            }
            popularElem.innerHTML = template;
        });
    })
    .catch(err => console.log('Request Failed', err)); // Catch errors
}

const popular = async () => {
    return fetch("https://api.themoviedb.org/3/movie/popular?api_key=3cf4b1a65fd2b71e9b6d118dde60d79e")
    .then((response) => {
        return response.json()
        .then((data) => {
            let template = ``;
            let movieDetails = data.results;
            let imgRul = "https://image.tmdb.org/t/p/w500";
            movieDetails.slice(0,6).map((movie) => {
                template += 
                `
                    <div class="slide-it">
                        <div class="movie-item">
                            <div class="mv-img">
                                <img src="${imgRul}${movie.poster_path}" alt="">
                            </div>
                            <div class="hvr-inner">
                                <a href="#"> Read more <i
                                        class="ion-android-arrow-dropright"></i> </a>
                            </div>
                            <div class="title-in">
                                <h6><a href="#">${movie.title}</a></h6>
                                <p><i class="ion-android-star"></i><span>${movie.vote_average}</span> /10</p>
                            </div>
                        </div>
                    </div>
                `
            });
            if(!popularBtn.classList.contains('active')){
                soonBtn.classList.remove('active');
                topRatedBtn.classList.remove('active');
                popularBtn.classList.add('active');
            }
            popularElem.innerHTML = template;
        });
    })
    .catch(err => console.log('Request Failed', err)); // Catch errors
}

window.addEventListener('DOMContentLoaded', () => popular());
topRatedBtn.addEventListener('click', () => topRated());
soonBtn.addEventListener('click', () => comingSoon());
popularBtn.addEventListener('click', () => popular());