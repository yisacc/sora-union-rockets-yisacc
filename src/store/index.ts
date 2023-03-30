import { action, createStore } from "easy-peasy";
import { IUsersModel } from "./types";

export const store = createStore<IUsersModel>({
  users: [],

  addUser: action((state, payload) => {
    state.users.push(payload);
  }),

  deleteUser: action((state, payload) => {
    state.users = state.users.filter((user) => user.id !== payload);
  }),

  updateUser: action((state, payload) => {
    const { id, newRocket } = payload;
    state.users = state.users.map((existingUser) => {
      if (existingUser.id === id) {
        return { ...existingUser, ...newRocket };
      }
      return existingUser;
    });
  }),
});
