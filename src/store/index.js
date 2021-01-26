import Vue from "vue";
import Vuex from "vuex";
import matchPlayApi from "../services/MatchPlayService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    matches: [],
    dutch_1: [],
    dutch_2: [],
    standings: []
  },
  mutations: {
    SET_MATCHES(state, matches) {
      state.matches = matches;
    },
    SET_DUTCH_1(state, dutch_1) {
      state.dutch_1 = dutch_1;
    },
    SET_DUTCH_2(state, dutch_2) {
      state.dutch_2 = dutch_2;
    },
    SET_STANDINGS(state, standings) {
      state.standings = standings;
    }
  },

  actions: {
    fetchMatches({ commit }, { id, from, to }) {
      console.log("Season_Id, Period_from, Periot_to:", { id, from, to });
      matchPlayApi
        .getMatches({ id, from, to })
        .then(response => {
          commit("SET_MATCHES", response.data.data);
          console.log(response.data.data);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
    },
    fetchStandings({ commit }, id) {
      matchPlayApi
        .getStandings(id)
        .then(response => {
          commit("SET_STANDINGS", response.data.data.standings),
            console.log(response.data);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
    },
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
