import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Background, Info, Poster, Container, Button, ContainerButtons } from "./styles"
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";


function Home() {
    const [movie, setMovie] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const [topSeries, setTopSeries] = useState([]);
    const [popularSeries, setPopularSeries] = useState([]);
     const [TopPeople, setTopPeople] = useState([]);

    


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

        async function getTopSeries() {
            try {
                const {
                    data: { results }
                } = await api.get("/tv/top_rated");

                setTopSeries(results)
            } catch (error) {
                console.error("Erro ao buscar Series:", error);
            }
        }

        async function getPopularSeries() {
            try {
                const {
                    data: { results }
                } = await api.get("/tv/popular");

                setPopularSeries(results)
            } catch (error) {
                console.error("Erro ao buscar Series:", error);
            }
        }

            async function getTopPeople() {
            try {
                const {
                    data: { results }
                } = await api.get("/person/popular");

                setTopPeople(results)
            } catch (error) {
                console.error("Erro ao buscar Series:", error);
            }
        }

        getMovies();
        getTopMovies()
        getTopSeries()
        getPopularSeries()
        getTopPeople()
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
            {topSeries && <Slider info={topSeries} title={"Top Séries"} />}
             {popularSeries && <Slider info={popularSeries} title={" Séries Popular "} />}
              {TopPeople && <Slider info={TopPeople} title={" Top Artistas "} />}
        </>
    );
}

export default Home;




popularSeries