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

function parse(str) {
    var y = str.substr(0, 4);
    var m = str.substr(4, 2);
    return new Date(y,m-1);
}
var scatterChartData = {
    datasets: [{
      label: "My First dataset",
      data: [
        {
            x: "201907",
            y: 4
        }, 
        {
            x: "201906",
            y: 6
        }, 
        {
            x: "201905",
            y: 8
        }, 
        {
            x: "201909",
            y: 9
        }, 
        {
            x: "201910",
            y: 10
        }, 
        {
            x: "201911",
            y: 5
        }]
    }]
  };


function CardChart(props) {

    const { width, height, ...other } = props;

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
                    style={
                        { width:'380px', height:'100%'}
                    }
                    options= {{
                        scales: {
                          xAxes: [{
                            position: 'bottom',
                            ticks: {
                                callback: function(value, index, values) {

                                    return value
                                    let str = String(value)
                                    console.log(str)
                                    return str.substring(0,4) + "-" + str.substring(4,6);
                                },
                            },
                            scaleLabel: {
                              display: true,
                              labelString: 'Day'
                            }
                          }],

                          yAxes: [{
                            position: 'left',
                            scaleLabel: {
                              display: true,
                              labelString: 'y axis'
                            }
                          }]
                        }
                    }}
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