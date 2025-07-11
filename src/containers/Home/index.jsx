import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Background } from "./styles"

function Home() {
    const [movie, setMovies] = useState([]);


    useEffect(() => {
        async function getMovies() {
            try {
                const {
                    data: { results }
                } = await api.get("/movie/popular");

                setMovies(results[1])
            } catch (error) {
                console.error("Erro ao buscar filmes:", error);
            }
        }

        getMovies();
    }, []);

    return (
        <>
            {movie && (
                <Background img={`https://image.tmb.org/t/p/original${movie.backdrop_path}`}>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>

                </Background>
            )}
        </>
    );
}

export default Home;




