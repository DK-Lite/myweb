import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0px;
    &:hover {
        box-shadow: 0px 0px 5px 1px gray;
    }
    background: #FFFFFF;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
`

function Card({ children, ...other }){

    return(
        <StyledCard {...other}>
            {children}
        </StyledCard>
    )
}

export default Card;