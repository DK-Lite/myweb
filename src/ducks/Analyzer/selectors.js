import { createSelector } from 'reselect';

function pad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
  }

const getTradeTable = (state) => state.analyzer.get('tradeTable');

const getTradeTableFromData = createSelector(
	[ getTradeTable ],
	(items) => ({
            ymd: items.trade_year+"-"+pad(items.trade_month, 2)+"-"+pad(items.trade_day, 2),
            value: items.trade_value,
            area: items.dedicated_area,
    	})
)

export {
	getTradeTable,
}