import React from 'react' 
import styled from 'styled-components'

import * as Tag from 'components/atoms'


const Container = styled.div`
    width: 140px;
    height: 100px;
`

const Title = styled.div`
    display: flex;
    height: 70;
    line-height: 20px;
    color: black;
    font-size: 25px;
    padding: 5px 0 0 5px;
`
const State = styled.div`
    display: flex;
    height: 70;
    line-height: 50px;
`
function StateCard({title, data, ...other}){

    return (
        <Container>
            <Tag.Card style={{width:'150px', height:'80px',}}>
                <Title>
                    {title}
                </Title>
                <State>
                    {data}
                </State>
            </Tag.Card>
        </Container>
    )
}
StateCard.defaultProps = {
    title : '국내시총',
    data : '12333',
}

export default StateCard;
