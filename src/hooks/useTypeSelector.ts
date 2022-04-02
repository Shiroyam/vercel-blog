import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux";

export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector