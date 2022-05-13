export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_QUIZ":{
      const questions = action.payload.quiz.questions;
      const answers = Array(questions.length).fill("");
        return { ...state, ...action.payload.quiz,answers : answers};
      }
     
    case "NEXT_QUESTION": {
      if (state.currentQuestion === state.questions.length - 1) {
        return state;
      }
      return { ...state, currentQuestion: state.currentQuestion + 1 };
    }
    case "PREV_QUESTION": {
      if (state.currentQuestion === 0) {
        return state;
      }
      return { ...state, currentQuestion: state.currentQuestion - 1 };
    }
    case "SET_ANSWERS":
      let updatedAnswers = [...state.answers];
      updatedAnswers[action.payload.questionIndex] =
        action.payload.optionSelected;
      return { ...state, answers: updatedAnswers };

      case "RESET_CURRENT_QUESTION" :
      return {...state,currentQuestion : 0}
    default:
      return state;
  }
};
