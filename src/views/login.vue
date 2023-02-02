<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth';
const router = useRouter()
const auth = useAuthStore()
const form = ref({
  emailPhone: 'a@a.aa',
  password: '123456789'
})
const login = async () => {
  try {
    await auth.login(form)
    router.push({ name: 'home' })
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <h1>login</h1>
  <RouterLink :to="{ name: 'register' }">register</RouterLink>
  <div>
    <input type="text" v-model="form.emailPhone">
    <input type="text" v-model="form.password">
    <button @click="login">login</button>

  </div>
</template>

<style>

</style>
