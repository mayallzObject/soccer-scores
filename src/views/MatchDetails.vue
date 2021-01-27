<template>
  <div>
    <div class="details-header">
      <div class="details-header__stadium">Stadium: Ajax Stadium</div>
      <div class="details-header__round">Preseason</div>
      <div class="details-header__city">City: Amsterdam</div>
      <div class="details-header__league">Eerstedevise</div>
    </div>
    <div class="match-info"></div>

    <div class="stats container"></div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "MatchDetails",
  components: {},
  // props: {
  //   matachId: "14985",
  // },
  data() {
    return {
      matchId: "14985"
    };
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
