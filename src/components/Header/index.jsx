import React from "react";
import {ReactComponent as LogoNetflix} from "../../Images/LogoNetflix.svg";
import ProfilePhoto from "../../Images/ProfilePhoto.jpg";
import * as S from './style';


function Header({black}) {
    return(
        <S.Container className={black ? 'black' : ''}>
            <a href="/">
                <LogoNetflix />
            </a>
            <a href="/">
                <img src={ProfilePhoto} alt="Imagem de perfil" />
            </a>
        </S.Container>
    )
}

export default Header;