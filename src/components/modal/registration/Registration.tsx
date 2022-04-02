import React from "react";
import "./registration.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeReg } from "../../../redux/registration/action";
import { postReg } from "../../../redux/registration/action";
import { useTypesSelector } from "../../../hooks/useTypeSelector";

export const Registration: React.FC = () => {
  const dispatch = useDispatch();
  const { flagReg } = useTypesSelector((state) => state.reg);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const postRegHandel = (data: any) => {
    dispatch(postReg(data));
    dispatch(closeReg());
  };

  return (
    <>
      {flagReg && (
        <div className="modalReg">
          <div className="modalReg__content">
            <div className="modalReg__headerContainer">
              <div className="modalReg__header">Вход в аккаунт</div>
              <CloseIcon
                onClick={() => dispatch(closeReg())}
                className="modalReg__close"
              />
            </div>
            <form onSubmit={handleSubmit(postRegHandel)}>
              <div className="modalReg__fullName">
                <div className="modalReg__headerFullName">Имя и Фамилия</div>
                <input
                  {...register("fullName", {
                    required: "Поле обязательно!",
                    minLength: {
                      value: 3,
                      message: "Нужно ввести минимум 3 символа!",
                    },
                  })}
                  className="modalReg__input"
                />
                <div className="modalReg__context">
                  {errors?.fullName && (
                    <p>{errors?.email?.fullName || "Поле обязательно!"}</p>
                  )}
                </div>
              </div>
              <div className="modalReg__inputEmail">
                <div className="modalReg__headerEmail">Email</div>
                <input
                  {...register("email", {
                    required: "Поле обязательно!",
                    minLength: {
                      value: 3,
                      message: "Нужно ввести минимум 3 символа!",
                    },
                  })}
                  type="email"
                  className="modalReg__input"
                />
                <div className="modalReg__context">
                  {errors?.email && (
                    <p>{errors?.email?.message || "Поле обязательно!"}</p>
                  )}
                </div>
              </div>
              <div className="modalReg__inputPassword">
                <div className="modalReg__headerPassword">Пароль</div>
                <input
                  {...register("password", {
                    required: "Поле обязательно!",
                    minLength: {
                      value: 8,
                      message: "Нужно ввести минимум 8 символа!",
                    },
                  })}
                  type="password"
                  className="modalReg__input"
                />
                <div className="modalReg__context">
                  {errors?.password && (
                    <p>{errors?.password?.message || "Поле обязательно!"}</p>
                  )}
                </div>
              </div>
              <button type="submit" className="modalReg__button">
                Зарегистрироваться
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
