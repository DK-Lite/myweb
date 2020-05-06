import { createSelector } from 'reselect';

const getColor = (state) => state.UIReducer.get('color');
const getItems = (state) => state.itemReducer.get('items');
const getTasks = (state) => state.taskReducer.get('tasks');

const getTotalPriceWithItems = createSelector(
	[ getItems ],
	(items) => (
		items.reduce((acc, i) => {
			return acc + (i.get('price', 0) * i.get('quantity', 0));
		})
	)
);

const getTotalWorkingTimeWithTasks = createSelector(
	[ getTasks ],
	(tasks) => (
		tasks.reduce((acc, i) => {
			return acc + (i.get('workingTime', 0));
		})
	)
);

export {
	getColor, getItems, getTasks,
	getTotalPriceWithItems, getTotalWorkingTimeWithTasks 
}