<template>
  <v-app class="app-container">
    <Navigation />
    <router-view />
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>
