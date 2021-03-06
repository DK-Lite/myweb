import React from 'react'
import styled from 'styled-components'

import * as HighTag from 'components/molecules'

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
function SearchNav({icons, ...other}){
    return (
        <Container>
            <HighTag.Search />
        </Container>
    )
}

SearchNav.defaultProps = {

}

export default SearchNav;