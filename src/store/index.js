import Vue from "vue";
import Vuex from "vuex";
import matchPlayApi from "../services/MatchPlayService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dutch_1: [],
    dutch_2: []
  },
  mutations: {
    SET_DUTCH_1(state, dutch_1) {
      state.dutch_1 = dutch_1;
    },
    SET_DUTCH_2(state, dutch_2) {
      state.dutch_2 = dutch_2;
    }
  },

  actions: {
    fetchDutchOne({ commit }) {
      matchPlayApi
        .getDutchOne()
        .then(response => {
          commit("SET_DUTCH_1", response.data.data);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
    },
    fetchDutchTwo({ commit }) {
      matchPlayApi
        .getDutchTwo()
        .then(response => {
          commit("SET_DUTCH_2", response.data.data);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
    }
  },
  getters: {
    getSeasonOne: state => {
      return state.dutch_1.slice(0, 1).map(one => one.season_id);
    },
    getSeasonTwo: state => {
      return state.dutch_2.slice(0, 1).map(two => two.season_id);
    }
  },
  modules: {}
});
