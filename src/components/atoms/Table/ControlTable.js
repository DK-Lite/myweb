import React, { useState } from 'react'
import styled from 'styled-components'

const CustomDiv = styled.div`
    display: flex;
    width: 400px;
    float: left;
`
const CustomTable = styled.div`
    display: table;
    width: 100%;
`
const HeaderRow = styled.div`
    display: table-row;

    height: 40px;
    background: #7ED2FF;
    color: white;
    font-size: 20px;
    font-family: 'Poppins-Regular';

    > div:first-child {
        border-radius: 15px 0 0 0;
        -moz-border-radius: 15px 0 0 0;
    }
    > div:last-child {
        border-radius: 0 15px 0 0; 
        -moz-border-radius: 0 15px 0 0;
    }
`
const Row = styled.div`
    display: table-row;
    color : rgba(0, 0, 0, .5);
    font-size: 20px;
    > *{
        border-bottom: 0.5px solid rgba(0, 0, 0, .3);
    }
    &:hover {
        background: rgba(126, 210, 255, .3);
        > *{
        border-bottom: 0.5px solid rgb(255, 255, 255);
        }
    }
    :last-child > *{
        border-bottom: 0px solid rgba(0, 0, 0, .3);
    }
    :last-child > div:first-child {
        border-radius: 0 0 0 15px;
        -moz-border-radius: 0 0 0 15px;
    }
    :last-child  > div:last-child {
        border-radius: 0 0 15px 0;
        -moz-border-radius: 0 0 15px 0;
    }
`
const Cell = styled.div`
    display: table-cell;
    height: 50px;
    line-height: 50px;
    text-align: center;
`

function AdvanceTable(props){
    const { colums, datas, ...other } = props;
    const [curPage, SetCurPage] = useState(0)

    const header_line = colums.map( object => (
            <Cell >{object.name}</Cell>
    ))
    const data_lines = datas.map( data => 
        <Row>
            {colums.map( object =>  (<Cell> {data[object.tag]}</Cell>)) }
        </Row>
    )

    return (
        <CustomDiv style={{...other}}> 
            <CustomTable>
                <HeaderRow>
                    {header_line}
                </HeaderRow>
                {data_lines}
                <Row>
                <Cell><button>PageLeft</button></Cell>
                <Cell><button>PageRight</button></Cell>
                </Row>
            </CustomTable>
        </CustomDiv>
        
    )
}

AdvanceTable.defalutProps = {
    colums: [],
    datas: [],
}

export default AdvanceTable;