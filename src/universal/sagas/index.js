import { all, fork } from 'redux-saga/effects';

import watchRequestAlbums from 'sagas/albums';
import watchRequestPhotos from 'sagas/photos';

export default function* rootSaga() {
  yield all([fork(watchRequestAlbums), fork(watchRequestPhotos)]);
}
