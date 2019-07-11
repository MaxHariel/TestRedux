import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  assyncToggleLesson: ["module", "lesson"]
});

console.log(Types)
console.log(Creators)

const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Iniciando com React",
      lessons: [{ id: 1, title: "Aula 1" }, { id: 2, title: "Aula 2" }]
    },
    {
      id: 2,
      title: "Aprendendo Redux",
      lessons: [{ id: 3, title: "Aula 3" }, { id: 4, title: "Aula 4" }]
    }
  ]
};

const course = (state = INITIAL_STATE, action) => (
  { ...state, activeLesson: action.lesson, activeModule: action.module }
);

export default createReducer(INITIAL_STATE, {
  [Types.TOGGLE_LESSON]: course
});
