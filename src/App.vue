<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="ALEF" class="logo" src="@/assets/alef-logo.svg"/>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Форма</RouterLink>
        <RouterLink to="/preview">Превью</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
  <footer>
    all rights reserved
  </footer>
</template>

<style scoped>
  header {
    margin: 0 51px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 76px;
    align-items: center;
  }
  footer {
    padding: 0 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 76px;
    background: #FAFAFA;
  }
  nav {
    display: grid;
    grid-template-columns: max-content max-content;
    column-gap: 24px;
  }
</style>
