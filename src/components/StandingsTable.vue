<template>
  <div class="standings-table">
    <div class="stats stats__position">
      {{ team.position }}
    </div>
    <div class="stats stats__name">{{ team.team_id }}</div>
    <div class="stats stats__points">
      {{ team.points }}
    </div>
    <div class="stats stats__games">
      {{ team.overall.games_played }}
    </div>
    <div class="stats stats__won">
      {{ team.overall.won }}
    </div>
    <div class="stats stats__lost">
      {{ team.overall.lost }}
    </div>
    <div class="stats stats__draw">
      {{ team.overall.draw }}
    </div>
    <div class="stats stats__goals">
      {{ team.overall.goals_scored }}
    </div>
  </div>
</template>

<script>
export default {
  name: "StandignsTable",
  props: {
    team: {
      type: Object,
      required: true
    }
  }
};
</script>
