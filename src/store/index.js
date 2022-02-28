import { createStore } from "vuex";

const store = createStore({
  state: {
    elements: [],
    elementToday: null,
  },
  mutations: {
    addElements(state, payload) {
      state.elements = payload;
      console.log("elements:", payload);
    },
    addElementToday(state, payload) {
      state.elementToday = payload;
      console.log("element today:", payload);
    },
  },
});

const setup = async () => {
  try {
    const response = await fetch(
      "https://periodic-table-elements-info.herokuapp.com/elements"
    );
    const data = await response.json();
    store.commit("addElements", data);
    const random = Math.floor(Math.random() * 118); // make this change only once a day
    store.commit("addElementToday", store.state.elements[random]);
  } catch (err) {
    console.log(err);
  }
};

setup();

export default store;
