import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'; //Redux Main
//import { createStructuredSelector } from 'reselect'; // no selectors.js 
//import * as selectors from 'ducks/Analyzer/selectors'

import MaterialTable from 'material-table';

const StyledCard = styled.div`
    width: 400px;
    height: 450px;
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

const Contents = styled.div`
    display: flex;
    height: 430px;
    background : white;
    padding: 10px 5px 10px 5px;
`


function pad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
  }


function CardTradeTable(props) {

    const { width, height, tradeTableData, ...other } = props;


    let dataName = "";
    if (tradeTableData.length > 0){
        dataName = tradeTableData[0].aptName;
    }

    const dataLists = tradeTableData.map( x => 
        ({
            ymd: x.tradeYear+"-"+pad(x.tradeMonth, 2)+"-"+pad(x.tradeDay, 2),
            value: x.tradeValue,
            area: x.dedicatedArea,
        }))


    return(
        <StyledCard
            style= {{
                width: width,
                height: height,
                ...other
            }}>
            {/* <Title>실거래 데이터</Title> */}
            
            <Contents>

                <MaterialTable
                    maxBodyHeight='100%'
                    style={{ width: '390px', height: '100%', zIndex: 0}}
                    title={dataName}
                    columns={[
                        { title: 'Date', field: 'ymd' },
                        { title: 'Price', field: 'value' },
                        { title: 'Area', field: 'area' },
                    ]}
                    data={dataLists}
                    options={{
                        filtering: false,
                        pageSize:5,
                        pageSizeOptions: [5],
                        search: false,
                        showFirstLastPageButtons: false,
                        sorting: true,
                }}      
                />

                {/* <Table 
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
                    ]}/> */}


            </Contents>
            
        </StyledCard>
    )

};


export default connect(
	// state => ({	
	// 	data: selectors.getTradeTable(state),
    // }), 
    state => state.analyzer,
)(CardTradeTable)