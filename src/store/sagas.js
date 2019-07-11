import {takeEvery, put} from "redux-saga/effects";

function* assyncToggleLesson(action) {
    const {lesson} = action.lesson;
    const {module} = action.module;
    yield put({type: 'TOGGLE_LESSON', lesson, module })
}

export default function* root() {
    yield [
       takeEvery('ASSYNC_TOGGLE_LESSON', assyncToggleLesson),
    ];
}