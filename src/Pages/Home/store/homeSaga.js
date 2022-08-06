import { takeLatest, put, all, call } from 'redux-saga/effects';
import { fetchWrapper } from '../../../utils/fetchWrapper';
import { getData, setData, setIsLoading } from './homeSlice';

function* fetchData() {
  const endpoint =
    'https://services.odata.org/TripPinRESTierService/(S(hespbvdrrmhquk5vqlzcpbro))/People';
  try {
    yield put(setIsLoading(true));
    const { data } = yield call(fetchWrapper, endpoint, 'GET');
    yield put(setData(data.value));
    yield put(setIsLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export default function* root() {
  yield all([takeLatest(getData.type, fetchData)]);
}
