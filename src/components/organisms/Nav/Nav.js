import React from 'react'
import styled from 'styled-components'

import * as HighTag from 'components/molecules'
import SearchNav from './SearchNav'
import SettingNav from './SettingNav'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: rows;
    flex-wrap: wrap;
    align-items: center;
`
const SettingContainer = styled.div`
    display: flex;
    align-items: center;
    > * {
        margin: 0 2px 0 2px;
    }
`

function Nav({icons, ...other}){
    return (
        <Container>
            <SettingContainer>
                
                <HighTag.IconButton name='menu' />
                Show Me The House
            </SettingContainer>
            <SettingContainer>
                <SearchNav />
                <SettingNav />
            </SettingContainer>
        </Container>
    )
}

Nav.defaultProps = {

}

export default Nav;