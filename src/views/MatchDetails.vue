<template>
  <div>
    <!-- <div v-if="matchID.match_statistics !== null"> -->
    <div else class="teams-header">
      <img
        :src="matchID.home_team.logo"
        alt="home-logo"
        class="teams-header__img"
      />
      <div class="teams-header__goals">
        {{ getHomeTeamStats.goals }}
        -
        {{ getAwayTeamStats.goals }}
      </div>
      <img
        :src="matchID.away_team.logo"
        alt="away-logo"
        class="teams-header__img"
      />
      <div class="teams-header__name">
        {{ getHomeTeamStats.team_name }}
      </div>
      <div class="teams-header__name">({{ matchID.status }})</div>
      <div class="teams-header__name">
        {{ getAwayTeamStats.team_name }}
      </div>
    </div>
    <div else class="details-header">
      <!-- <div class="details-header__stadium">Ajax Stadium</div>
      <div class="details-header__city">Amsterdam</div>
      <div class="details-header__league">Eerstedevise</div>
      <div class="details-header__round">Preseason</div> -->
    </div>
    <div class="details-container">
      <div
        v-if="getAwayTeamStats !== null && getHomeTeamStats !== null"
        class="stats-container"
      >
        <img :src="matchID.home_team.logo" alt="home-logo" class="stats-img" />
        <img :src="matchID.away_team.logo" alt="home-logo" class="stats-img" />
        <div class="stats-grid stats-grid--possession">Possession</div>
        <v-progress-linear
          reverse
          class="progress"
          color="orange"
          buffer-value="100"
          height="19"
          :value="getHomeTeamStats.possessionpercent"
          >{{ getHomeTeamStats.possessionpercent }}%</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="19"
          buffer-value="100"
          :value="getAwayTeamStats.possessionpercent"
          >{{ getAwayTeamStats.possessionpercent }}%</v-progress-linear
        >

        <div class="stats-grid stats-grid--shot-on">Shots on target</div>
        <v-progress-linear
          reverse
          class="progress"
          color="orange"
          buffer-value="100"
          height="19"
          :value="getHomeTeamStats.shots_on_target"
          >{{ getHomeTeamStats.shots_on_target }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="19"
          buffer-value="100"
          :value="getAwayTeamStats.shots_on_target"
          >{{ getAwayTeamStats.shots_on_target }}</v-progress-linear
        >

        <div class="stats-grid stats-grid--shots-off">Shots off target</div>
        <v-progress-linear
          reverse
          class="progress"
          color="orange"
          buffer-value="100"
          height="19"
          :value="getHomeTeamStats.shots_off_target"
          >{{ getHomeTeamStats.shots_off_target }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="19"
          buffer-value="100"
          :value="getAwayTeamStats.shots_off_target"
          >{{ getAwayTeamStats.shots_off_target }}</v-progress-linear
        >

        <div class="stats-grid stats-grid--shots-blocked">Blocked Shots</div>
        <v-progress-linear
          reverse
          class="progress"
          color="orange"
          buffer-value="100"
          height="19"
          :value="getHomeTeamStats.shots_blocked"
          >{{ getHomeTeamStats.shots_blocked }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="19"
          buffer-value="100"
          :value="getAwayTeamStats.shots_blocked"
          >{{ getAwayTeamStats.shots_blocked }}</v-progress-linear
        >
        <div class="stats-grid stats-grid--corners">Corners</div>
        <v-progress-linear
          reverse
          class="progress"
          color="orange"
          buffer-value="100"
          height="19"
          :value="getHomeTeamStats.corners"
          >{{ getHomeTeamStats.corners }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="19"
          buffer-value="100"
          :value="getAwayTeamStats.corners"
          >{{ getAwayTeamStats.corners }}</v-progress-linear
        >
        <div class="stats-grid stats-grid--offsides">Offsides</div>
        <v-progress-linear
          reverse
          class="progress"
          color="orange"
          buffer-value="100"
          height="19"
          :value="getHomeTeamStats.offsides"
          >{{ getHomeTeamStats.offsides }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="19"
          buffer-value="100"
          :value="getAwayTeamStats.offsides"
          >{{ getAwayTeamStats.offsides }}</v-progress-linear
        >
        <div class="stats-grid stats-grid--fouls">Fouls</div>
        <v-progress-linear
          reverse
          class="progress"
          color="orange"
          buffer-value="100"
          height="19"
          :value="getHomeTeamStats.fouls"
          >{{ getHomeTeamStats.fouls }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="19"
          buffer-value="100"
          :value="getAwayTeamStats.fouls"
          >{{ getAwayTeamStats.fouls }}</v-progress-linear
        >
        <div class="stats-grid stats-grid--throw-in">Trow ins</div>
        <v-progress-linear
          reverse
          class="progress"
          color="orange"
          buffer-value="100"
          height="19"
          :value="getHomeTeamStats.throw_in"
          >{{ getHomeTeamStats.throw_in }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="19"
          buffer-value="100"
          :value="getAwayTeamStats.throw_in"
          >{{ getAwayTeamStats.throw_in }}</v-progress-linear
        >
        <div class="stats-grid stats-grid--yellow-card">Yellow cards</div>
        <v-progress-linear
          reverse
          class="progress"
          color="orange"
          buffer-value="100"
          height="19"
          :value="getHomeTeamStats.yellowcards"
          >{{ getHomeTeamStats.yellowcards }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="19"
          buffer-value="100"
          :value="getAwayTeamStats.yellowcards"
          >{{ getAwayTeamStats.yellowcards }}</v-progress-linear
        >
        <div class="stats-grid stats-grid--redcards">Redcards</div>
        <v-progress-linear
          reverse
          class="progress"
          color="orange"
          buffer-value="100"
          height="19"
          :value="getHomeTeamStats.redcards"
          >{{ getHomeTeamStats.redcards }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="19"
          buffer-value="100"
          :value="getAwayTeamStats.redcards"
          >{{ getAwayTeamStats.redcards }}</v-progress-linear
        >
        <div class="stats-grid stats-grid--goal-kick">Goal Kick</div>
        <v-progress-linear
          reverse
          class="progress"
          color="orange"
          buffer-value="100"
          height="19"
          :value="getHomeTeamStats.goal_kick"
          >{{ getHomeTeamStats.goal_kick }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="19"
          buffer-value="100"
          :value="getAwayTeamStats.goal_kick"
          >{{ getAwayTeamStats.goal_kick }}</v-progress-linear
        >
        <div class="stats-grid stats-grid--penalties">Penaltiesk</div>
        <v-progress-linear
          reverse
          class="progress"
          color="orange"
          buffer-value="100"
          height="19"
          :value="getHomeTeamStats.penalties"
          >{{ getHomeTeamStats.penalties }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="19"
          buffer-value="100"
          :value="getAwayTeamStats.penalties"
          >{{ getAwayTeamStats.penalties }}</v-progress-linear
        >
        <div class="stats-grid stats-grid--free-kick">Free Kick</div>
        <v-progress-linear
          reverse
          class="progress"
          color="orange"
          buffer-value="100"
          height="19"
          :value="getHomeTeamStats.free_kick"
          >{{ getHomeTeamStats.free_kick }}</v-progress-linear
        >
        <v-progress-linear
          color="orange"
          class="progress"
          height="19"
          buffer-value="100"
          :value="getAwayTeamStats.free_kick"
          >{{ getAwayTeamStats.free_kick }}</v-progress-linear
        >
      </div>
      <div class="events-container">
        <div class="events-header">Match Events</div>
        <div
          v-for="event in getMatchEvents"
          :key="event.id"
          class="events-grid"
        >
          <div class="events-grid__minutes">{{ event.minute }}'</div>

          <!-- <div class="events-grid__score">
            {{ event.result }}
          </div> -->

          <div v-if="event.type === 'injury'" class="events-grid__type--out">
            {{ event.type }}
          </div>
          <div
            v-else-if="event.type === 'back from injury'"
            class="events-grid__type--in"
          >
            {{ event.type }}
          </div>
          <div
            v-else-if="event.type === 'substitution'"
            class="events-grid__type--goal"
          >
            {{ event.type }}
          </div>
          <div v-else-if="event.type === 'goal'" class="events-grid__type--in">
            {{ event.type }}
          </div>

          <div v-else class="events-grid__type--goal">
            {{ event.type }}
          </div>

          <div v-if="event.type === 'goal'" class="events-grid__name--in">
            {{ event.player_name }}
          </div>
          <div
            v-else-if="event.type === 'substitution'"
            class="events-grid__name--in"
          >
            {{ event.player_name }}
          </div>
          <div v-else class="events-grid__name">
            {{ event.player_name }}
          </div>

          <div v-if="event.type === 'goal'" class="events-grid__name">
            (assist){{ event.related_player_name }}
          </div>
          <div
            v-else-if="event.type === 'substitution'"
            class="events-grid__name--out"
          >
            out: {{ event.related_player_name }}
          </div>
          <div v-else class="events-grid__name--in">
            {{ event.related_player_name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "MatchDetails",
  components: {},
  props: {
    matchId: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {};
  },
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
    getHomeLineup() {
      return this.$store.getHomeLineup;
    },
    getAwayLineup() {
      return this.$store.getAwayLineup;
    },

    ...mapGetters([
      "getHomeTeam",
      "getHomeTeamStats",
      "getAwayTeamStats",
      "getMatchEvents",
      "getHomeLineup",
      "getAwayLineup"
    ]),
    ...mapState(["matchID"])
  },

  created() {
    this.$store.dispatch("fetchMatch", this.matchId);
  }
};
</script>
