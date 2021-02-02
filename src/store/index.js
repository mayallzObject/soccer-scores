import Vue from "vue";
import Vuex from "vuex";
import matchPlayApi from "../services/MatchPlayService.js";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({})],
  state: {
    matches: [],
    dutch_1: [],
    dutch_2: [],
    standings: [],
    matchID: {}
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
    },
    SET_MATCH_ID(state, matchID) {
      state.matchID = matchID;
    }
  },

  actions: {
    fetchMatches({ commit }, { id, from, to }) {
      console.log("Season_Id, Period_from, Periot_to:", { id, from, to });
      matchPlayApi
        .getMatches({ id, from, to })
        .then(response => {
          commit("SET_MATCHES", response.data.data);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
    },
    fetchMatch({ commit }, matchId) {
      matchPlayApi
        .getMacth(matchId)
        .then(response => {
          commit("SET_MATCH_ID", response.data.data),
            console.log(response.data.data);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
        });
    },
    fetchStangins({ commit }) {
      matchPlayApi
        .getStandings()
        .then(response => {
          commit("SET_STANDINGS", response.data.data.standings);
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
    },
    getHomeTeam: state => {
      return state.matchID.home_team.name;
    },
    getAwayTeam: state => {
      return state.matchID.away_team.name;
    },
    getHomeTeamStats: state => {
      return state.matchID.match_statistics[0];
    },
    getAwayTeamStats: state => {
      return state.matchID.match_statistics[1];
    },
    getVenue: state => {
      return state.matchID.venue;
    },
    getMatchEvents: state => {
      return state.matchID.match_events;
    },
    getHomeLineup: state => {
      return state.matchID.lineups[0];
    },
    getAwayLineup: state => {
      return state.matchID.lineups[1];
    }
  },
  modules: {}
});
