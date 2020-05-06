import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'; //Redux Main

import { ChartTemplate } from 'components/atoms'



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

const Contents = styled.div`
    display: flex;
    height: 230px;
    background : white;
    padding: 10px 5px 10px 5px;
`



// {
//     date: "2019-11"
//     data = [
//         {
//             area: "86.3m",
//             data: 82500,
//         },
//         {
//             area: "59.3m",
//             data: 52310,
//         },
//     ]
// }

function CardChart(props) {

    const { width, height, tradeMeanChartData, ...other } = props;

    
    return(
        <StyledCard
            style= {{
                width: width,
                height: height,
                ...other
            }}>
            <Title>실거래 차트</Title>
            {/*  datalist.labels
            datalist.meanPrices*/}
            <Contents>
                <ChartTemplate
                    type='scatter'
                    data={{
                        label: 'Scatter Dataset',
                        data: [
                        {
                            label: "86.3m",
                            data: [82500, 90000, 100000],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0)',
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                            ],
                            borderWidth: 3
                        },

                        {
                            label: "59.3m",
                            data: [52310, 60000, 70002],
                            backgroundColor: [
                                'rgba(54, 162, 235, 0)',
                            ],
                            borderColor: [
                                'rgba(54, 162, 235, 1)',
                            ],
                            borderWidth: 3
                        },

                        {
                            label: "30.3m",
                            data: [32520, 43323, 60323],
                            backgroundColor: [
                                'rgba(255, 255, 86, 0)',
                            ],
                            borderColor: [
                                'rgba(255, 206, 86, 1)',
                            ],
                            borderWidth: 3
                        },
                    ]
                    }}
                    style={
                        { width:'380px', height:'100%'}
                    }
                ></ChartTemplate>
            </Contents>
            
        </StyledCard>
    )

};
export default connect(
	// state => ({	
	// 	data: selectors.getTradeTable(state),
    // }), 
    state => state.analyzer,
)(CardChart)