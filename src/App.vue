<template>
  <v-app>
    <header class="header">
      <router-link to="/29dreamfairy" class="logo">
        <img src="./assets/img/logo.png" alt>
      </router-link>
    </header>
    <router-view />
  </v-app>
</template>

<script setup>
// custom css
import '@/css/common.css';
import '@/css/layout.css';
</script>
