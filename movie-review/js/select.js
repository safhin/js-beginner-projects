
const tvShowContainerElem = document.querySelector('#tv_show_container');
const selectShowElem = document.querySelector('#selet_show');


const tvShow = async (selectValue) => {
    return fetch("https://api.themoviedb.org/3/tv/" + selectValue + "?api_key=3cf4b1a65fd2b71e9b6d118dde60d79e")
    .then((response) => {
        return response.json()
        .then((data) => {
            let template = ``;
            let movieDetails = data.results;
            console.log(movieDetails);
            movieDetails.slice().map((movie) => {
                let imgUrl = movie.poster_path ? "https://image.tmdb.org/t/p/w500" + movie.poster_path : window.location.protocol + "//" + window.location.host+"/images/NoImageFound.png";
                template += 
                `
                    <div class="movie-item-style-2 movie-item-style-1">
                        <img src="${imgUrl}" alt="">
                        <div class="hvr-inner">
                            <a href="moviesingle.html"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                        </div>
                        <div class="mv-item-infor">
                            <h6><a href="#">${movie.name}</a></h6>
                            <p class="rate"><i class="ion-android-star"></i><span>${movie.vote_average ? movie.vote_average : movie.popularity}</span> /10</p>
                        </div>
                    </div>	
                `
            });
            tvShowContainerElem.innerHTML = template;
            // if(!soonBtn.classList.contains('active')){
            //     popularBtn.classList.remove('active');
            //     topRatedBtn.classList.remove('active');
            //     soonBtn.classList.add('active');
            // }
        });
    })
    .catch(err => console.log('Request Failed', err)); // Catch errors
}
//Tab data
selectShowElem.addEventListener('change', function(){
    let selectValue = selectShowElem.value;
    tvShow(selectValue);
});

const tvShowDefault = async (selectValue) => {
    return fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=3cf4b1a65fd2b71e9b6d118dde60d79e")
    .then((response) => {
        return response.json()
        .then((data) => {
            let template = ``;
            let movieDetails = data.results;
            movieDetails.slice(0,15).map((movie) => {
                let imgUrl = movie.poster_path ? "https://image.tmdb.org/t/p/w500" + movie.poster_path : window.location.protocol + "//" + window.location.host+"/images/NoImageFound.png";
                template += 
                `
                    <div class="movie-item-style-2 movie-item-style-1">
                        <img src="${imgUrl}" alt="">
                        <div class="hvr-inner">
                            <a href="moviesingle.html"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                        </div>
                        <div class="mv-item-infor">
                            <h6><a href="#">${movie.name}</a></h6>
                            <p class="rate"><i class="ion-android-star"></i><span>${movie.vote_average ? movie.vote_average : movie.popularity}</span> /10</p>
                        </div>
                    </div>	
                `
            });
            tvShowContainerElem.innerHTML = template;
        });
    })
    .catch(err => console.log('Request Failed', err)); // Catch errors
}

window.addEventListener('DOMContentLoaded', () => tvShowDefault());