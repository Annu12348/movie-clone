import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmIyYzA2YjIwYjNmMTgzODQ2NjM2MTU0MzdkNGU1OSIsIm5iZiI6MTczODcyNDIwNS41OTMsInN1YiI6IjY3YTJkMzZkZjA4NDJmMzJkYThhNmQ5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1EJTF47L97gydaR4Y8FuSa6fcZ-a5gfCHnMeNefntCA",
  },
});

export default instance;
