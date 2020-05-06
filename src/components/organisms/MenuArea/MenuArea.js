import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    height: 30px;
    background: #000624;
    padding: 0px 0px 0px 20px;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    z-index: 1;
`
const Item = styled.div`
    display: flex;
`

function MenuArea(){

    return(
        <Container>
            <Item></Item>
        </Container>
    )
}

export default MenuArea;