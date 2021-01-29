<template>
  <div class="match-details-card">
    <div>{{ details.match_id }}</div>
  </div>
</template>

<script>
export default {
  name: "MatchDetailsCard",
  props: {
    details: {
      type: Object,
      required: true
    }
  }
};
</script>
