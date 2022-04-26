import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    background: transparent;
    transition: all ease 0.5s;

    svg{
        width: 110px;
        height: 40px;
    }

    img {
        width: 40px;
        height: 40px;
        border-radius: 3px;
    }

    &.black {
        background: #141414;
    }
`;