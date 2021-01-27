<template>
  <div class="navigation-container">
    <div class="navigation-container__item">
      <router-link
        :to="{
          name: 'Home'
        }"
        class="navigation-container__link"
      >
        Soccer
      </router-link>
    </div>

    <div class="navigation-container__item">
      <router-link
        :to="{
          name: 'Teams'
        }"
        class="navigation-container__link"
      >
        Teams
      </router-link>
    </div>
    <div class="navigation-container__item">
      <router-link
        :to="{
          name: 'Venues'
        }"
        class="navigation-container__link"
      >
        Venues
      </router-link>
    </div>
    <div class="navigation-container__item">
      <router-link
        :to="{
          name: 'Markets'
        }"
        class="navigation-container__link"
      >
        Markets
      </router-link>
    </div>
    <div class="navigation-container__item">
      <router-link
        :to="{
          name: 'About'
        }"
        class="navigation-container__link"
      >
        About
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>
