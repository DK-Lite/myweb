import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    height: 100%;
    outline: none;
    text-align: center;
    color: #7ED2FF;
    background: white;

    font-size: 20px;
    font-family: 'Poppins-Regular';

    &:hover {
    }
    &:active {

    }
`

function TabPannel({ children, ...other }){
    return (
        <Container {...other}>
            {children}
        </Container>
    )
}

export default TabPannel;