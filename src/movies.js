// import { movies } from "./data.js";
// console.log(movies);

// const allMovies = require("./data");
// console.log(allMovies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// import movies from "./data.js";

function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((film) => {
    return film.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const SSDramas = moviesArray.filter((film) => {
    return film.director === "Steven Spielberg" && film.genre.includes("Drama");
  });
  return SSDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  const sumScores = moviesArray.reduce((acc, val) => {
    return val.score ? acc + Number(val.score) : acc + 0;
  }, 0);

  const avgScore = Number((sumScores / moviesArray.length).toFixed(2));

  return avgScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const allDramas = moviesArray.filter((film) => {
    return film.genre.includes("Drama");
  });
  if (!allDramas.length) return 0;

  const dramasAvgScore = scoresAverage(allDramas);

  return dramasAvgScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newMovies = structuredClone(moviesArray);

  const newOrder = newMovies.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title, undefined, { sensitivity: "base" });
    }
    return a.year - b.year;
  });

  return newOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newMovies = structuredClone(moviesArray);

  const newOrder = newMovies.sort((a, b) => {
    return a.title.localeCompare(b.title, undefined, { sensitivity: "base" });
  });

  const titles = newOrder.map((film) => {
    return film.title;
  });

  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newMovies = structuredClone(moviesArray);

  const moviesFormatedTime = newMovies.map((movie) => {
    const newTime =
      Number(movie.duration.split("h")[0]) * 60 +
      Number(movie.duration.split("h")[1].replace("min", ""));
    // return (movie.duration = newTime);

    return { ...movie, duration: newTime };
  });

  return moviesFormatedTime;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  // expected result
  // {
  //   1972: [8.1, 0.3, 5]
  // }

  // 1st try
  // let max = -Infinity;
  // let bestYear = null;
  // const arrayOfYears = [...new Set(moviesArray.map((movie) => movie.year))];
  // console.log("arrayOfYears", arrayOfYears);

  // arrayOfYears.forEach((currentYear) => {
  //   const moviesWithCurrent = moviesAray.filter(
  //     (movie) => movie.year === currentYear
  //   );

  //   console.log("Same year movies: ", moviesWithCurrent);

  // const total = moviesWithCurrent.reduce((acc, val) => acc + val.score, 0);
  // const  average = +(total/moviesWithCurrent.length).toFixed(2);

  // if(average > max){
  //   max = average;
  //   bestYear = currentYear;
  // }
  // });

  const orgByYear = moviesArray.reduce((acc, movie) => {
    if (movie.year in acc) {
      acc[movie.year].push(movie.score);
    } else {
      acc[movie.year] = [movie.score];
    }

    return acc;
  }, {});

  console.log(orgByYear);
}
