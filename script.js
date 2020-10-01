let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");

let personalMovieDB = {};
personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = {};
personalMovieDB.actors = {};
personalMovieDB.genres = [];
personalMovieDB.privat = false;

let answerFilm = prompt("Один из последних просмотренных фильмов", "название фильма");
let answerMark = prompt("Нас сколько бы его оценили?", "10");

personalMovieDB.movies[answerFilm] = answerMark;
console.log(personalMovieDB);
