import React from 'react'
import styled from 'styled-components'
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


function PieChart(props) {

    const { width, height, ...other } = props;

    return(
        <StyledCard
            style= {{
                width: width,
                height: height,
                ...other
            }}>
            <Title>실거래 추세</Title>

            <Contents>
                <ChartTemplate
                    type='pie'
                    data={{
                        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                        datasets: [{
                            label: '# of Votes',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    }}
                    style={
                        { width:'380px', height:'100%'}
                    }
                ></ChartTemplate>
            </Contents>
            
        </StyledCard>
    )

};

export default PieChart;