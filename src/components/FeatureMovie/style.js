import styled from "styled-components";

export const Featured = styled.section`
    height: 100vh;
    background-image: url(${props => (`https://image.tmdb.org/t/p/original${props.posterPath}`)});
    background-size: cover;

    @media (max-width: 760px) {
        height: 90vh;
    }
`;

export const FeaturedVertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const FeaturedHorizontal = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    display: flex;
    align-items: center;
    padding-bottom: 150px;
    padding-top: 70px;
`;

export const MovieInformation = styled.div`
    max-width: 40%;
    margin-left: 30px;

    h1 {
        font-size: 60px;
        font-weight: bold;
        margin: 0;
    }

    p {
        font-size: 20px;
        color: #999;

        &:nth-child(6) {
            font-size: 18px;
            margin: 0;
        }
    }

    button {
        margin-bottom: 18px;

        &:first-of-type {
            background-color: #fff;
            color: #000;
        }
    
        &:last-of-type {
            background-color: #333;
            color: #fff;
        }
    }

    @media (max-width: 760px) {
        max-width: unset;
        flex-wrap: wrap;
        margin-right: 30px;

        h1 {
            font-size: 40px;
        }

        p {
            font-size: 14px;

            &:nth-child(6) {
                font-size: 14px;
            }
        }
    }
`;

export const InfosWrapper = styled.div`
    display: flex;

    p {
        padding-right: 15px;
        font-weight: bold;
        font-size: 18px;
        margin: 1em 0 0 0;
        color: #fff;
        
        &:first-child {
            color: #46d369;
        }

        @media (max-width: 760px) {
            font-size: 16px;
        }
    }
`;

export const Button = styled.button`
    border: none;
    padding: 12px 25px;
    font-size: 20px;
    margin-right: 10px;
    border-radius: 5px;
    font-weight: bold;
    transition: all ease 0.2s;

    &:hover {
        cursor: pointer;
        opacity: 70%;
    }

    @media (max-width: 760px) {
        font-size: 16px;
    }
`;