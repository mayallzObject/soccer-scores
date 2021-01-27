<template>
  <div class="details-container">
    <div class="details-header">
      <div class="details-header__stadium">Stadium: Ajax Stadium</div>
      <div class="details-header__city">City: Amsterdam</div>
      <div class="details-header__league">Eerstedevise</div>
      <div class="details-header__round">Preseason</div>
    </div>

    <!-- <section class="stats-container">
      <div class="ht_score">0 : 1</div>
      <div class="ft_score">1 : 2</div>
    </section> -->

    <!-- <section class="teams-container">
      <div class="home-team">
        <div class="home-team__name">Ajax</div>
        <ul class="home-team__stats">
          <li>redcard: 1</li>
          <li>yellowcards: 3</li>
          <li>attacks: 50</li>
          <li>shots: 30</li>
          <li>shots on targer: 20</li>
        </ul>
      </div>

      <div class="away-team__name">Eindhoven</div>
      <section class="away-team">
        <ul class="away-team__stats">
          <li>redcard: 1</li>
          <li>yellowcards: 3</li>
          <li>attacks: 50</li>
          <li>shots: 30</li>
          <li>shots on targer: 20</li>
        </ul>
      </section>
    </section> -->
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
