import React from 'react' 
import styled from 'styled-components'

import * as Tag from 'components/atoms'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    :hover {
        cursor: pointer;
    }
`
function IconButton({name, ...other}){
    return (
        <Container>
            <Tag.Card style={{alignItems: 'center', justifyContent: 'center'}}>
                <Tag.Icon name={name} />
            </Tag.Card>
        </Container>
    )
}
IconButton.defaultProps = {
}

export default IconButton;
