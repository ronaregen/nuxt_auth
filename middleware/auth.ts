import { useAuthenticated } from "~~/composables/auth"

export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  if (useAuthenticated().isAuthenticated === false) {
    return navigateTo('/login')
  }
})

