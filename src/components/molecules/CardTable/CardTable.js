import React from 'react'
import styled from 'styled-components'
import { Table } from 'components/atoms'


//import { LineGraph } from '../Chart'


const StyledCard = styled.div`
    width: 400px;
    height: 300px;
    border: 0.5px solid #6663;
    &:hover {
        box-shadow: 1px 1px 2px 1px gray;
    }
    background: #FFFFFF;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 5px 5px 5px 5px;
`

const Title = styled.h3`
    display: flex;
    flex: 1;
    height: 20px;
    box-shadow: 0px 0px 0px 0px gray;
    margin: 5px 5px 5px 5px;
    font-family: Nanum Gothic;
`
//Samsung Sans,roboto,sans-serif

const Contents = styled.div`
    display: flex;
    height: 230px;
    background : white;
    padding: 10px 5px 10px 5px;
`

function CardTable(props) {

    const { width, height, ...other } = props;

    return(
        <StyledCard
            style= {{
                width: width,
                height: height,
                ...other
            }}>
            <Title>실거래 데이터</Title>

            <Contents>
                <Table 
                     colums={[
                        {name: '날짜', tag : 'a'},
                        {name: '크기', tag : 'b'},
                        {name: '가격', tag : 'c'},
                        {name: '구분', tag : 'd'},
                    ]}
                    datas={[
                        {a: '1919.11.01', b: '84m', c: "10000", d: '-'},
                        {a: '1919.11.01', b: '84m', c: "10000", d: '-'},
                        {a: '1919.11.01', b: '84m', c: "10000", d: '-'},
                        {a: '1919.11.01', b: '84m', c: "10000", d: '-'},
                        {a: '1919.11.01', b: '84m', c: "10000", d: '-'},
                        {a: '1919.11.01', b: '84m', c: "10000", d: '-'},
                    ]}/>
            </Contents>
            
        </StyledCard>
    )

};

export default CardTable;