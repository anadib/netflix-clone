import styled from 'styled-components';

export const MovieRow = styled.div`
    margin-bottom: 30px;

    h2 {
        margin: 0 0 0 30px;
    }

    &:hover {
        div {
            opacity: 1;
        }
    }
`;

export const Arrow = styled.div`
    position: absolute;
    width: 40px;
    height: 225px;
    background: rgba(0, 0, 0, 0.6);
    z-index:99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;

    &:nth-last-child(2) {
        right: 0;
    }

    @media (max-width: 760px) {
        opacity: 1;
    }
`;

export const ListaArea = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`;

export const List = styled.div`
     transition: all ease 0.5s;
`;

export const Item = styled.div`
    display: inline-block;
    width: 150px;

    img {
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;

        &:hover {
            transform: scale(1);
            cursor: pointer;
        }
    }
`;