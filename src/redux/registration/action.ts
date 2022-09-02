import axios from "axios";
import { Dispatch } from "react";

export const openReg = () => {
  return {
    type: "OPEN_REG",
  };
};

export const closeReg = () => {
  return {
    type: "CLOSE_REG",
  };
};

export const postReg = (data: any) => async (dispatch: Dispatch<any>) => {
  try {
    await axios.post("https://vercel-blog.vercel.app/auth/register", {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    });
    dispatch({
      type: "POST_REG",
    });
    alert(
      "Поздравляем!Вы успешно создали аккаунт. Теперь вы можете зайти в него"
    );
  } catch (error) {
    alert("Что-то пошло не так!");
  }
};
