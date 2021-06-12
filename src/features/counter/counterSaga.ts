import { takeEvery, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { delay, put } from "redux-saga/effects";
import { incrementSaga, incrementSagaSuccess } from "./counterSlice";

// export function* log(action: PayloadAction){
//     console.log('log', action);
// }

function* handleIncrementSaga(action: PayloadAction<number>) {
    console.log('Waiting 1s');
    // wait 1s
    yield delay(1000);
    console.log('Waiting done, dispatch action');

    // dispatch action success
    yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
    console.log('counter saga');
    // yield takeEvery('counter/increment', log);
    // yield takeEvery(increment().type, log);
    // yield takeEvery('*', log);
    yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
    // yield takeLatest(incrementSaga.toString(), handleIncrementSaga); --> use this for takeLatest
}