import React from 'react';
import styled from 'styled-components'

const Container = styled.button`
    outline: none;
    text-align: center;
    color: #7ED2FF;
    background: white;
    border: 1px solid #7ED2FF;
    border-radius: 10px;

    font-size: 20px;
    font-family: 'Poppins-Regular';

    &:hover {
        opacity: 0.5;
    }
    &:active {
        color: white;
        background: #7ED2FF;
        border: 1px solid white;
    }
`

function TabContainer({ children, ...other }){
    return (
        <Container {...other}>
            {children}
        </Container>
    )
}

export default TabContainer;