import { defineStore } from 'pinia'

export const useAuthenticated = defineStore('useAuthenticated', {
  state: () => {
    return {
      isAuthenticated: false,
    }
  },
  persist: true
})

// export const useAuthenticated = () => {
//   return useState<Boolean>('useAuthenticated', () => false)
// }