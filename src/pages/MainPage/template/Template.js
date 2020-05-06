import React from 'react'
import styled from 'styled-components'

import * as HighTag from 'components/molecules'
import * as Item from 'components/organisms'

// const boxFade = keyframes`
//   from {
//     width: 0%;
//   }
//   to {
//     width: 100%;
//   }
// `
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: row wrap;
    align-items: center;
    padding: 0px 0px 0px 0px;
`

const ContainerNav = styled.div`
    width : 100%;
    height : 50px;
    background: white;
    z-index: 1;
`
const ContainerContents = styled.div`
    display: flex;
    width : 100%;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: rows;
    flex-wrap: wrap;
    margin: 10px 0 0 0;
    pointer-events: none;
    z-index: 1;
`

const ContainerAnaly = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: rows;
    flex-wrap: wrap;
    pointer-events: auto;
    z-index: 1;
`




function Template() {
    return(
        <Container>
            <HighTag.ControlMap />

            <ContainerNav>
                <Item.Nav />
            </ContainerNav>
            <ContainerContents>
                <ContainerAnaly>
                    <Item.AnalyMenu />
                </ContainerAnaly>
            </ContainerContents>

            {/* <button onClick={Apis.setCenter}></button> */}
        </Container>
    )
}

export default Template;