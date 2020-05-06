import React from 'react'
import styled from 'styled-components'

import * as Tag from 'components/atoms'
import * as HighTag from 'components/molecules'

const Container = styled.div`
    display:flex;
    width: 100%;
    justify-content: flex-end;
    flex-direction: rows;
    flex-wrap: wrap;
`
const ContainerIcons = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: flex-end;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    position: absolute;
    z-index: 0;
    > * {
        margin: 5px 5px 5px 5px;
    }
`

function ControlMap({icons, ...other}){
    return (
        <Container>
            <Tag.Map />
            <ContainerIcons>
                {icons.map( (x,i) => <HighTag.IconButton key={i} name={x} />)}
            </ContainerIcons>
        </Container>
    )
}
ControlMap.defaultProps = {
    icons: ['add', 'remove',]
}
export default ControlMap;
