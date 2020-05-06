import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import * as types from './types'
import * as mapActions from './actions'
import * as analyActions from 'ducks/Analyzer/actions'
import { instance } from 'utils/api'


function* updateAptSaga(action){
    try{
        const { data } = yield call(instance.post, "/api/data-warehouse/apt-unique-info/apt-info", action.payload)
        yield put(analyActions.updateTradeTable(data.info))
        //const data = yield call(instance.post, "host:port", action.payload)
        //yield put(templateActions.success)
    } catch (e){
        //console.error(e);
        //yield put(templateActions.fail)
    }
}



//     labels: ["2019-11", "2019-12", "2020-01"],
//     datasets: [
//         {
//             label: "86.3m",
//             data: [82500, 90000, 100000],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0)',
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//             ],
//             borderWidth: 3
//         },

// {
//     _id: {area: "60.45", day: "2019-10"}
//     aptName: "20411"
//     roadCityCode: "11110"
//     roadCode: "3100021"
//     value: 41000
// }


// output.labels

// data.info.map( x => (
//     output.labels.appand(x._id.day)
//     output.datasets.appand(x._id.day)
// data.info.sort(function(a, b) {
//  
//});

// ))


function* updateAptChartSaga(action){
    try{
        const { data } = yield call(instance.post, "/api/data-mart/apt-trade-month-avg/apt-info", action.payload)

        yield put(analyActions.updateTradeMeanChart(data.info))

    } catch (e){
        //console.error(e);
    }
}



function* loadAptInfoSaga(){
    try{
        const { data } = yield call(instance.get, "/api/data-warehouse/apt-unique-info")
        yield put(mapActions.setAptInfos(data.info))
    } catch (e){
        console.error(e);
        //yield put(templateActions.fail)
    }
}

export function* watchSaga(){
    yield takeLatest(types.UPDATE_APT, updateAptSaga);
    yield takeLatest(types.UPDATE_APT_CHART, updateAptChartSaga);
    yield takeEvery(types.LOAD_APT_INFOS, loadAptInfoSaga);
}