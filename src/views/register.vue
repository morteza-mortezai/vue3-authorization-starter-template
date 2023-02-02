<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth';
const form = ref({
  emailPhone: '',
  fullName: '',
  password: ''
})
</script>
<template>
  <h1>Register</h1>
  <input type="text" placeholder="email" v-model="form.emailPhone">
  <input type="text" placeholder="name" v-model="form.fullName">
  <input type="text" placeholder="password" v-model="form.password">
  <button @click="useAuthStore().register(form)">reg</button>
</template>
