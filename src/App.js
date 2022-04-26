import React, { useEffect, useState } from 'react';
import { GlobalStyle } from './components/GlobalStyle'
import { Header, MovieRow, FeatureMovie }  from './components';

import Tmdb from './Tmdb'

import * as S from './style';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackeader] =useState(false)

  useEffect(() => { // Quando a tela for carregada o react irá executar a função que estiver aqui
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      // Pegando o filme em destaque
      let originals = list.filter(item => item.slug === "originals");
      let randomChosen = Math.floor(Math.random() * (originals[0].item.results.length - 1)); // Math.random() --> número de 0 até 1. Utilizamos o -1 porque o array vai de 0 até 19, sendo que o tamanho é 20.
      let chosen = originals[0].item.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo)
    }

    loadAll();
  }, []);

    useEffect(() => {
      const scrollListener = () => {
        if(window.scrollY > 10 ) {
          setBlackeader(true)
        } else {
          setBlackeader(false)
        }
      }

      window.addEventListener('scroll', scrollListener);

      return () => {
        window.removeEventListener('scroll', scrollListener);
      } 
    }, []); 

  return (
    <>
      <GlobalStyle />
      <S.Page>
        <Header black={blackHeader}/>
        {featuredData &&
          <FeatureMovie item={featuredData}/>
        }
        <S.Lists>
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.item} />
          ))}
        </S.Lists>
        <footer>
          Feito com <span rol="img" aria-label="coração">❤️</span> pela Ana Flávia Dib. <br />
          Direitos de imagem para Netflix <br />
          Dados pegos do site Themoviedb.org <br />
        </footer>

        {movieList.length <= 0 &&
          <S.Loading>
            <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando"/>
          </S.Loading>
        }
      </S.Page>
    </>
  );
}

export default App;