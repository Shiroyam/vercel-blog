import React from "react";
import { Menu } from "../../components/menu/Menu";
import { Navbar } from "../../components/navbar/Navbar";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getPostEditing } from "../../redux/editing/action";
import { useParams } from "react-router-dom";
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { patchPost } from "../../redux/editing/action";
import "./editingPage.scss";

export const EditingPage: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const onSubmitHandlear = (data: any) => {
    dispatch(patchPost(data, id));
    window.location.reload();
  };

  React.useEffect(() => {
    dispatch(getPostEditing(id));
  }, [id]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const { post } = useTypesSelector((state) => state.editing);

  return (
    <>
      <Menu></Menu>
      <Navbar></Navbar>
      <div className="create">
        <form onSubmit={handleSubmit(onSubmitHandlear)}>
          <div className="create__headerContainer">
            <textarea
              {...register("title", {
                required: "Поле обязательно!",
                minLength: {
                  value: 6,
                  message: "Нужно ввести минимум 6 символа!",
                },
                maxLength: {
                  value: 35,
                  message: "Вы ввели максимальное допустимое число символов",
                },
              })}
              placeholder="Введите заголовок..."
              className="create__headerInput"
            >
              {post.title}
            </textarea>
            <div className="create__context">
              {errors?.title && <p>{errors?.title?.message || "Error!"}</p>}
            </div>
          </div>
          <div className="create__descriptionContainer">
            <div className="create__header">Короткое описание</div>
            <textarea
              {...register("description", {
                required: "Поле обязательно!",
                minLength: {
                  value: 6,
                  message: "Нужно ввести минимум 6 символа!",
                },
                maxLength: {
                  value: 160,
                  message: "Вы ввели максимальное допустимое число символов",
                },
              })}
              className="create__input"
            >
              {post.description}
            </textarea>
            <div className="create__context">
              {errors?.description && (
                <p>{errors?.description?.message || "Error!"}</p>
              )}
            </div>
          </div>
          <div className="create__linkContainer">
            <div className="create__header">Ссылка на изображение:</div>
            <div className="create__form">
              <div className="create__container">
                <textarea
                  {...register("photoUrl", {
                    required: "Поле обязательно!",
                    minLength: {
                      value: 6,
                      message: "Нужно ввести минимум 6 символа!",
                    },
                    maxLength: {
                      value: 100,
                      message:
                        "Вы ввели максимальное допустимое число символов",
                    },
                  })}
                  placeholder="Вставьте URL..."
                  className="create__input"
                >
                  {post.photoUrl}
                </textarea>
                <button disabled className="create__button">
                  Загрузить
                </button>
              </div>
              <div className="create__context">
                {errors?.photoUrl && (
                  <p>{errors?.photoUrl?.message || "Error!"}</p>
                )}
              </div>
            </div>
          </div>
          <div className="create__textContainer">
            <div className="create__header">Полное описание</div>
            <textarea
              {...register("text", {
                required: "Поле обязательно!",
                minLength: {
                  value: 6,
                  message: "Нужно ввести минимум 6 символа!",
                },
              })}
              className="create__input"
            >
              {post.text}
            </textarea>
            <div className="create__context">
              {errors?.text && <p>{errors?.text?.message || "Error!"}</p>}
            </div>
          </div>
          <button type="submit" className="create__button">
            Изменить
          </button>
        </form>
      </div>
    </>
  );
};
