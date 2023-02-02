import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import AuthService from '@/services/auth.js'
export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(null)

  const loggedIn = computed(() => !!user.value)

  async function login(data) {
    try {
      const res = await AuthService.login(data)
      token.value = res.data.token
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      console.log('err', err)
    }
  }
  async function register(data) {
    try {
      const res = await AuthService.register(data)
    } catch (err) {
      console.log('err', err)
    }
  }
  async function userInfo() {
    try {
      const res = await AuthService.user()
      if (res.data)
        user.value = res.data
      return Promise.resolve(res.data);
    } catch (err) {
      console.log('err', err)
      return Promise.reject(err);
    }
  }
  return { user, token, loggedIn, login, userInfo, register }
})
