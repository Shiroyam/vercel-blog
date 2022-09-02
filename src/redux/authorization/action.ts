import axios from "axios";
import { Dispatch } from "react";

export const openAuthorization = () => {
  return {
    type: "OPEN_AUTH",
  };
};

export const closeAuthorization = () => {
  return {
    type: "CLOSE_AUTH",
  };
};

export const postAuthorization =
  (data: any) => async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios
        .post("https://vercel-blog.vercel.app/auth/login", {
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          const token = response.data.token;
          const id = response.data._id;
          const name = response.data.fullName;
          localStorage.setItem("token", token);
          localStorage.setItem("id", id);
          localStorage.setItem("name", name);
        });
      dispatch({
        type: "POST_AUTH",
        paylaod: response,
      });
      alert("Вы успешно зашли!");
    } catch (error) {
      alert("Введен неверный логин или пароль!");
    }
  };
