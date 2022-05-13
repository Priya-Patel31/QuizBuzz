import { createContext, useContext, useReducer } from "react";
import { getQuizByIdApi } from "../../services/quizServices";
import { reducer } from "./QuizReducer";

const QuizContext = createContext();

const QuizContextProvider = ({ children }) => {
  const initialState = {
    _id: null,
    quizName: null,
    quizImage: null,
    questions: [],
    correctAnswers: [],
    currentQuestion : 0,
    totalScore : 0,
    answers : [] 
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getQuizById = async (quizId) => {
    const {
      data: { quiz },
    } = await getQuizByIdApi(quizId);
    dispatch({ type: "SET_QUIZ", payload: { quiz } });
  };

  console.log(state);
  return (
    <QuizContext.Provider value={{ getQuizById, state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
export { QuizContextProvider };
