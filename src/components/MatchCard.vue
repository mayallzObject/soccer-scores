<template>
  <div class="matches-container">
    <router-link
      v-slot="{ navigate }"
      custom
      class="match-link"
      :to="{
        name: 'MatchDetails',
        params: { matchId: match.match_id }
      }"
    >
      <span role="link" @click="navigate" @keypress.enter="navigate">
        <div class="match">
          <!-- STATUS-->
          <div v-if="match.status === 'notstarted'" class="match__status">
            {{ match.match_start.substring(11, 16) }}
          </div>
          <div v-else class="match__status">
            FT
          </div>
          <img :src="match.home_team.logo" alt="away-log" class="match__img" />

          <!-- HOME-TEAM + FIX FOR EMPTY STRING IN 'COMMON_NAME'-->
          <div
            v-if="match.home_team.common_name === ''"
            class="match__team-home"
          >
            {{ match.home_team.name }}
          </div>
          <div v-else class="match__team-home">
            {{ match.home_team.common_name }}
          </div>

          <!-- STATUS -->
          <div v-if="match.status === 'notstarted'" class="match__score">
            ? - ?
          </div>
          <div v-else class="match__score">
            {{ match.stats.ft_score }}
          </div>

          <!-- AWAY-TEAM + FIX-->
          <div
            v-if="match.away_team.common_name === ''"
            class="match__team-away"
          >
            {{ match.away_team.name }}
          </div>
          <div v-else class="match__team-away">
            {{ match.away_team.common_name }}
          </div>
          <img :src="match.away_team.logo" alt="away-log" class="match__img" />
        </div>
      </span>
    </router-link>
  </div>
</template>

<script>
// import { mapState, mapGetters } from "vuex";

export default {
  name: "MatchCard",
  props: {
    match: {
      type: Object,
      required: true
    }
  }
};
</script>
