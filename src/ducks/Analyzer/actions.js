import * as types from './types'

export const updateTradeTable = (data) => ({
    type: types.UPDATE_TRADE_TABLE,
    payload: data,  
})

export const updateTradeMeanChart = (data) => ({
    type: types.UPDATE_TRADE_MEAN_CHART,
    payload: data,  
})