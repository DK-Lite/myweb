import React from 'react'
import styled from 'styled-components'

import * as Tag from 'components/atoms'

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

function Search(){
    return (
        <Container>
            <Tag.TextField placeholder='search...'/>
            <Tag.Button><Tag.Icon name='search'/></Tag.Button>
        </Container>
    )
}

export default Search;