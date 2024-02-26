import { apiKey } from "./constant"

export const url = [{ title: "Popular on Netflix", url:`/movie/popular?api_key=${apiKey}`},
{ title: "Actionmovie", url: `/discover/movie?api_key=${apiKey}&with_genres=28` },
{ title: "Adventure", url: `/discover/movie?api_key=${apiKey}&with_genres=12` },
{ title: "Animation", url: `/discover/movie?api_key=${apiKey}&with_genres=16` },
{ title: "Comedy", url: `/discover/movie?api_key=${apiKey}&with_genres=35` },
{ title: "Crime", url: `/discover/movie?api_key=${apiKey}&with_genres=80` }
]

