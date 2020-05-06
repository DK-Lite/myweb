import React from 'react'
import styled from 'styled-components'

import * as HighTag from 'components/molecules'


const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: rows;
    flex-wrap: wrap;
    > * {
        margin: 2px 2px 2px 2px;
    }
`
const ContainerIcons = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    > * {
        margin: 2px 2px 2px 2px;
    }
`

const ContainerAnaly = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    > * {
        margin: 2px 2px 2px 2px;
    }
`

function AnalyMenu({icons, ...other}){
    return (
        <Container>
            <ContainerIcons>
                {icons.map( (x,i) => <HighTag.IconButton key={i} name={x} />)}
            </ContainerIcons>
            <ContainerAnaly>
                <HighTag.CardTradeTable />
                <HighTag.LineChart />
                {/* <HighTag.PieChart />
                <HighTag.BarChart /> */}
            </ContainerAnaly>
        </Container>
    )
}
AnalyMenu.defaultProps = {
    icons: ['table_chart', 'show_chart', 'pie_chart', 'insert_chart']
}

export default AnalyMenu;