import { createStore } from "vuex";
import { languages } from "../constants";

export default createStore({
  state: {
    currentLanguage: languages[0],
    userInfo: {
      title: "",
      name: "",
      email: "",
      password: "",
    },
  },
  mutations: {
    changeLanguage(state, language) {
      state.currentLanguage = language;
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {},
  modules: {},
});
