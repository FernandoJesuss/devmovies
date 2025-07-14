import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Background, Cover, Info, SpanGenres } from "./styles";
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from "../../services/getData";
import Credits from "../../components/Credits";




function Detail() {
    const { id } = useParams()
const[movie, setMovie] = useState()
const[movieVideos, setMovieVideos] = useState()
const[movieCredits, setMovieCredits] = useState()
const[movieSimilar, setMovieSimilar] = useState()


    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovieById(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id),
                
            ])
                .then(([movie, videos, credits, similar]) => {
                    setMovie(movie)
                    setMovieVideos(videos)
                    setMovieCredits(credits)
                    setMovieSeries(similar)
                    
                })
                .catch((error) => console.error(error))

        }

        getAllData();

    }, []);









    return (
        <>
 {movie && ( 
           <>
      <Background image={getImages(movie.Backdrop_path)}/>
        <Container>
            <Cover>
                <img src={getImages(movie.poster_path)} />
            </Cover>
<Info>
    <h2>{movie.title}</h2>
    <SpanGenres genres={movie.genres}/>
    <p>{movie.overview}</p>
    <div>
        <Credits credits={movieCredits} />
    </div>
</Info>
        </Container>
        </>
        )}
        </>
    )
}

export default Detail