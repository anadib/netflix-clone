import React, {useState} from "react";

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import * as S from './style';

function MovieRow({title, items}) {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = items.results.length * 150;
        if((window.innerWidth - listWidth) > x) {
            x = window.innerWidth - listWidth - 60;
        }
        setScrollX(x)
    }

    return(
        <S.MovieRow>
            <h2>{title}</h2>
            <S.Arrow onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </S.Arrow>
            <S.Arrow onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </S.Arrow>
            <S.ListaArea>
                <S.List style={{marginLeft: scrollX, width: items.results.length * 150}}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <S.Item key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </S.Item>
                    ))}
                </S.List>
            </S.ListaArea>
        </S.MovieRow>
    );
}

export default MovieRow;