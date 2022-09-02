import { Dispatch } from "react";
import axios from "axios";
import { text } from "stream/consumers";

export const getPostEditing =
  (id: string | undefined) => async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.get(`https://vercel-blog.vercel.app/posts/${id}`);
      dispatch({
        type: "GET_POST_EDITING",
        payload: response.data,
      });
    } catch (error) {
      alert(error);
    }
  };

export const patchPost =
  (data: any, id: string | undefined) => async (dispatch: Dispatch<any>) => {
    await axios.patch(
      `https://vercel-blog.vercel.app/posts/${id}`,
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
      type: "PATCH_POST",
    });
  };

export const deletePost =
  (id: string | undefined) => async (dispatch: Dispatch<any>) => {
    await axios.delete(`https://vercel-blog.vercel.app/posts/${id}`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    dispatch({
      type: "DELETE_POST",
    });
  };

export const patchComment =
  (text: string, id: string | undefined) => async (dispatch: Dispatch<any>) => {
    await axios.patch(
      `https://vercel-blog.vercel.app/comments/${id}`,
      {
        text: text,
      },
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    dispatch({
      type: "PATCH_COMMENT",
    });
  };

export const deleteComment =
  (id: string | undefined) => async (dispatch: Dispatch<any>) => {
    await axios.delete(`https://vercel-blog.vercel.app/comments/${id}`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    dispatch({
      type: "DELETE_COMMENT",
    });
  };
