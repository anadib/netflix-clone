import styled from 'styled-components';

export const Page = styled.div`

    footer {
        margin: 50px 0;
        text-align: center;
    }
`;

export const Lists = styled.section`
    margin-top: -150px;
`;

export const Loading = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 450px;
    }
`;



