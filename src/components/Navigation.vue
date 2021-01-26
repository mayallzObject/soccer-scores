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
          name: 'Home'
        }"
        class="navigation-container__link"
      >
        Tennis
      </router-link>
    </div>
    <div class="navigation-container__item">
      <router-link
        :to="{
          name: 'Home'
        }"
        class="navigation-container__link"
      >
        Basketball
      </router-link>
    </div>
    <div class="navigation-container__item">
      <router-link
        :to="{
          name: 'Home'
        }"
        class="navigation-container__link"
      >
        Contact
      </router-link>
    </div>
    <div class="navigation-container__item">
      <router-link
        :to="{
          name: 'Home'
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
