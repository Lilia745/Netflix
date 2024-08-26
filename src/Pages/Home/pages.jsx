import React, { useEffect, useState } from "react";
import "../../App.css";
import MovieList from "../../Components/MovieList";
import Error from "../../Components/Error";

const api_key = "9b702a6b89b0278738dab62417267c49";
const main_url = "https://api.themoviedb.org/3";
const api_url = `${main_url}/discover/movie?sort_by=popularity.desc&api_key=${api_key}`;
const searchUrl = `${main_url}/search/movie?api_key=${api_key}`;

function Home() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchMovies(api_url);
    }, []);

    const fetchMovies = (url) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results)
                if (data.results == "") {
                    <Error/>
                }
            });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm) {
            fetchMovies(`${searchUrl}&query=${searchTerm}`);
            setSearchTerm("");
        }
    };

    return (
        <section className="container">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <MovieList movies={movies} />
        </section>
    );
}

export default Home;