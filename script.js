"use strict";


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "0");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count= +prompt("Сколько фильмов вы уже посмотрели?", "0");
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 3; i++) {
            let answerFilm = prompt("Один из последних просмотренных фильмов", "название фильма");
            let answerMark = prompt("Нас сколько бы его оценили?", "10");
            if (answerFilm != null && answerMark != null && answerFilm != "" && answerMark != "" && answerFilm.length < 50){
                personalMovieDB.movies[answerFilm] = answerMark;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: () => {
    let count = personalMovieDB.count;
    let message = (count < 10) ? "Просмотрено довольно мало фильмов" :
    (count <= 30) ? "Вы классический кто-то там" :
    (count > 30) ? "Вы - киноман" :
    "Произошла ошибка";
    
    alert(message);
    },
     showMyDB: function(hidden){
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase;
            if(genre == "" || genre == null){
                i--;
            }
            personalMovieDB.genres.push(genre);
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр № ${item[i+1]} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else{
            personalMovieDB.privat = true;
        }
    },
};






