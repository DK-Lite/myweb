import React from 'react'
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

    background: rgba(171, 177, 197, 1);
    background: rgba(255, 255, 255, 1);

    color : rgba(0, 0, 0, .5);
    font-size: 15px;
    font-weight: normal;

    > div:first-child {
        border-radius: 5px 0 0 0;
        -moz-border-radius: 5px 0 0 0;
    }
    > div:last-child {
        border-radius: 0 5px 0 0; 
        -moz-border-radius: 0 5px 0 0;
    }
`
const Row = styled.div`
    display: table-row;
    color : rgba(0, 0, 0, .8);
    background: rgba(255, 255, 255, 1);
    font-size: 15px;
    > *{
        border-bottom: 0.5px solid rgba(0, 0, 0, .3);
    }
    &:hover {
        background: rgba(126, 210, 255, .3);
        background: rgba(171, 177, 197, .3);
        > *{
        border-bottom: 0.5px solid rgb(255, 255, 255);
        }
    }
    :last-child > *{
        border-bottom: 0px solid rgba(0, 0, 0, .3);
    }
    :last-child > div:first-child {
        border-radius: 0 0 0 5px;
        -moz-border-radius: 0 0 0 5px;
    }
    :last-child  > div:last-child {
        border-radius: 0 0 5px 0;
        -moz-border-radius: 0 0 5px 0;
    }
`
const Cell = styled.div`
    display: table-cell;
    height: 50px;
    line-height: 50px;
    text-align: center;
    padding: 0 10px 0 10px;
`

function Table({ colums, datas, ...other }){

    const header_line = colums.map( object => (
            <Cell >{object.name}</Cell>
    ))
    const data_lines = datas.map( data => 
        <Row>
            {colums.map( object =>  (<Cell> {data[object.tag]}</Cell>)) }
        </Row>
    )

    return (
        <CustomDiv {...other}> 
            <CustomTable>
                <HeaderRow>
                    {header_line}
                </HeaderRow>
                {data_lines}
            </CustomTable>
        </CustomDiv>
        
    )
}

Table.defaultProps = {
    colums: [
        { name: 'No', tag:'no' },
        { name: '티거', tag:'tiger' },
        { name: 'ETF Name', tag:'etfName' },
        { name: '현재주가', tag:'curPrice' },
        { name: '연간배당금', tag:'yearDivid' },
        { name: '배당지급일', tag:'dividDate' },
        { name: '배당수익률', tag:'dividRevenue' },
        { name: '지급주기', tag:'dataCycle' },
        { name: '운용자산', tag:'operatingAssets' },
        { name: '운용보수', tag:'operatingRepair' },
        { name: '상장일', tag:'LisingDate' }
    ],
    datas: [
        {no:"1", tiger:'PFF', etfName:'iSshares Preferred...', curPrice:'$37.81', yearDivid:'$2.00', dividDate:'19.12.19', dividRevenue:'5.32%', dataCycle:'월배당', operatingAssets:'$17,014.28', operatingRepair:'0.46%', LisingDate:'07.03.30'},
        {no:"2", tiger:'PFF', etfName:'iSshares Preferred...', curPrice:'$37.81', yearDivid:'$2.00', dividDate:'19.12.19', dividRevenue:'5.32%', dataCycle:'월배당', operatingAssets:'$17,014.28', operatingRepair:'0.46%', LisingDate:'07.03.30'},
        {no:"3", tiger:'PFF', etfName:'iSshares Preferred...', curPrice:'$37.81', yearDivid:'$2.00', dividDate:'19.12.19', dividRevenue:'5.32%', dataCycle:'월배당', operatingAssets:'$17,014.28', operatingRepair:'0.46%', LisingDate:'07.03.30'},
        {no:"4", tiger:'PFF', etfName:'iSshares Preferred...', curPrice:'$37.81', yearDivid:'$2.00', dividDate:'19.12.19', dividRevenue:'5.32%', dataCycle:'월배당', operatingAssets:'$17,014.28', operatingRepair:'0.46%', LisingDate:'07.03.30'},
    ],
}

export default Table;