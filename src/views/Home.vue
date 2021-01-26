<template>
  <div class="home-view">
    <div class="left-sidebar">
      <div class="league-nav">
        <div>
          <h1>
            sidenav>
          </h1>
        </div>
        <button class="league-nav__item">
          1. Eredivisie
        </button>
        <button class="league-nav__item">
          2. Eerste Divisie
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      id: ""
    };
  },
  computed: {
    ...mapState(["dutch_1", "dutch_2"]),
    ...mapActions(["fetchDutchOne", "fetchDutchTwo"]),
    ...mapGetters(["getSeasonOne", "getSeasonTwo"])
  },
  created() {
    this.$store.dispatch("fetchDutchOne");
  },
  methods: {}
};
</script>
