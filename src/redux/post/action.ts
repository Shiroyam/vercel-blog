import { Dispatch } from "react";
import axios from "axios";

export const getPost =
  (id: string | undefined) => async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.get(`http://localhost:5656/posts/${id}`);
      dispatch({
        type: "GET_POST",
        payload: response.data,
      });
    } catch (error) {
      alert(error);
    }
  };
