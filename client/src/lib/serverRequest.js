var API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWQ3MmFmNTM5OTIzNzgwZDlhNzdiYzdiODNmN2U3NCIsInN1YiI6IjY0YjlkNDE0ZWZkM2MyMDEwMTUyMDg4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bSpnErcSG_euxml4nOFrv8lU69mX9MEAG62aLFH-yIs';

import $ from "jquery";
//https://api.themoviedb.org/3/movie/550?api_key=e0e9174b859ee6f60f876ec3f12c8435

var Parse = {
  readAll: function (movieTitle, callback = () => { }) {
    $.ajax({
      type: 'GET',
      url: `https://api.themoviedb.org/3/search/movie?query=${movieTitle}`,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + API_KEY,
      },
      success: (data) => {
        console.log(data.results);
        //callback(data.results);
      },
      error: function (error) {
        console.error('MovieList: Failed to fetch data', error);
      }
    })
  }
}

export default Parse;

