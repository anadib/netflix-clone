import React from "react";
import * as S from './style';

function FeatureMovie({item}) {
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    item.genres.forEach(e => {
        genres.push(e.name)
    });

    function watchPosterMovie() {
        window.location.href=`${item.homepage}`;
    } 

    function addMyList() {
        window.location.href=`/list/add/${item.id}`;
    } 

    let description = item.overview
    if(description.length > 200) {
        description = description.substring(0, 200)+'...';
    }

    return(
        <S.Featured posterPath = {item.backdrop_path}> 
            <S.FeaturedVertical>
                <S.FeaturedHorizontal>
                    <S.MovieInformation>
                        <h1>{item.name}</h1>
                        <S.InfosWrapper>
                            <p>{item.vote_average} pontos</p>
                            <p>{firstDate.getFullYear()}</p>
                            <p>{item.number_of_seasons} temporada{item.number_of_seasons === 1 ? "" : "s"}</p>
                        </S.InfosWrapper>
                        <p>{description}</p>
                        <S.Button onClick={watchPosterMovie}>► Assistir</S.Button>
                        <S.Button onClick={addMyList}>+ Minha Lista</S.Button>
                        <p>Gêneros: {genres.join(', ')}</p>
                    </S.MovieInformation>
                </S.FeaturedHorizontal>
            </S.FeaturedVertical>
        </S.Featured>
    );
}

export default FeatureMovie;