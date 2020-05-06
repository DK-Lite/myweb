import React, { useRef, useEffect, useState } from 'react'
import Chart from 'chart.js'
import { connect } from 'react-redux'; //Redux Main

function ChartTemplate({type, options, style, tradeMeanChartData}) {

    const chartContainer = useRef();
    const [chartInstance, setChartInstance] = useState(null);
    const paramter = {
        type: type,
        data: {
            datasets: [{
            label: "trade",
            data: [],
            }],
        },
        options: options
    }

    const updateDataset = (datasetIndex, newData) => {
        if(chartInstance == null) return

        console.log(newData)
        chartInstance.data.datasets[datasetIndex].data = newData;
        chartInstance.update();
    };

    const trans = (str) => {
        let month = str.substring(4, 6)

        month = "00" + month;
        month = month.slice(-2);

        console.log(str.substring(0, 4) + month)
        return str.substring(0, 4) +"-"+ month

    }
    const onUpdate = () => {
        const data = tradeMeanChartData.map(trade => ({
            x: trans(trade._id.day),
            y: trade.value
        }))
        updateDataset(0, data);
    };

    function InitChart(){
        if(chartContainer && chartContainer.current) {
            const newChartInstance = new Chart(chartContainer.current, paramter);
            setChartInstance(newChartInstance);
        }
    }

    useEffect(onUpdate, [tradeMeanChartData])
    useEffect(InitChart, [chartContainer]);
    
    return (
        <div>
            <canvas  
                style= {style} 
                ref={chartContainer} />
        </div>
    )
}
export default connect(
	// state => ({	
	// 	data: selectors.getTradeTable(state),
    // }), 
    state => state.analyzer,
)(ChartTemplate)
//export default ChartTemplate;
