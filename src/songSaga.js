import { call, put, takeEvery } from "redux-saga/effects";
import { getSongsSuccess, updateSongRequest,updateSongSuccess,updateSongFailure,deleteSongRequest,deleteSongSuccess,deleteSongFailure,createSongRequest,createSongSuccess,createSongFailure} from "./songState";
function* workGetCatsFetch(){
    const songs = yield call(()=>fetch('https://jsonplaceholder.typicode.com/albums/1/photos'));
    const formattedSongs =yield songs.json();
    const shortenedSongs = formattedSongs.slice(0,12);
    yield put(getSongsSuccess(shortenedSongs));
}

function* updateSong(action) {
    try {
      const updatedSong = action.payload;
      yield call(fetch, `https://jsonplaceholder.typicode.com/albums/1/photos/${updatedSong.id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedSong),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      yield put(updateSongSuccess(updatedSong));
    } catch (error) {
      yield put(updateSongFailure(error.message));
    }
  }

function* deleteSong(action) {
    try {
      const songId = action.payload;
      yield call(fetch, `https://jsonplaceholder.typicode.com/albums/1/photos/${songId}`, {
        method: 'DELETE'
      });
      yield put(deleteSongSuccess(songId));
    } catch (error) {
      yield put(deleteSongFailure(error.message));
    }
  }
  
  function* createSong(action) {
    try {
      const newSong = action.payload;
      yield call(fetch, 'https://jsonplaceholder.typicode.com/albums/1/photos/', {
        method: 'POST',
        body: JSON.stringify(newSong),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      yield put(createSongSuccess(newSong));
    } catch (error) {
      yield put(createSongFailure(error.message));
    }
  }
  
function* songSaga(){
    yield takeEvery('songs/getSongsFetch', workGetCatsFetch);
    yield takeEvery(updateSongRequest.type, updateSong);
    yield takeEvery(deleteSongRequest.type, deleteSong);
    yield takeEvery(createSongRequest.type, createSong);
}



export default songSaga;