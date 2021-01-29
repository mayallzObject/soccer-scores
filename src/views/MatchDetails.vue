<template>
  <div>
    <div v-if="matchID.match_statistics !== null">
      <div else class="details-header">
        <div class="details-header__stadium">Stadium: Ajax Stadium</div>
        <div class="details-header__city">City: Amsterdam</div>
        <div class="details-header__league">Eerstedevise</div>
        <div class="details-header__round">Preseason</div>
      </div>
      <div v-for="event in getMatchEvents" :key="event.id" class="match-events">
        {{ event.minute }}
        {{ event.type }}
        <div v-if="event.type === 'substitution'">
          {{ event.player_name }}
          {{ event.related_player_name }}
        </div>
        <div v-else>
          {{ event.player_name }}
        </div>

        {{ event.result }}
      </div>

      <div
        v-if="getAwayTeamStats !== null && getHomeTeamStats !== null"
        class="stats-container"
      >
        <div class="stats-grid stats-grid--possession">Possession</div>
        <v-progress-linear
          reverse
          class="progress"
          color="orange"
          buffer-value="100"
          height="15"
          :value="getHomeTeamStats.possessionpercent"
          >{{ getHomeTeamStats.possessionpercent }}%</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="15"
          buffer-value="100"
          :value="getAwayTeamStats.possessionpercent"
          >{{ getAwayTeamStats.possessionpercent }}%</v-progress-linear
        >

        <div class="stats-grid stats-grid--shot-on">Shots on target</div>
        <v-progress-linear
          reverse
          class="progress"
          color="orange"
          buffer-value="35"
          height="15"
          :value="getHomeTeamStats.shots_on_target"
          >{{ getHomeTeamStats.shots_on_target }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="15"
          buffer-value="35"
          :value="getAwayTeamStats.shots_on_target"
          >{{ getAwayTeamStats.shots_on_target }}</v-progress-linear
        >

        <div class="stats-grid stats-grid--shots-off">Shots off target</div>
        <v-progress-linear
          reverse
          class="progress"
          color="orange"
          buffer-value="35"
          height="15"
          :value="getHomeTeamStats.shots_off_target"
          >{{ getHomeTeamStats.shots_off_target }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="15"
          buffer-value="35"
          :value="getAwayTeamStats.shots_off_target"
          >{{ getAwayTeamStats.shots_off_target }}</v-progress-linear
        >

        <div class="stats-grid stats-grid--shots-blocked">Blocked Shots</div>
        <v-progress-linear
          reverse
          top
          class="progress"
          color="orange"
          buffer-value="35"
          height="15"
          :value="getHomeTeamStats.shots_blocked"
          >{{ getHomeTeamStats.shots_blocked }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="15"
          buffer-value="35"
          :value="getAwayTeamStats.shots_blocked"
          >{{ getAwayTeamStats.shots_blocked }}</v-progress-linear
        >
        <div class="stats-grid stats-grid--corners">Corners</div>
        <v-progress-linear
          reverse
          top
          class="progress"
          color="orange"
          buffer-value="35"
          height="15"
          :value="getHomeTeamStats.corners"
          >{{ getHomeTeamStats.corners }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="15"
          buffer-value="35"
          :value="getAwayTeamStats.corners"
          >{{ getAwayTeamStats.corners }}</v-progress-linear
        >
        <div class="stats-grid stats-grid--offsides">Offsides</div>
        <v-progress-linear
          reverse
          top
          class="progress"
          color="orange"
          buffer-value="35"
          height="15"
          :value="getHomeTeamStats.offsides"
          >{{ getHomeTeamStats.offsides }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="15"
          buffer-value="35"
          :value="getAwayTeamStats.offsides"
          >{{ getAwayTeamStats.offsides }}</v-progress-linear
        >
        <div class="stats-grid stats-grid--fouls">Fouls</div>
        <v-progress-linear
          reverse
          top
          class="progress"
          color="orange"
          buffer-value="35"
          height="15"
          :value="getHomeTeamStats.fouls"
          >{{ getHomeTeamStats.fouls }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="15"
          buffer-value="35"
          :value="getAwayTeamStats.fouls"
          >{{ getAwayTeamStats.fouls }}</v-progress-linear
        >
        <div class="stats-grid stats-grid--throw-in">Trow ins</div>
        <v-progress-linear
          reverse
          top
          class="progress"
          color="orange"
          buffer-value="35"
          height="15"
          :value="getHomeTeamStats.throw_in"
          >{{ getHomeTeamStats.throw_in }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="15"
          buffer-value="35"
          :value="getAwayTeamStats.throw_in"
          >{{ getAwayTeamStats.throw_in }}</v-progress-linear
        >
        <div class="stats-grid stats-grid--yellow-card">Yellow cards</div>
        <v-progress-linear
          reverse
          top
          class="progress"
          color="orange"
          buffer-value="35"
          height="15"
          :value="getHomeTeamStats.yellowcards"
          >{{ getHomeTeamStats.yellowcards }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="15"
          buffer-value="35"
          :value="getAwayTeamStats.yellowcards"
          >{{ getAwayTeamStats.yellowcards }}</v-progress-linear
        >
        <div class="stats-grid stats-grid--redcards">Redcards</div>
        <v-progress-linear
          reverse
          top
          class="progress"
          color="orange"
          buffer-value="35"
          height="15"
          :value="getHomeTeamStats.redcards"
          >{{ getHomeTeamStats.redcards }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="15"
          buffer-value="35"
          :value="getAwayTeamStats.redcards"
          >{{ getAwayTeamStats.redcards }}</v-progress-linear
        >
        <div class="stats-grid stats-grid--goal-kick">Goal Kick</div>
        <v-progress-linear
          reverse
          top
          class="progress"
          color="orange"
          buffer-value="35"
          height="15"
          :value="getHomeTeamStats.goal_kick"
          >{{ getHomeTeamStats.goal_kick }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="15"
          buffer-value="35"
          :value="getAwayTeamStats.goal_kick"
          >{{ getAwayTeamStats.goal_kick }}</v-progress-linear
        >
        <div class="stats-grid stats-grid--penalties">Penaltiesk</div>
        <v-progress-linear
          reverse
          top
          class="progress"
          color="orange"
          buffer-value="35"
          height="15"
          :value="getHomeTeamStats.penalties"
          >{{ getHomeTeamStats.penalties }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="15"
          buffer-value="35"
          :value="getAwayTeamStats.penalties"
          >{{ getAwayTeamStats.penalties }}</v-progress-linear
        >
        <div class="stats-grid stats-grid--free-kick">Free Kick</div>
        <v-progress-linear
          reverse
          top
          class="progress"
          color="orange"
          buffer-value="35"
          height="15"
          :value="getHomeTeamStats.free_kick"
          >{{ getHomeTeamStats.free_kick }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="15"
          buffer-value="35"
          :value="getAwayTeamStats.free_kick"
          >{{ getAwayTeamStats.free_kick }}</v-progress-linear
        >
      </div>
    </div>
    <h1 v-else>There are no statistics available for this match</h1>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "MatchDetails",
  components: {},
  props: ["matchId"],
  computed: {
    getHomeTeamStats() {
      return this.$store.getHomeTeamStats;
    },
    getAwayTeamStats() {
      return this.$store.getAwayTeamStats;
    },
    getMatchEvents() {
      return this.$store.getMatchEvents;
    },
    ...mapGetters([
      "getHomeTeam",
      "getHomeTeamStats",
      "getAwayTeamStats",
      "getMatchEvents"
    ]),
    ...mapState(["matchID"])
  },

  created() {
    this.$store.dispatch("fetchMatch", this.matchId);
  }
};
</script>
