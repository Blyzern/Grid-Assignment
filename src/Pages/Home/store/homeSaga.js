import { takeLatest, put, all } from 'redux-saga/effects';
import { getData, setLoading } from './homeSlice';

function* fetchData() {
  try {
    yield put(setLoading(true));

    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export default function* rootHome() {
  yield all([takeLatest(getData.type, fetchData)]);
}
