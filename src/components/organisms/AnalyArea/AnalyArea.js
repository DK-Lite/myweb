import React from 'react';
import styled from 'styled-components'

import { BarChart, PieChart } from 'components/molecules'

const Container = styled.div`
    width: 700px;
    height: 100%;
    background: #FFFFFF;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 0px 10px 0px 10px;
`
const Item = styled.div`
    display: flex;
    margin: 0px 0px 10px 0px;
`
function AnalyArea(){

    return(
        <Container>
            <Item>
                <BarChart/>
            </Item>
            <Item>
                <PieChart/>
            </Item>
        </Container>
    )
}

export default AnalyArea;