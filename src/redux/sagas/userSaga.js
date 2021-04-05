import { call, put, takeEvery } from 'redux-saga/effects';

const apiURL = 'http://localhost:8000/api/expertrons/user-login';

function getUser(username, pass) {
    return fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: {
            username: username,
            pass: pass
        }
    }).then(response => response.json())
        .catch((error) => { throw error });
}

function* fetchUser(username, pass) {
    try {
        const user = yield call(getUser(username, pass));
        yield put({ type: 'GET_USER_SUCCESS', user: user });
    } catch (e) {
        yield put({ type: 'GET_USER_FAILED', message: e.message });
    }
}

function* userSaga() {
    yield takeEvery('GET_USER_REQUEST', fetchUser());
}

export default userSaga;