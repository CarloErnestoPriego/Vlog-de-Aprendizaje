import axios from "axios";

const API_BASE_URL = "http://localhost:3000/gestorOpiniones/v1";

export const postComment = async (commentData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/comments/`, commentData);
    return response.data.comment;
  } catch (error) {
    throw error;
  }
};

export const getComment = async () => {
  try {
    const response = await commentService.get("comments/");
    return response.data;
  } catch (error) {
    console.log("error al obtener comentarios: ", error);
    throw error;
  }
};
