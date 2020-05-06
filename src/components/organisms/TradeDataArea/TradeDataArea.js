import React from 'react'
import styled from 'styled-components'

import { CardTradeTable } from 'components/molecules'

const Container = styled.div`
    display: flex;
    width: 100%
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 0px 10px 0px 10px;
`
const Item = styled.div`
    display: flex;
    margin: 0px 10px 10px 0px;
`
function TradeDataArea(){

    return(
        <Container>
            <Item>
                <CardTradeTable/>
            </Item>
            {/* <Item>
                <LineChart/>
            </Item>
            <Item>
                <BarChart/>
            </Item>
            <Item>
                <PieChart/>
            </Item> */}
        </Container>
    )
}

export default TradeDataArea;