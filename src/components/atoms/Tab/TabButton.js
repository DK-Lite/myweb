import React from 'react';
import styled from 'styled-components'

const Container = styled.button`
    outline: none;
    text-align: center;
    color: black;
    background: white;
    border: 1px solid #0000;
    border-right: 1px solid #0003;
    
    font-size: 20px;
    font-family: 'Poppins-Regular';

    &:hover {
        opacity: 0.5;
        border-left: 1px soild #0003;
    }
    &:active {
        color: white;
        opacity: 1;
        border-left: 3px solid gray;
        border-right: 1px solid #FFFFFF;
    }
`

function TabButton({ children, ...other }){
    return (
        <Container {...other}>
            {children}
        </Container>
    )
}

export default TabButton