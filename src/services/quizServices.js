import { fetchApi } from "../utils/fetchApi";

export const getQuizByIdApi = async (quizId) => {
 return  await fetchApi({
    url: `/api/quiz/${quizId}`,
    method: "get",
  });
};
