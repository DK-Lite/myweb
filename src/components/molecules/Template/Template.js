import React from 'react'
import Styled from 'styled-components'

import * as Tag from 'components/molecules'

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: rows;
    flex-wrap: wrap;
    align-items: center;
    > * {
        margin: 0 2px 0 2px;
    }
`

function Template(){
    return (
        <Container>

        </Container>
    )
}

export default Template;