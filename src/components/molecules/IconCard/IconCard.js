import React from 'react' 
import styled from 'styled-components'

import * as Tag from 'components/atoms'
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
`
function IconCard({name, ...other}){
    return (
        <Container>
            <Tag.Card style={{alignItems: 'center', justifyContent: 'center'}}>
               <i class="material-icons"> {name} </i>    
            </Tag.Card>
        </Container>
    )
}
IconCard.defaultProps = {
}

export default IconCard;
