import { useAuthStore } from '@/stores/auth'

export async function auth(to, from, next) {
    const auth = useAuthStore()
    const token = localStorage.getItem('token')
    const loggedIn = auth.loggedIn
    // restrict user from authorized routes
    if (!loggedIn && to.meta.auth) {
        if (token) {
            try {
                await auth.userInfo()
                return next()
            } catch (error) {
                return next({ name: 'login' })
            }
        } else {
            return next({ name: 'login' })
        }
    }
    next()
}
