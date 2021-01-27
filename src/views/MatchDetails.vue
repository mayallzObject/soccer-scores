<template>
  <div>
    <div class="status-container">
      <div class="status">Finished</div>
      <div class="match-start">21-01-26 14:00:00</div>
      <div class="minute"></div>
      <div class="stage-name">Preseason</div>
    </div>

    <div class="stats-container">
      <div class="ht_score">0 : 1</div>
      <div class="ft_score">1 : 2</div>
    </div>

    <div class="venue-container">
      <div class="name">Ajax Stadium</div>
      <div class="city">Amsterdam</div>
      <div class="capacity">20,000</div>
    </div>

    <div class="teams-container">
      <div class="home-team">
        <div class="home-team__name">Ajax</div>
        <ul class="away-team__stats">
          <li>redcard: 1</li>
          <li>yellowcards: 3</li>
          <li>attacks: 50</li>
          <li>shots: 30</li>
          <li>shots on targer: 20</li>
        </ul>
      </div>

      <div class="away-team">
        <div class="away-team__name"></div>
        <ul class="away-team__stats">
          <li>redcard: 1</li>
          <li>yellowcards: 3</li>
          <li>attacks: 50</li>
          <li>shots: 30</li>
          <li>shots on targer: 20</li>
        </ul>
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
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters(["getHomeTeam"]),
    ...mapState(["matchID"])
  },

  created() {
    this.$store.dispatch("fetchMatch", this.matchId);
  }
};
</script>
