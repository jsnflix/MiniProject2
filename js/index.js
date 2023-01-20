const baseURL = "https://api.themoviedb.org/3/";
const popular = "movie/popular?";
const key = "api_key="
const API_KEY = "49862386b331dabcc0cd47526a47f3dc"
const popularID = `Client-ID ${API_KEY}`
const popularURL = baseURL + popular + key + API_KEY
const posterBaseURL = "https://image.tmdb.org/t/p/w500"
// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=49862386b331dabcc0cd47526a47f3dc

// https://api.themoviedb.org/3/movie/popular?api_key=49862386b331dabcc0cd47526a47f3dc

// https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2023-01-20&primary_release_date.lte=2023-01-20&api_key=49862386b331dabcc0cd47526a47f3dc

// /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&

const myFirstHeader = new Headers();
myFirstHeader.append("Authorization", popularID);

const firstRequestOption = {
    method: "GET",
    headers: myFirstHeader
}


fetch( popularURL, firstRequestOption )
    .then(res => {
        return res.json();
    })
    .then(result => {
        console.log(result);
        const popularDatas = result.results
        popularDatas.forEach(
            popularData => {
                const slides = document.querySelector('#slides');
                const swiper = document.createElement('div');
                const imageContainer = document.createElement('div');
                const image = document.createElement('img');
                const rating = document.createElement('span');
                const overview = document.createElement('div');
                const overviewTitle = document.createElement('h3');
                const overviewDesc = document.createElement('p');

                swiper.classList.add('swiper-slide');
                imageContainer.classList.add('image-container');
                rating.classList = 'rating' + ' ' + getColor(popularData.vote_average);
                overview.classList.add('overview');
                overviewTitle.classList.add('overview-title');

                image.src = posterBaseURL + popularData.poster_path;
                rating.innerText = ifNotDecimal(popularData.vote_average);
                overviewTitle.innerText = popularData.title;
                overviewDesc.innerText = popularData.overview

                overview.append(overviewTitle)
                overview.append(overviewDesc);
                swiper.append(imageContainer);
                swiper.append(overview);
                imageContainer.append(image);
                imageContainer.append(rating);

                slides.append(swiper);
                
        }); 
            
    })
    .then(err => {
        console.log(err);
    })

const getColor = ( vote_average ) => {
    if ( vote_average >= 8 ) {
        return `green`;
    } else if ( vote_average >= 5 ) {
        return 'orange';
    } else {
        return 'red';
    }
}

const ifNotDecimal = ( vote_average ) => {
    const stringRating = vote_average.toString()
    if ( !stringRating.includes('.') ) {
        return `${vote_average}.0`;
    } else {
        return parseFloat(vote_average);
    }
}

// lATEST MOVIES
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1;
let currentDay = currentDate.getDate();

const latestMovies = currentYear + "-" + currentMonth.toString().padStart(2, "0") + "-" + currentDay.toString().padStart(2, "0")

const latest = `discover/movie?primary_release_date.gte=${latestMovies}&primary_release_date.lte=${latestMovies}&`;
const latestURL = baseURL + latest + key + API_KEY;

const mySecondHeader = new Headers();
mySecondHeader.append("Authorization", latestURL);

const secondRequestOption = {
    method: "GET",
    headers: mySecondHeader
}

fetch( latestURL, secondRequestOption )
    .then(res => {
        return res.json();
    })
    .then(result => {
        console.log(result);
        const latestDatas = result.results
        latestDatas.forEach(
            latestData => {
                const latestGrid = document.querySelector('#latestGrid');
                const postBox = document.createElement('div');
                const postImage = document.createElement('div');
                const image = document.createElement('img');
                const rating = document.createElement('span');
                const overview = document.createElement('div');
                const overviewTitle = document.createElement('h3');
                const overviewDesc = document.createElement('p');


                postBox.classList.add('post-box');
                postImage.classList.add('post-img');
                rating.classList.add('rating');
                overview.classList.add('overview');
                overviewTitle.classList.add('overview-title');

                image.src = posterBaseURL + latestData.poster_path
                rating.innerText = ifNotDecimal(latestData.vote_average);
                overviewTitle.innerText = latestData.title;
                overviewDesc.innerText = latestData.overview

                overview.append(overviewTitle);
                overview.append(overviewDesc);
                postImage.append(image);
                postImage.append(rating);
                postBox.append(postImage);
                postBox.append(overview);

                latestGrid.append(postBox);

        }); 
            
    })
    .then(err => {
        console.log(err);
    })