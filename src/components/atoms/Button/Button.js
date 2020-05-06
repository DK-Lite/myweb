import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    width: 30px;
    height: 30px;

    display: flex;
    outline: none;
    text-align: center;
    justify-content: center;
    align-items: center;

    color: #0005;
    background: white;
    border: 1px solid #0005;
    border-radius: 3px;
    font-size: 20px;
    font-family: 'Poppins-Regular';
    opacity: 0.5;
    &:hover {
        opacity: 1;
    }
    &:active {
        color: white;
        background: #0005;
        border: 1px solid white;
    }
`

function Button({ children, ...other }){
    return (
        <Container {...other}>
            {children}
        </Container>
    )
}

export default Button