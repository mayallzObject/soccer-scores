<template>
  <div>
    <div class="football">
      <div class="left-sidebar">
        <div class="league-nav">
          <div class="league-nav__item">
            <button class="league-nav__link" @click="getSeasonId">
              Eredivisie
            </button>
          </div>
          <div class="league-nav__item">
            <button class="league-nav__link" @click="getSeasonIdDevision">
              Eerste Divisie
            </button>
          </div>
        </div>
      </div>
      <div class="main-content">
        <div class="main-content__filter" :class="filterHighlighter()">
          <!-- <button @click="getDateAll" class="football__button">All</button> -->
          <button class="main-content__button main-content__button--live">
            LIVE
          </button>
          <button class="main-content__button" @click="getDateOne">
            {{ period_1 }}
          </button>
          <button class="main-content__button" @click="getDateTwo">
            {{ period_2 }}
          </button>
          <button class="main-content__button" @click="getDateTree">
            {{ period_3 }}
          </button>
          <button class="main-content__button" @click="getDateFour">
            {{ period_4 }}
          </button>
          <button class="main-content__button" @click="getDateFive">
            {{ period_5 }}
          </button>
          <button class="main-content__button" @click="getDateSix">
            {{ period_6 }}
          </button>
          <button class="main-content__button" @click="getDateSeven">
            {{ period_7 }}
          </button>
        </div>
        <div class="match-header">
          <div class="match-header__date">
            {{ from }}
          </div>
        </div>
        <div v-if="id !== '' && from !== '' && to !== ''">
          <MatchCard
            v-for="match in matches"
            :key="match.match_id"
            :match="match"
          />
        </div>
        <div v-else-if="id !== '' && from === '' && to === ''">
          select date
        </div>
        <div v-else>
          <h2>Loading...</h2>
        </div>
      </div>
      <div class="right-sidebar">
        <div class="standings-header">Leaderboard</div>
        <StandingsTable
          v-for="team in standings"
          :key="team.team_id"
          :team="team"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import MatchCard from "@/components/MatchCard";
import StandingsTable from "@/components/StandingsTable";

import moment from "moment";

export default {
  name: "Football",
  components: {
    MatchCard,
    StandingsTable
  },

  data() {
    return {
      id: "",
      from: "",
      to: "",
      period_1: this.getPeriod(this.period_1),
      period_2: this.getPeriod(this.period_2),
      period_3: this.getPeriod(this.period_3),
      period_4: this.getPeriod(this.period_4),
      period_5: this.getPeriod(this.period_5),
      period_6: this.getPeriod(this.period_6),
      period_7: this.getPeriod(this.period_7)
    };
  },

  computed: {
    ...mapState(["matches", "dutch_1", "dutch_2", "standings"]),
    ...mapActions([
      "fetchMatches",
      "fetchDutchOne",
      "fetchDutchTwo",
      "fetchStangins"
    ]),
    ...mapGetters(["getSeasonOne", "getSeasonTwo"])
  },
  created() {
    this.$store.dispatch("fetchDutchOne");
    this.$store.dispatch("fetchDutchTwo");
    this.$store.dispatch("fetchStangins");

    setInterval(this.getPeriod, 1);
  },
  methods: {
    filterHighlighter() {
      if (this.id !== "" && this.from === "" && this.to === "") {
        return "main-content__filter--active";
      } else {
        return "main-content__filter";
      }
    },

    //! Temporary fix? or learn more!?
    getSeasonId() {
      this.$store.dispatch("fetchMatches", {
        id: (this.id = this.getSeasonOne[0]),
        from: this.from,
        to: this.to
      });
    },
    getPeriod() {
      const options = { month: "short", timeZone: "Europe/Amsterdam" };
      const today = new Date();
      // const date =
      //   today.toLocaleString("default", options) + " " + today.getDate();
      // this.period = date;

      const date_1 =
        today.toLocaleString("default", options) +
        " " +
        moment()
          .subtract(3, "days")
          .format("D");
      this.period_1 = date_1;

      const date_2 =
        today.toLocaleString("default", options) +
        " " +
        moment()
          .subtract(2, "days")
          .format("D");
      this.period_2 = date_2;

      const date_3 =
        today.toLocaleString("default", options) +
        " " +
        moment()
          .subtract(1, "days")
          .format("D");
      this.period_3 = date_3;

      const date_4 =
        today.toLocaleString("default", options) + " " + today.getDate();
      this.period_4 = date_4;

      const date_5 =
        today.toLocaleString("default", options) +
        " " +
        moment()
          .add(1, "days")
          .format("D");
      this.period_5 = date_5;

      const date_6 =
        today.toLocaleString("default", options) +
        " " +
        moment()
          .add(2, "days")
          .format("D");
      this.period_6 = date_6;

      const date_7 =
        today.toLocaleString("default", options) +
        " " +
        moment()
          .add(3, "days")
          .format("D");
      this.period_7 = date_7;
    },

    getSeasonIdDevision() {
      //! Temporary fix? or learn more!?
      this.$store.dispatch("fetchMatches", {
        id: (this.id = this.getSeasonTwo[0]),
        from: this.from,
        to: this.to
      });
    },
    getDateOne() {
      this.$store.dispatch("fetchMatches", {
        id: this.id,
        from: (this.from = moment()
          .subtract(3, "days")
          .format("YYYY-MM-DD")),
        to: (this.to = moment()
          .subtract(2, "days")
          .format("YYYY-MM-DD"))
      });
    },
    getDateTwo() {
      this.$store.dispatch("fetchMatches", {
        id: this.id,
        from: (this.from = moment()
          .subtract(2, "days")
          .format("YYYY-MM-DD")),
        to: (this.to = moment()
          .subtract(1, "days")
          .format("YYYY-MM-DD"))
      });
    },
    getDateTree() {
      this.$store.dispatch("fetchMatches", {
        id: this.id,
        from: (this.from = moment()
          .subtract(1, "days")
          .format("YYYY-MM-DD")),
        to: (this.to = moment().format("YYYY-MM-DD"))
      });
    },
    getDateFour() {
      this.$store.dispatch("fetchMatches", {
        id: this.id,
        from: (this.from = moment().format("YYYY-MM-DD")),
        to: (this.to = moment()
          .add(1, "days")
          .format("YYYY-MM-DD"))
      });
    },
    getDateFive() {
      this.$store.dispatch("fetchMatches", {
        id: this.id,
        from: (this.from = moment()
          .add(1, "days")
          .format("YYYY-MM-DD")),
        to: (this.to = moment()
          .add(2, "days")
          .format("YYYY-MM-DD"))
      });
    },
    getDateSix() {
      this.$store.dispatch("fetchMatches", {
        id: this.id,
        from: (this.from = moment()
          .add(2, "days")
          .format("YYYY-MM-DD")),
        to: (this.to = moment()
          .add(3, "days")
          .format("YYYY-MM-DD"))
      });
    },
    getDateSeven() {
      this.$store.dispatch("fetchMatches", {
        id: this.id,
        from: (this.from = moment()
          .add(3, "days")
          .format("YYYY-MM-DD")),
        to: (this.to = moment()
          .add(4, "days")
          .format("YYYY-MM-DD"))
      });
    }
  }
};
</script>
