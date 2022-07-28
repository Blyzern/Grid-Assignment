import { all, fork } from 'redux-saga/effects';
import rootHome from '../Pages/Home/store/homeSaga';

export default function* rootSaga() {
  yield all([yield fork(rootHome)]);
}
