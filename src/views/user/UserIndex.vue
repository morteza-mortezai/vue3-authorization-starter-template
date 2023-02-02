<script setup>
import { RouterView } from 'vue-router';
</script>
<template>
  <h1>user index</h1>
  <RouterView />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
