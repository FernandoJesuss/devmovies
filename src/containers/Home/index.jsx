import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Background, Info, Poster, Container, Button, ContainerButtons } from "./styles"
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";


function Home() {
    const [movie, setMovie] = useState([]);
    const [topMovies, setTopMovies] = useState([]);


    useEffect(() => {
        async function getMovies() {
            try {
                const {
                    data: { results }
                } = await api.get("/movie/popular");

                setMovie(results[0])
            } catch (error) {
                console.error("Erro ao buscar filmes:", error);
            }
        }



        async function getTopMovies() {
            try {
                const {
                    data: { results }
                } = await api.get("/movie/top_rated");

                setTopMovies(results)
            } catch (error) {
                console.error("Erro ao buscar filmes:", error);
            }
        }

        getTopMovies()
        getMovies();
    }, []);

    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}
                >
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red={true}>Assista Agora </Button>
                                <Button red={false}> Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img
                                alt="capa-do-filme"
                                src={getImages(movie.poster_path)} />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={"Top Filmes"} />}
        </>
    );
}

export default Home;




