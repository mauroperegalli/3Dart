import { CLOSE_LOGIN, OPEN_LOGIN } from "../types";


export const openLogIn = () => ({ type: OPEN_LOGIN })
export const closeLogIn = () => ({ type: CLOSE_LOGIN })