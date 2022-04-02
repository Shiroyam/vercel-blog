import axios from "axios";
import { Dispatch } from "react";

export const createPost = (data: any) => async (dispatch: Dispatch<any>) => {
  try {
    await axios.post(
      "http://localhost:5656/posts",
      {
        title: data.title,
        text: data.text,
        description: data.description,
        photoUrl: data.photoUrl,
      },
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    dispatch({
      type: "POST_CREATE",
    });
  } catch (error) {
    alert(error);
  }
};
