import React from "react";
import "./authorization.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { closeAuthorization } from "../../../redux/authorization/action";
import { useForm } from "react-hook-form";
import { postAuthorization } from "../../../redux/authorization/action";

export const Authorization: React.FC = () => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const postAuth = (data: any) => {
    dispatch(postAuthorization(data));
    dispatch(closeAuthorization());
  };

  return (
    <>
      <div className="modal">
        <div className="modal__content">
          <div className="modal__headerContainer">
            <div className="modal__header">Вход в аккаунт</div>
            <CloseIcon
              onClick={() => dispatch(closeAuthorization())}
              className="modal__close"
            />
          </div>
          <form onSubmit={handleSubmit(postAuth)}>
            <div className="modal__inputEmail">
              <div className="modal__headerEmail">Email</div>
              <input
                {...register("email", {
                  required: "Поле обязательно!",
                  minLength: {
                    value: 3,
                    message: "Нужно ввести минимум 3 символа!",
                  },
                })}
                type="email"
                className="modal__input"
              />
              <div className="modal__context">
                {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
              </div>
            </div>
            <div className="modal__inputPassword">
              <div className="modal__headerPassword">Пароль</div>
              <input
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Пароль должен содержать 8 символов!",
                  },
                })}
                type="password"
                className="modal__input"
              />
              <div className="modal__context">
                {errors?.password && (
                  <p>{errors?.password?.message || "Поле обязательно!"}</p>
                )}
              </div>
            </div>
            <button type="submit" className="modal__button">
              Войти
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
