import { createStore } from "vuex";

export default createStore({
  state: {
    users: [
      {
        name: "Игорь",
        surname: "Лысенко",
        age: 19,
        sex: "M",
        frameworks: ["Vue"],
      },
    ],
  },
  getters: {
    allUsers(state) {
      return state.users;
    },
    usersCount(state) {
      return state.users.length;
    },
  },
  mutations: {
    addUser(state, newUser) {
      state.users.push(newUser);
    },
    clear(state) {
      state.users = [];
    },
  },
  actions: {},
  modules: {},
});
